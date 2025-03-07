// components/UnderConstruction.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GearIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';

const UnderConstruction = () => {
    const [launchDate] = useState(new Date('2025-03-21'));
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = launchDate.getTime() - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);

    return (
        <div className="min-h-screen bg-[#FFF8F8] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl w-full text-center space-y-8"
            >
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
                    className="flex justify-center"
                >
                    <GearIcon className="w-24 h-24 text-[#FFAB1A]" />
                </motion.div>

                <h1 className="text-4xl font-bold text-[#2A2A2A]">
                    This Page is Under Construction!
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.5 }}
                        className="h-1 bg-[#FFCFC242] mt-2 mx-auto"
                    />
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl text-[#555555] mt-4"
                >
                    Our yarn experts are crafting the perfect trading experience!
                </motion.p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <motion.div
                            key={unit}
                            whileHover={{ scale: 1.05 }}
                            className="bg-[#FFCFC242] backdrop-blur-lg rounded-lg p-4 border-2 border-[#FFAB1A]/20"
                        >
                            <div className="text-4xl font-bold text-[#FFAB1A]">{value}</div>
                            <div className="text-[#555555] uppercase text-sm mt-2">{unit}</div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-12"
                >
                    <p className="text-[#555555] mb-4">Get notified when we're ready:</p>
                    <div className="flex justify-center space-x-6">
                        <motion.a
                            whileHover={{ y: -2 }}
                            href="mailto:contact@yarnbroker.com"
                            className="flex items-center gap-2 text-[#FFAB1A] hover:text-[#FFCFC2] transition-colors font-medium"
                        >
                            <EnvelopeClosedIcon className="w-6 h-6" />
                            Subscribe for Updates
                        </motion.a>
                    </div>
                </motion.div>

              
            </motion.div>
        </div>
    );
};

export default UnderConstruction;