import React from 'react'
import Subheading from '../ui/Subheading'
import Scroll from './Scroll'
import image1 from '@/images/inc.svg';
import image2 from '@/images/Dailyhunt-Logo.svg';
import image3 from '@/images/businessline.svg';
import image4 from '@/images/textile.png';
import image5 from '@/images/iifl.svg';

const images = [image1, image2, image3, image4, image5];

const Media = () => {
  return (
    <div>
          <Subheading text='Media Coverage' className='text-center text-[#B02430]' />
          <div>
              <Scroll images={images} />
          </div>
    </div>
  )
}

export default Media
