"use client";
import React from 'react'
import Subheading from '../ui/Subheading'
import { ProgressCardsInfo } from '@/constants/constant';
import Progresscard from './Progresscard';


const Progress = () => {
  const coneBg ="https://tyb-website-next.s3.ap-south-1.amazonaws.com/coneBG.png"
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
