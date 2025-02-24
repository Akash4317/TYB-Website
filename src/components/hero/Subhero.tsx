"use client"
import we from '@/images/we.jpg'
import Image from 'next/image'
import React from 'react'
import Subheading from '../ui/Subheading'
import { Button } from '../ui/button'

const Subhero = () => {
    return (
        <div className='bg-[#ffffff]'>
            <div className='flex  flex-col md:flex-row items-center p-4 md:p-12 gap-6 md:gap-12 w-full max-w-[95%] mx-auto relative'>

                {/* Left Content Section */}
                <div className='flex flex-col items-center md:items-start w-full md:w-1/2 text-center md:text-left'>
                    <Subheading text='Who Are We' />
                    <p className='text-[#B02430] font-poppins text-[24px] md:text-[28px] font-medium leading-[130%] mt-4 md:mt-10'>
                        One stop yarn solution
                    </p>
                    <p className='text-[#323433] w-full max-w-[580px] my-5 font-poppins text-[16px] md:text-[18px] leading-[130%]'>
                        At The Yarn Bazaar, we are reshaping the yarn and textile industry with a tech-first approach.
                        Our platform bridges the gap between buyers and sellers, creating a seamless and transparent trading experience by leveraging advanced tools and a commitment to innovation.
                    </p>

                    {/* Button */}
                    <div className="w-full flex justify-center md:justify-start">
                        <Button
                            variant='default'
                            size='lg'
                            className='mt-2 w-[187px] text-md font-poppins bg-[#FD5B2F] font-[600] rounded-[25px]'
                            onClick={() => window.location.href = '/contact-us'}
                        >
                            Talk To Us
                        </Button>
                    </div>
                   
                </div>

                {/* Right Image Section */}
                <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
                    <Image
                        src={we}
                        alt=''
                        className='object-contain max-w-[80%] md:max-w-[454px]'
                        width={454}
                        height={343}
                    />
                </div>
            </div>
        </div>
       
    )
}


export default Subhero
