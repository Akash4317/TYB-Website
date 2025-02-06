"use client";
import React from 'react'
import Subheading from '../ui/Subheading'
import { coneBg } from '@/constants/imageImports'
import { ProgressCardsInfo } from '@/constants/constant';
import Progresscard from './Progresscard';


const Progress = () => {
  return (
    <div>
    <Subheading text='Pillars of Progress' className='text-[#B02430] text-center pt-[80px]' />
          <div className='w-full  my-[50px]' style={{ backgroundImage: `url(${ coneBg })` }}>
              <Progresscard info={{ cards: ProgressCardsInfo }} />
          </div>
    </div>
  )
}

export default Progress
