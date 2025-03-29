'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Innovation from '@/images/innovation.png';
import Trust from '@/images/trust.png';
import Efficiency from '@/images/efficiency.png';
import Sustainability from '@/images/sustainability.svg';

const texts = ["Innovation.", "Trust.", "Efficiency.", "Sustainability."];
const images = [Innovation, Trust, Efficiency, Sustainability];
const colors = [
  "#FFAB1A",
  "#F45E50",
  "#A23934",
  "#F8D63B",
];

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
      className="h-full w-full flex items-center mt-4 md:mt-0"
      style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="relative w-full max-w-[95%] mx-auto px-4 mt-8 py-8 md:py-0 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-0 md:space-y-4">
          <h1 className="text-4xl md:text-6xl xl:text-[64px] font-bold leading-tight md:leading-tight">
            Empowering The <br className="hidden md:block" /> Yarn Industry with
          </h1>

          <div className="relative h-20 md:h-28 w-full">
            <AnimatePresence mode="wait">
              <motion.span
                key={texts[index]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ color: colors[index] }}
                className="absolute inset-4 md:inset-0 text-5xl md:text-8xl  bg-gradient-to-r from-[#FFAB1A] to-[#ffd58a] bg-clip-text text-transparent font-extrabold"
              >
                {texts[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          <p className="text-lg md:text-xl lg:text-xl mt  max-w-2xl mx-auto md:mx-0 pl-2  ">
            Discover and Buy Top Quality Yarn at Unbeatable Prices
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full  md:w-1/2 flex flex-col items-center max-w-[280px] sm:max-w-[320px] md:max-w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-[200px] md:top-0 "
            >
              <Image
              src={images[index]}
              alt="main"
              width={210} 
              height={210}
              className="object-cover md:w-[250px] md:h-[250px]" 
              />
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col items-center mt-[180px] md:mt-[250px]">
            <motion.div
              key={`base1-${index}`}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className=""
            >
              <Image src={base} alt="base" width={220} height={220} />
            </motion.div>
            <motion.div
              key={`base2-${index}`}
              initial={{ y: 0 }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              className="-mt-4"
            >
              <Image src={base} alt="base" width={220} height={220} />
            </motion.div>
            <motion.div
              key={`base3-${index}`}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
              className="-mt-10"
            >
              <Image src={base} alt="base" width={220} height={220} />
            </motion.div>
            <motion.div
              key={`base4-${index}`}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              className="-mt-10"
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
