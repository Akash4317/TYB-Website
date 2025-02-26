"use client";
import React from 'react';
import Subheading from '../ui/Subheading';
import { testimonialsSay } from '@/constants/constant';
import Image from 'next/image';
import testmark from '@/images/testMark.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 

const Say2 = () => {
    return (
        <div className='w-full bg-white pb-20'>
            <Subheading text='What People Say' className='text-[#B02430] text-center py-[80px]' />

            <div className="container mx-auto px-4 relative"> 
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    navigation={{
                        nextEl: ".swiper1-button-next",
                        prevEl: ".swiper1-button-prev",
                    }}
                    className="testimonial-swiper"
                >
                    {testimonialsSay.map((testimonials) => (
                        <SwiperSlide key={testimonials.id} className='p-1'>
                            <div className="max-w-[400px] mx-auto bg-white rounded-3xl shadow-md overflow-hidden transition-transform duration-300 scale-90 hover:scale-95 swiper-slide">
                                <div className="bg-[#FFF3EF] p-4 flex items-center space-x-4 relative">
                                    <Image
                                        src={testimonials.image}
                                        alt={testimonials.name}
                                        className="w-12 h-12 rounded-full"
                                        width={48}
                                        height={48}
                                    />
                                    <div>
                                        <Image
                                            src={testmark}
                                            alt="markedImage"
                                            className="absolute -left-4 w-12 h-12 object-cover"
                                            width={48}
                                            height={48}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold">{testimonials.name}</p>
                                        <p className="text-gray-600">{testimonials.username}</p>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-xl font-medium">{testimonials.title}</p>
                                    <p className="mt-2 font-thin text-sm">{testimonials.text}</p>
                                </div>
                                <div className="p-4 text-center text-gray-400 font-semibold">
                                    {testimonials.company}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button className="swiper-button-prev swiper1-button-prev absolute !-left-5 top-1/2 -translate-y-1/2 z-10"></button>
                <button className="swiper-button-next swiper1-button-next absolute !-right-5 top-1/2 -translate-y-1/2 z-10"></button>
            </div>
        </div>
    )
}

export default Say2;