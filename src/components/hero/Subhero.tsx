"use client"
import markimage from '@/images/mark.png'
import TYBWEB from '@/images/TYBWeb.png'
import Artboard from '@/images/Artboard.png'
import Image from 'next/image'
import React from 'react'
import Subheading from '../ui/Subheading'
import { Button } from '../ui/button'

const Subhero = () => {
    return (
        <div className='flex flex-col md:flex-row p-4 md:p-6 items-center -mt-[60px] md:mt-4 gap-4 md:gap-8 h-full relative'>
            <Image
                src={markimage}
                alt="markedImage"
                className="absolute top-0 -left-4 hidden md:block"
                width={0}
                height={0}
            />
            <div className='flex flex-col md:flex-row gap-4 w-full items-center'>
                <div className='flex flex-col md:w-1/2'>
                    <Subheading text='Who Are We' className='text-[#B02430]' />
                    <p className='text-[#B02430] font-poppins text-[25px] mt-4 md:mt-10 text-normal font-medium leading-[130%]'>One stop yarn solution</p>
                    <p className='text-[#323433] w-full md:w-[620px] my-5 font-poppins text-[18px] font-text font-medium leading-[130%]'>
                        At The Yarn Bazaar, we are reshaping the yarn and textile industry with a tech-first approach. Our platform bridges the gap between buyers and sellers, creating a seamless and transparent trading experience by leveraging advanced tools and a commitment to innovation.
                    </p>
                    <Button variant='default' size='lg' className='mt-2 w-[187px] text-md font-poppins bg-[#F89E24] font-[600] rounded-[15px]' onClick={() => window.location.href = '/contact-us'}>Talk To Us</Button>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <Image src={TYBWEB} alt='WEB Illustrator' className=' object-contain' width={454} height={343.906} />
                </div>
            </div>
              
        </div>
    )
}

export default Subhero
