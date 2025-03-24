import React from 'react'
import Subheading from '../ui/Subheading'
import Scroll from './Scroll'
import { mediaCoverageData } from '@/constants/constant'



const Media = () => {
  return (
    <div className='bg-white py-8 md:space-y-8'>
      <Subheading text='In The Media' position='center' />
      <Scroll data={mediaCoverageData} images={[]} />
    </div>
  )
}

export default Media