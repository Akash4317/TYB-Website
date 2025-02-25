import React from 'react'
import Subheading from '../ui/Subheading'
import Scroll from './Scroll'
import { mediaCoverageData } from '@/constants/constant'



const Media = () => {
  return (
    <div className='bg-white py-48 space-y-16'>
      <Subheading text='In The Media' position='center' />
      <Scroll data={mediaCoverageData} />
    </div>
  )
}

export default Media