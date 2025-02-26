'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import productImage from '@/images/productss.png'
import playImage from '@/images/playImage.png'
import product1 from '@/images/product1.jpg'
import product2 from '@/images/product2.jpg'
import product3 from '@/images/product3.jpg'

const ProductNew = () => {
  return (
      <div className='w-full bg-[#FFCFC242] py-4'>
          <div className='max-w-[95%] h-full p-4 md:p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center'>
              <div>
                <h2 className='text-4xl font-semibold mb-8'>Our Products</h2>
                <p className='text-[#6F727B] max-w-[500px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <div className="w-full flex justify-center md:justify-start">
                      <Button
                          variant='default'
                          size='lg'
                          className='mt-2 w-[187px] text-md font-poppins bg-[#FD5B2F] font-[600] rounded-[25px]'
                          onClick={() => window.location.href = '/contact-us'}
                      >
                          Talk To Us
                      </Button>
                  </div>
              </div>
             
              <div className="relative rounded-xl overflow-hidden">
                  {/* Background Effect */}
                  <div className="absolute inset-0 bg-black/90">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
                  </div>

                  {/* Image with Border Effect */}
                  <div className="relative border-b-8 border-r-8 border-[#FFAB1A] rounded-xl">
                      <Image
                          src={productImage}
                          alt="Product Image"
                          width={0}
                          height={0}
                          className="object-contain max-w-[80%] md:max-w-[625] relative z-10"
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

          </div>
          <div className="flex items-center justify-center py-10 ">
              <Image
                  src={product2}
                  alt="Left"
                  className="w-1/4 blur-sm opacity-70 -mr-10"
                  width={0}
                  height={0}
              />

              <Image
                  src={product1}
                  alt="Center"
                  className="w-1/3 z-10 opacity-100"
                  width={0}
                  height={0}
              />

              <Image
                  src={product3}
                  alt="Right"
                  className="w-1/4 blur-sm opacity-70 -ml-10"
                  width={0}
                  height={0}
              />
          </div>
          <p className="text-[#CB4B42] text-4xl font-semibold text-center py-4">
              Order Portal
          </p>
          <div className="max-w-[600px] mx-auto">
              <p className="text-[#323433] text-xl font-extralight text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
          </div>
          <div className="flex justify-center items-center my-5">
              <Button
                  variant="default"
                  size="lg"
                  className="mt-2 w-[187px] text-md font-poppins bg-[#FD5B2F] font-[600] rounded-[25px]"
                  onClick={() => window.location.href = '/contact-us'}
              >
                  Talk To Us
              </Button>
          </div>

      </div>
  )
}

export default ProductNew
