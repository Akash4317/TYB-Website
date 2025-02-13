"use client"

import type React from "react"
import Masonry from "react-masonry-css"
import { motion } from "framer-motion"
import Image from "next/image"

interface Card {
    imageUrl: string
    title: string
    description: string
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
        <div className="w-full my-[50px] px-4">
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex w-auto -ml-4"
                columnClassName="pl-4 bg-clip-padding"
            >
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="mb-4 overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl group"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="relative group">
                            <Image
                                src={card.imageUrl}
                                alt={card.title}
                                loading="lazy"
                                width={0}
                                height={0}
                                className="w-full h-auto object-cover transition-all duration-500 grayscale group-hover:grayscale-0"
                            />

                            <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/20" />

                            <div className="absolute inset-0 flex flex-col justify-end p-6 text-white overflow-hidden">
                             

                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    whileHover={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-md"
                                >
                                    <h2 className="text-3xl font-bold mb-4">{card.title}</h2>
                                    <p>{card.description}</p>
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

