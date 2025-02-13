import React from 'react'
import Subheading from '../ui/Subheading'
import ProductSlideCard from './ProductSlideCard'
import { sliderCardData } from '@/constants/constant'

const Product = () => {
  return (
      <>
        <div className="product-slider">
        <Subheading text='Our Products' className='text-[#B02430] text-center pt-10 sticky -top-5' />
         {sliderCardData.map((data) => (
          <ProductSlideCard key={data.id} sliderData={data} />
         ))}
      </div>
    </>
  )
}

export default Product
