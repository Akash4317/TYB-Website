"use client"

import type React from "react"
import Masonry from "react-masonry-css"
import { motion } from "framer-motion"
import Image from "next/image"

interface Card {
    imageUrl: string
    title: string
    description: string
    isSmall?: boolean
}

interface MasonryCardsProps {
    cards: Card[]
}

const MasonryCards: React.FC<MasonryCardsProps> = ({ cards }) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1,
    }

    return (
        <div className="w-full my-[50px] p-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto -ml-4"
                columnClassName="pl-4 bg-clip-padding"
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="mb-4 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group relative"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="relative">
                            <Image
                                src={card.imageUrl}
                                alt={card.title}
                                loading="lazy"
                                width={0}
                                height={0}
                                className="w-full h-auto object-cover transition-all duration-500 group-hover:grayscale"
                            />


                            <motion.div
                                className="absolute inset-0 bg-black/40"
                                initial={{ y: "100%" }}
                                whileHover={{ y: "0%" }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white overflow-hidden">
                                <motion.div
                                    initial={{ y: card.isSmall ? 50 : 100 }}
                                    whileHover={{ y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    <h2 className="text-3xl font-bold text-center mb-4">{card.title}</h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="text-md text-center font-bold"
                                    >
                                        {card.description}
                                    </motion.p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </Masonry>
        </div>
    )
}

export default MasonryCards

