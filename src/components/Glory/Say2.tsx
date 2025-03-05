"use client";
import React from 'react';
import Subheading from '../ui/Subheading';
import { PeopleTestimonials } from '@/constants/constant';
import TYBLogo from '@/images/tyb.svg';
import Image from 'next/image';
import user from '@/images/Avatar2.svg'
import 'swiper/css';
import 'swiper/css/navigation';

const Say2 = () => {
    const duplicatedTestimonials = [...PeopleTestimonials, ...PeopleTestimonials];

    return (
        <div className='w-full bg-white pb-20 overflow-hidden'>
            <Subheading text='What People Say' className='text-center py-[80px]' />

            <div className='marquee-container relative overflow-hidden'>
                <div className='flex p-4 animate-marquee-infinite'>
                    {duplicatedTestimonials.map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 mx-4 relative bg-white rounded-lg shadow-md p-5 w-[350px] transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <span className="absolute top-3 right-4 cursor-pointer">
                                <Image src={TYBLogo} alt="TYB Icon" width={25} />
                            </span>
                            <Image
                                className="rounded-full w-10 h-10 float-left mr-2.5"
                                src={user}
                                alt={item.name}
                                width={40}
                                height={40}
                            />
                            {/* <h3 className="text-lg m-0">{item.name}</h3> */}
                            <h3 className="text-lg m-0">Lorem Ipsum</h3> 
                            {/* <span className="text-gray-500 text-xs">{item.username}</span> */}
                            <span className="text-gray-500 text-xs">Lorem Ipsum</span>
                            <p className="text-sm font-normal text-gray-900 mt-3">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Say2;