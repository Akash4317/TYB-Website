'use client';
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import YarnBall from '@/components/ui/YarnBall';

const Custom404 = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#FFF0F2] to-[#FEE9E5] text-[#7A1A23]">
      <div className="text-center px-4 max-w-2xl">
        <motion.div
          className="text-9xl font-bold mb-4 font-serif"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          404
        </motion.div>
        <motion.h1
          className="text-5xl font-bold mb-6 font-display"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          You Got Lost in the Pattern
        </motion.h1>
        
        <motion.div
          className="mb-12"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 260, damping: 20 }}
        >
            <div className='flex justify-center items-center space-x-4'>
            <motion.div
              className=" w-24 h-24"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <YarnBall color="#7A1A23" />
            </motion.div>
            <motion.div
              className=" w-16 h-16"
              animate={{
                y: [0, 15, 0],
                rotate: [360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <YarnBall color="#D33F49" />
            </motion.div>
            <motion.div
              className=" w-10 h-10"
              animate={{
                y: [0, 15, 0],
                rotate: [360, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <YarnBall color="#D33F49" />
            </motion.div>
          </div>
         
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center bg-[#7A1A23] hover:bg-[#5D131D] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Return to Homepage
          </Link>
        </motion.div>
        <motion.div
          className="mt-8 text-sm text-[#9C7479]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <p>Still lost? Contact our support team</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Custom404
