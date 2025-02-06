"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Artboard, EfficiencyImage3, InnovationImage, markimage, SustainabilityImage4, TrustImage2 } from "@/constants/imageImports";

const texts = ["Innovation.", "Trust.", "Efficiency.", "Sustainability."];
const images = [InnovationImage, TrustImage2, EfficiencyImage3, SustainabilityImage4];

const Hero = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const positions = [
    { x: -100, y: -100 }, // Top-left
    { x: -100, y: 100 },  // Bottom-left
    { x: 100, y: 100 },   // Bottom-right
    { x: 100, y: -100 },  // Top-right
  ]; 

  return (
    <div className="flex flex-col md:flex-row p-4 md:p-6 items-center mt-4 gap-4 md:gap-8 h-full relative">
      <Image 
        src={markimage} 
        alt="markedImage" 
        className="absolute top-0 -left-4 " 
        width={0}
        height={0}
      />

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-0 md:mt-2">
        <p className="max-w-[727px] font-inter text-[40px] md:text-[70px] font-extrabold leading-[1.2] md:leading-[91px]">
          Empowering <br className="hidden md:block" /> The Yarn Industry
        </p>
        
        <div className="flex mt-2 md:mt-4 items-end">
          <p className="text-[#A3A2A2] p-2 text-center font-inter text-[24px] md:text-[30px] font-extrabold leading-[130%]">
            with
          </p>
          <span className="relative block h-[40px] md:h-[51px] w-[280px] md:w-[535px]">
            {texts.map((text, i) => (
              <motion.h1
                key={text}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: i === index ? 0 : 50, opacity: i === index ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute left-0 right-0 text-[40px] md:text-[75px] text-left text-[#F8D53C]"
              >
                {text}
              </motion.h1>
            ))}
          </span>
        </div>

        <p className="text-[#111] text-base md:text-xl mt-1 md:mt-3 py-2 md:py-4 px-2 font-semibold">
          Discover and Buy Top Quality Yarn at Unbeatable Prices
        </p>
      </div>

      {/* Image Grid Section */}
      <div className="w-full md:w-1/2 bg-[#F4F1E2] relative h-[300px] md:h-[500px]  ">
        <div className="w-[70%] h-full mr-6 transform md:-rotate-[45deg]">
          {images.map((img, i) => {
            const newPosition = (i - index + images.length) % images.length;
            const isActive = newPosition === 0;

            return (
              <motion.div
                key={i}
                className="absolute left-[50%] top-[50%] origin-center"
                initial={{ opacity: 0 }}
                animate={{
                  x: positions[newPosition].x * (window.innerWidth < 768 ? 0.7 : 1),
                  y: positions[newPosition].y * (window.innerWidth < 768 ? 0.7 : 1),
                  scale: isActive ? (window.innerWidth < 768 ? 1.3 : 1.5) : 0.8,
                  opacity: isActive ? 1 : 0.7,
                  zIndex: isActive ? 10 : 1,
                  marginLeft: isActive ? 10 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Image
                  src={img}
                  alt={`Image ${i + 1}`}
                  width={window.innerWidth < 768 ? 120 : 180}
                  height={window.innerWidth < 768 ? 120 : 180}
                  className="transform rotate-45 md:rotate-[45deg] mx-1 md:mx-2"
                />
              </motion.div>
            );
          })}
        </div>
         {/* <Image 
        src={Artboard} 
        alt="ArtBoard" 
        className="absolute top-[380px] -right-0 object-fit" 
         /> */}
      </div>

     
    </div>
  )
}

export default Hero
