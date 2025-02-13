'use client'
import React from 'react';
import Subheading from '../ui/Subheading';
import Image from 'next/image';
import markimage from "@/images/mark.png";
import icon from "@/images/Icon.png"
import avatar from "@/images/avataar.png"
import rightMark from "@/images/rightMark.png"
import { motion } from 'framer-motion'

const Say = () => {
    return (
        <div>
            <Subheading text='What People Say' className='text-[#B02430] text-center py-[80px]' />
            <div className='flex flex-col md:flex-row p-4 md:p-6 items-center mt-4 justify-evenly h-full relative'>
                <Image
                    src={markimage}
                    alt="markedImage"
                    className="absolute -bottom-10 -left-4 hidden md:block"
                    width={0}
                    height={0}
                />
                <Image
                    src={rightMark}
                    alt="markedImage"
                    className="absolute -top-10 -right-4  object-cover hidden md:block"
                    width={0}
                    height={0}
                />
                <div className='flex flex-col gap-8'>
                    {[1, 2, 3, 4].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "0px 0px 0px 0px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex justify-start items-center p-6"
                        >

                            <div className={`talk-bubble text-gray-800 relative ${index >= 2 ? 'tri-right right-top' : 'tri-right btm-right'} bg-yellow-400 p-6 shadow-lg max-w-lg`}>
                                <div className="talktext">
                                    <p className="text-lg font-medium leading-relaxed ml-4">
                                        “truly appreciate the exceptional experience and collaborative culture during our partnership with you”
                                    </p>
                                </div>
                                <div className="absolute -left-7 top-[20%] w-16 h-16 bg-white border-4 border-white rounded-full overflow-hidden shadow-md">
                                    <Image src={avatar} alt='avatar' width={0} height={0} className="w-full h-full object-cover" />
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                <div className="relative top-0 z-0">
                    <Image src={icon} alt='avatar' width={0} height={0} className="w-full h-full object-cover" />
                </div>

                <div className='flex flex-col gap-8'>
                    {[1, 2, 3, 4].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "0px 0px 0px 0px" }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="relative flex justify-start items-center p-6"
                        >
                            <div className={`talk-bubble text-gray-800 relative ${index >= 2 ? 'tri-right top-left' : 'tri-right btm-left'} bg-yellow-400 p-6 shadow-lg max-w-lg`}>
                                <div className="talktext">
                                    <p className="text-lg font-medium leading-relaxed ml-4">
                                        “truly appreciate the exceptional experience and collaborative culture during our partnership with you”
                                    </p>
                                </div>
                                <div className="absolute -right-7 top-[20%] w-16 h-16 bg-white border-4 border-white rounded-full overflow-hidden shadow-md">
                                    <Image src={avatar} alt='avatar' width={0} height={0} className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Say
