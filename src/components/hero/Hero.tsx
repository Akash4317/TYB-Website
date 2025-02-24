'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Innovation from '@/images/innovation.png';
import Trust from '@/images/trust.png';
import Efficiency from '@/images/efficiency.png';
import Sustainability from '@/images/sustainability.png';

const texts = ["Innovation.", "Trust.", "Efficiency.", "Sustainability."];
const images = [Innovation, Trust, Efficiency, Sustainability];

const Hero = () => {
  const backgroundImageUrl = 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/bg-new.jpg';
  const base = 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/base.svg';

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-full w-full flex items-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative w-full max-w-[95%] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl leading-tight md:leading-snug">
            Empowering The <br /> Yarn Industry with
          </h1>
          <span className="relative flex items-center justify-center h-[40px] md:h-[51px] w-[280px] md:w-[535px] mx-auto md:mx-0">
            <AnimatePresence mode="wait">
              <motion.h1
                key={texts[index]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 top-5 text-[40px] md:text-[90px] text-[#FFAB1A]"
              >
                {texts[index]}
              </motion.h1>
            </AnimatePresence>
          </span>
          <p className="text-xl pt-12 ml-2 ">
            Discover and Buy Top Quality Yarn at Unbeatable Prices
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center max-w-[280px] sm:max-w-[320px] md:max-w-full">
          {/* Main Image Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative"
            >
              <Image src={images[index]} alt="main" width={300} height={220} className="object-cover" />
            </motion.div>
          </AnimatePresence>
          {/* Base Images with Bounce Animation */}
          <div className="flex flex-col items-center mt-4">
            <motion.div
              key={`base1-${index}`}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="mt-0 md:-mt-4"
            >
              <Image src={base} alt="base" width={220} height={220} />
            </motion.div>
            <motion.div
              key={`base2-${index}`}
              initial={{ y: 0 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              className="mt-0 md:-mb-4"
            >
              <Image src={base} alt="base" width={220} height={220} />
            </motion.div>
            <motion.div
              key={`base3-${index}`}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              className="mt-0 md:-mt-6"
            >
              <Image src={base} alt="base" width={220} height={220} />
            </motion.div>
            <motion.div
              key={`base4-${index}`}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="mt-0 md:-mt-10"
            >
              <Image src={base} alt="base" width={220} height={220} />
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
