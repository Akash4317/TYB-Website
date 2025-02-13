import React from 'react';
import Scroll from './Scroll';
import Subheading from '../ui/Subheading';
import image1 from '@/images/DamodarIndustriesLimited.svg';
import image2 from '@/images/cheran.svg';
import image3 from '@/images/Ts.svg';
import image4 from '@/images/trident.svg';
import image5 from '@/images/eswm.svg';
import image6 from '@/images/baldev.svg';

const images = [image1, image2, image3, image4, image5, image6];

const Certificate = () => {
  return (
      <div>
          {/* <Subheading text='Collaborating with Excellence' className='text-center text-[#B02430]'/> */}
          <div className='md:mb-0 mb-10'>
          <Scroll images={images} />
          </div>
    </div>
  )
}

export default Certificate
