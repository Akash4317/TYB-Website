"use client";
import "swiper/css/bundle";
import React from "react";
import Subheading from "../ui/Subheading";
import Image from "next/image";
import stbadge from "@/images/stbadge.jpg";

const videoUrl =
    "https://www.youtube.com/embed/Yi7xfOPMVdE?autoplay=1&mute=1&rel=0&showinfo=0";

const Glory = () => {
    return (
        <div className="bg-[#FFCFC242] my-10 flex flex-col items-center py-10">
            <Subheading text="Moment of Glory" className="text-center " />        
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-0  p-4 md:py-12 w-full max-w-6xl">
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-[90%] h-[220px] md:h-[320px]">
                            <Image
                                src={stbadge}
                                alt="Shark Tank India Badge"
                                width={240}
                                height={360}
                                className="w-full h-full object-contain rounded-lg"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                        <div className="relative w-full h-[220px] md:h-[320px] rounded-lg overflow-hidden shadow-lg">
                            <iframe
                                width="100%"
                                height="100%"
                                src={videoUrl}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-6xl flex justify-center pl-14 ml-12 text-xl/7">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                </div> 
          </div>
          
        </div>
    );
};

export default Glory;
