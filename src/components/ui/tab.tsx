'use client';

import { useState } from 'react';
import { TabData } from "@/constants/interface";

interface TabProps {
  tabs: TabData[];
}

const Tab = ({ tabs }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='min-h-[600px] max-w-full flex flex-col space-y-6 relative'>
      <div className="flex flex-col items-center gap-4">
        <div className="bg-[#F89E24] h-14 w-[80%] min-w-[350px] max-w-[800px] rounded-[30px] grid grid-cols-3 p-2 justify-evenly items-center text-[#A33B35] text-xl font-bold">
          {tabs.map((tab, index) => (
            <div
              key={tab.title}
              className={`rounded-[24px] px-4 flex justify-center items-center h-full cursor-pointer ${activeTab === index ? 'bg-[#F8D53C]' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default Tab;