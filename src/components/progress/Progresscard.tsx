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
    <div>
          <div className='w-full my-[50px]'>
              <div className="flex justify-center items-center h-full gap-6 flex-wrap p-6 py-10">
                  {info.cards.map((card, index) => (
                      <div
                          key={index}
                          className="relative w-[350px] h-[450px] rounded-2xl overflow-hidden group"
                      >
                          <div
                              className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                              style={{ backgroundImage: `url(${card.imageUrl})` }}
                          />

                          <motion.div
                              initial={{ opacity: 0, y: "40%" }}
                              whileHover={{ opacity: 1, y: "0%" }}
                              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                              className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center p-6 text-white text-center backdrop-blur-sm"
                          >
                              <h2 className="text-2xl font-bold mb-10">{card.title}</h2>
                              <p className="text-base">{card.description}</p>
                          </motion.div>

                          <div className="absolute inset-0 border-8 border-yellow-400 rounded-2xl  pointer-events-none transition-all duration-300 group-hover:opacity-0" />
                      </div>
                  ))}
              </div>
          </div>
    </div>
  )
}

export default Progresscard
