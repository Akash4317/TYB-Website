import React from 'react';
import Image from 'next/image';
import SeperatorImage from '@/images/separator.svg';

const Divider: React.FC = () => {
    return (
        <div className='flex justify-center items-center gap-4 w-full'>
            <Image src={SeperatorImage} alt="Seperator Image" className='w-full'/>
        </div>
    )
};

export default Divider;