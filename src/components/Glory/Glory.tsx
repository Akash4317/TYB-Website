"use client"
import 'swiper/css/bundle';
import React from 'react'
import Subheading from '../ui/Subheading'
import Image from 'next/image'
import { testimonials } from '@/constants/constant';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';

const Glory = () => {
    return (
        <div>
            <Subheading text='Moment of Glory' className='text-[#B02430] text-center py-[20px]' />
            <Carousel>
                <CarouselContent className="flex justify-center my-10 gap-6 md:p-0 p-4">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-full md:basis-2/3 lg:basis-2/3 flex justify-center"
                        >
                            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-12 w-full ">
                                <div className="w-full md:w-1/2 rounded-xl overflow-hidden p-4 bg-yellow-400">
                                    {/* {testimonial.videoUrl ? (
                                        <iframe
                                            className="w-full h-56 md:h-full"
                                            src={testimonial.videoUrl}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : ( */}
                                        <Image className='w-full h-auto' src={testimonial.image} width={0} height={0} alt={testimonial.title} />
                                    {/* )} */}
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <p className="text-[#B02430] font-poppins text-[28px] font-semibold leading-[130%]">{testimonial.title}</p>
                                    <ul className="mt-4 space-y-2">
                                        {testimonial.highlights.map((item, idx) => (
                                            <li key={idx} className="flex items-center text-gray-700 text-lg">
                                                <span className="text-[#B02430] mr-5 text-3xl">◆</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <div className="flex justify-center gap-4  mt-12">
                    <CarouselPrevious className="static border border-[#B02430] bg-[#B02430] text-white h-12 w-20 hover:bg-[#932730] transform" />
                    <CarouselNext className="static border border-[#B02430] bg-[#B02430] text-white h-12 w-20 hover:bg-[#932730]" />
                </div>
            </Carousel>
        </div>
    )
}

export default Glory



 {/* YouTube Video Embed */}
                                
                                {/* <iframe
                                    className="w-full h-56 md:h-full"
                                    src={testimonial.videoUrl}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe> */}