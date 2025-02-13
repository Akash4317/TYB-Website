'use client'
import React from 'react'
import Subheading from '../ui/Subheading'
import chat1 from "@/images/chat1.png";
import chat2 from "@/images/chat2.png";
import chat3 from "@/images/chat3.png";
import ellipse from "@/images/Ellipse.svg"
import ellipse2 from "@/images/Ellipse2.svg"
import Image from 'next/image'
import { motion } from 'framer-motion'

const Bandhu = () => {
    const text ='Brilliant Assistance Network for Direct Help & Understanding,'
  return (
    <div>
          <Subheading text='We Are Your BANDHU' className='text-[#B02430] text-center py-[40px]' />
          <p className="styled-text">
              {text.split(' ').map((word, index) => (
                  <span key={index}>
                      <span>{word[0]}</span>
                      {word.slice(1)}{' '}
                  </span>
              ))}
          </p>
          <div>
              <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }} 
                >
                  <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-16 py-10 relative mt-12">
                      <div className="w-full md:w-1/2 flex flex-col gap-6">
                          <h2 className="text-2xl md:text-3xl font-medium text-[#A33B35] font-poppins">
                              Expert Guidance at Every Step
                          </h2>
                          <div className="space-y-4 text-gray-700 text-base md:text-lg font-medium">
                              <div>
                                  <span className="text-[#A33B35] font-medium text-2xl mr-4">♦</span>
                                  <span className="text-[#A33B35] text-lg font-[400] leading-[27px]">What?</span>
                                  <p className="ml-7 text-lg font-[400] leading-[27px] text-[#323433]">
                                      BANDHU provides friendly, knowledgeable support for all your textile needs. From
                                      technical guidance to personalized advice, we’re here to help you succeed.
                                  </p>
                              </div>
                              <div>
                                  <span className="text-[#A33B35] font-medium text-2xl mr-4">♦</span>
                                  <span className="text-[#A33B35]  text-lg font-[400] leading-[27px]">How? Step 1</span>
                                  <p className="ml-7 text-lg font-[400] leading-[27px] text-[#323433]">
                                      Reach Out: Contact us via WhatsApp or our phone number dedicated to assist you.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0">
                          <div className={`absolute w-[400px] h-[300px] md:w-[350px] md:h-[350px] -top-10 md:right-4`}>
                              <Image
                                  src={ellipse}
                                  alt="Background Circle 1"
                                  width={400}
                                  height={300}
                                  className="absolute top-4 -left-[110px] opacity-90"
                              />
                              <Image
                                  src={ellipse2}
                                  alt="Background Circle 2"
                                  width={400}
                                  height={300}
                                  className="absolute top-4 left-10 opacity-80"
                              />
                          </div>

                          <div className="relative z-10">
                              <Image
                                  src={chat1}
                                  alt="Chat Preview"
                                  width={450}
                                  height={0}
                                  className="rounded-xl shadow-lg object-cover "
                              />
                          </div>
                      </div>
                  </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
              >
                  <div className='flex flex-col-reverse md:flex-row items-center justify-between w-full px-6 md:px-12 py-10 relative mt-12 md:gap-12'>
                      <div className='w-full md:w-[45%] flex justify-center md:justify-start relative mt-10 md:mt-0'>
                          <div className={`absolute w-[400px] h-[300px] md:w-[350px] md:h-[350px] -top-12 md:-top-10 right-[80px] md:left-[80px]`}>
                              <Image
                                  src={ellipse}
                                  alt="Background Circle 1"
                                  width={400}
                                  height={300}
                                  className="absolute top-4 -left-[110px] opacity-90"
                              />
                              <Image
                                  src={ellipse2}
                                  alt="Background Circle 2"
                                  width={400}
                                  height={300}
                                  className="absolute top-4 left-10 opacity-80"
                              />
                          </div>

                          <div className="relative z-10">
                              <Image
                                  src={chat2}
                                  alt="Chat Preview"
                                  width={450}
                                  height={0}
                                  className="rounded-xl shadow-lg object-cover "
                              />
                          </div>
                      </div>

                      <div className="w-full md:w-[50%] flex flex-col gap-6 md:pl-8">
                          <h2 className="text-2xl md:text-3xl font-medium text-[#A33B35] font-poppins">
                              Bridging Technology & Tradition
                          </h2>
                          <div className="space-y-4 text-gray-700 text-base md:text-lg font-medium md:max-w-[90%]">
                              <div>
                                  <span className="text-[#A33B35] font-medium text-2xl mr-4">♦</span>
                                  <span className="text-[#A33B35] text-lg font-[400] leading-[27px]">What?</span>
                                  <p className="ml-7 text-lg font-[400] leading-[27px] text-[#323433]">
                                      BANDHU is revolutionizing the yarn industry by blending cutting-edge technology with industry expertise, making your trading journey modern, efficient, and hassle-free.
                                  </p>
                              </div>
                              <div>
                                  <span className="text-[#A33B35] font-medium text-2xl mr-4">♦</span>
                                  <span className="text-[#A33B35]  text-lg font-[400] leading-[27px]">How? Step 1</span>
                                  <p className="ml-7 text-lg font-[400] leading-[27px] text-[#323433]">
                                      Expert Assignment : Our knowledgeable experts will be assigned to assist you Immediately.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
              >
                  <div className="flex flex-col md:flex-row items-center justify-between w-full px-6 md:px-12 lg:px-16 py-10 relative mt-12">
                      <div className="w-full md:w-1/2 flex flex-col gap-6">
                          <h2 className="text-2xl md:text-3xl font-medium text-[#A33B35] font-poppins">
                              Your Partner to Get Successful
                          </h2>
                          <div className="space-y-4 text-gray-700 text-base md:text-lg font-medium">
                              <div>
                                  <span className="text-[#A33B35] font-medium text-2xl mr-4">♦</span>
                                  <span className="text-[#A33B35] text-lg font-[400] leading-[27px]">What?</span>
                                  <p className="ml-7 text-lg font-[400] leading-[27px] text-[#323433]">
                                      BANDHU isn’t just support—it’s your trusted partner in growth. Simplifying tasks and providing guidance, we help your business thrive in the modern yarn industry.
                                  </p>
                              </div>
                              <div>
                                  <span className="text-[#A33B35] font-medium text-2xl mr-4">♦</span>
                                  <span className="text-[#A33B35]  text-lg font-[400] leading-[27px]">How? Step 1</span>
                                  <p className="ml-7 text-lg font-[400] leading-[27px] text-[#323433]">
                                      Explore Financing Options : Take advantage of our flexible, secured financing options to grow your business.
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-10 md:mt-0">
                          <div className={`absolute w-[400px] h-[300px] md:w-[350px] md:h-[350px] -top-10 md:right-4`}>
                              <Image
                                  src={ellipse}
                                  alt="Background Circle 1"
                                  width={400}
                                  height={300}
                                  className="absolute top-4 -left-[110px] opacity-90"
                              />
                              <Image
                                  src={ellipse2}
                                  alt="Background Circle 2"
                                  width={400}
                                  height={300}
                                  className="absolute top-4 left-10 opacity-80"
                              />
                          </div>

                          <div className="relative z-10">
                              <Image
                                  src={chat3}
                                  alt="Chat Preview"
                                  width={450}
                                  height={0}
                                  className="rounded-xl shadow-lg object-cover "
                              />
                          </div>
                      </div>
                  </div>
              </motion.div>
          </div>
    </div>
  )
}

export default Bandhu
