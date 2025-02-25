"use client";
import "swiper/css/bundle";
import React from "react";
import Subheading from "../ui/Subheading";
import Image from "next/image";
import stbadge from "@/images/stbadge.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import car1 from '@/images/car1.jpg';
import car2 from '@/images/car2.svg';
import car3 from '@/images/car3.svg';

const videoUrl = "https://www.youtube.com/embed/Yi7xfOPMVdE?autoplay=1&mute=1&rel=0&showinfo=0";

const images = [car1, car2, car3, car1, car2, car3];

const Glory = () => {
    return (
        <div className="bg-[#FFCFC242] py-16 lg:py-14">
            <div className="container mx-auto px-4">
                <Subheading text="Moment of Glory" className="text-center mb-12" />
                <div className="flex flex-row gap-8 xl:gap-12 mb-16">
                    <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[360px] aspect-[3/4]">
                            <Image
                                src={stbadge}
                                alt="Shark Tank India Badge"
                                fill
                                className="object-contain rounded-xl"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-2/3 aspect-video lg:aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
                        <iframe
                            width="100%"
                            height="100%"
                            src={videoUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        />
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mb-12">
                    <p className="text-lg md:text-xl text-center text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </p>
                </div>

                <div className="max-w-6xl mx-auto mb-12">
                    <hr className="border-t-2 border-[#FFAB1A]" />
                </div>

                {/* Carousel Section */}
                <div className=" py-12">
                    <div className="relative max-w-6xl mx-auto px-6">
                        <div className="px-10">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={1}
                                centeredSlides={true}
                                slideVisibleClass="visible-slide"
                                watchSlidesProgress={true}
                                loop={true}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                className="relative"
                            >
                                {images.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="slide-container">
                                            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                                                <Image
                                                    src={src}
                                                    alt={`Event ${index + 1}`}
                                                    width={285}
                                                    height={352}
                                                    className="w-full h-[250px] object-cover"
                                                />
                                                <div className="p-4">
                                                    <h3 className="font-bold text-lg">
                                                        Lorem ipsum dolor sit amet, consectetur
                                                    </h3>
                                                    <p className="text-gray-600 text-sm mt-2">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                                        do eiusmod tempor incididunt ut labore et dolore magna
                                                        aliqua. Ut enim ad minim veniam.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <button className="swiper-button-prev absolute left-[0px] top-1/2 z-10 ">
                        </button>
                        <button className="swiper-button-next absolute right-[0px] top-1/2 z-10 ">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Glory;