"use client";
import React from 'react'
import Subheading from '../ui/Subheading'
import { ProgressCardsInfo } from '@/constants/constant';
import Progresscard from './Progresscard';
import MasonryCards from '../ui/MasonryCards';


const Progress = () => {
  const coneBg ="https://tyb-website-next.s3.ap-south-1.amazonaws.com/coneBG.png"
  return (
    <div>
    {/* <Subheading text='Pillars of Progress' className='text-[#B02430] text-center pt-[40px]' />
          <div className='w-full' >
              <Progresscard info={{ cards: ProgressCardsInfo }} />
          </div> */}
      

      <main className="py-12">
        <Subheading text='Pillars of Progress' className='text-[#B02430] text-center pt-[20px]' />
        <div className="flex justify-center w-full ">
          <MasonryCards cards={ProgressCardsInfo} />
        </div>
      </main>
    </div>
  )
}

export default Progress
