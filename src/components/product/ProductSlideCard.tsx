'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SliderData {
    id: string;
    title: string;
    highlights: string[];
    image: string;
    backgroundColor: string;
}

const ProductSlideCard = ({ sliderData }: { sliderData: SliderData }) => {
    const { id, title, highlights, image, backgroundColor } = sliderData;
    return (
        <motion.div
            className="card-slide"
            id={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div
                style={{ backgroundColor }}
                className="w-full rounded-3xl px-6 md:px-12 lg:px-16 py-12 flex flex-col md:flex-row items-center justify-between shadow-2xl transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl"
            >
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                    <motion.h4
                        className="text-3xl md:text-4xl font-bold text-gray-800 font-poppins leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {title}
                    </motion.h4>
                    <ul className="text-lg md:text-xl font-normal text-gray-700 space-y-4">
                        {highlights.map((point, index) => {
                            const [highlightTitle, description] = point.split(":")
                            return (
                                <motion.li
                                    key={index}
                                    className="flex items-start"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                >
                                    <span className="text-[#A33B35] font-semibold mr-3 text-2xl">♦</span>
                                    <span>
                                        <span className="text-[#A33B35] font-semibold">{highlightTitle.trim()}</span>: {description?.trim()}
                                    </span>
                                </motion.li>
                            )
                        })}
                    </ul>
                </div>

                <motion.div
                    className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="relative rounded-2xl overflow-hidden w-full max-w-md md:max-w-xl  shadow-lg">
                        <Image
                            src={image}
                            alt="Slider image"
                            width={0}
                            height={0}
                            className="object-cover w-full rounded-2xl transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
};

export default ProductSlideCard;

