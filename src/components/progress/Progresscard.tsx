import React from 'react'
import { motion } from "framer-motion";

interface CardInfo {
  cards: {
    imageUrl: string;
    title: string;
    description: string;
  }[];
}

const Progresscard: React.FC<{ info: CardInfo }> = ({ info }) => {
  return (
    <>
      <div className='w-full my-[50px] px-4'>
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {info.cards.map((card, index) => (
            <div
              key={index}
              className="relative break-inside-avoid-column mb-8 group" // Added masonry spacing classes
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                {/* Background Image with Zoom Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${card.imageUrl})` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.1
                  }}
                  className="absolute bottom-0 left-0 right-0 p-6 text-white"
                >
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold drop-shadow-md">{card.title}</h2>
                    <p className="text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {card.description}
                    </p>
                  </div>
                </motion.div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-400 rounded-2xl transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Progresscard
