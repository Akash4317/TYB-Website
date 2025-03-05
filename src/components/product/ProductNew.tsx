'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import productImage from '@/images/productss.png'
import playImage from '@/images/playImage.png'
import ProductCarousel from './ProductCarousel'

const ProductNew = () => {
    return (
        <div className='w-full bg-[#FFCFC242] py-4'>
            <div className='max-w-[95%] mx-auto h-full p-4  flex flex-col md:flex-row justify-between items-center '>
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-semibold mb-8">Our Products</h2>
                    <p className="text-[#6F727B] max-w-[500px] mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <div className="w-full flex justify-center md:justify-start">
                        <Button
                            variant="default"
                            size="lg"
                            className="mt-2 w-[187px] text-md font-poppins bg-[#FD5B2F] font-[600] rounded-[25px]"
                            onClick={() => window.location.href = '/contact-us'}
                        >
                            Talk To Us
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-black/90">
                            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
                        </div>

                        <div className="relative border-b-8 border-r-8 border-[#FFAB1A] rounded-xl">
                            <Image
                                src={productImage}
                                alt="Product Image"
                                width={0}
                                height={0}
                                className="object-contain  md:max-w-[625PX] relative z-10"
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 z-40 flex items-center justify-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white bg-black/20 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-transform duration-300 hover:scale-110">
                                    <Image
                                        src={playImage}
                                        alt="Play Button"
                                        width={24}
                                        height={24}
                                        className="w-6 h-6 md:w-8 md:h-8"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <ProductCarousel />
        </div>
    )
}

export default ProductNew
