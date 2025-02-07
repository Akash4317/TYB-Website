import React from 'react'
import Subheading from '../ui/Subheading'
import ProductSlideCard from './ProductSlideCard'
import { sliderCardData } from '@/constants/constant'

const Product = () => {
  return (
      <div>
          <Subheading text='Our Products' className='text-[#B02430] text-center pt-[40px] sticky -top-5' />
          <div>
           <div className='flex flex-col md:flex-row p-4 md:p-6 items-center  justify-between h-full relative'>
             <div
             id="cards"
             className="main-container mb-[4vw] w-full h-auto mt-12 p-2 pl-0">
               {sliderCardData.map((sliderData, index) => (
                <ProductSlideCard key={index} sliderData={sliderData} />
                ))}
              </div>
            </div>
      </div>
    </div>
  )
}

export default Product
