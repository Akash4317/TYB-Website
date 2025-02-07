"use client"
import 'swiper/css/bundle';
import React from 'react'
import Subheading from '../ui/Subheading'
import Image from 'next/image'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { testimonials } from '@/constants/constant';

const Glory = () => {
    const swiper = useSwiper();
    return (
        <div>
            <Subheading text='Moment of Glory' className='text-[#B02430] text-center py-[40px]' />
            <div className="w-full px-4 py-6">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1.2}
                    centeredSlides={true}
                    navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide
                        key={index} className="flex justify-center">
                        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-10 w-3/4 ">
                            <div className="w-full md:w-1/2 rounded-xl overflow-hidden p-4 bg-yellow-400">
                                <Image className='w-full' src={testimonial.image} width={0} height={0} alt='carousel' />
                                
                                {/* YouTube Video Embed */}
                                
                                {/* <iframe
                                    className="w-full h-56 md:h-full"
                                    src={testimonial.videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe> */}
                            </div>
                            {/* Text Content */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <p className="text-[#B02430] font-poppins text-[25px] text-normal font-medium leading-[130%]">{testimonial.title}</p>
                                <ul className="mt-4 space-y-2">
                                    {testimonial.highlights.map((item, idx) => (
                                        <li key={idx} className="flex items-center text-gray-700">
                                            <span className="text-[#B02430] mr-5 text-3xl">◆</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                           
                        </div>
                    </SwiperSlide>
                ))}
                </Swiper>
                <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
            </div>
        </div>
    )
}

export default Glory
