import React from 'react';
import Image from 'next/image';
import SeperatorImage from '@/images/separator.svg';
interface DividerProps {
    className?: string;
}

const Divider: React.FC<DividerProps> = ({ className }) => {
    return (
        <div className={`flex justify-center items-center gap-4 w-full ${className}`}>
            <Image src={SeperatorImage} alt="Seperator Image" className='w-full'/>
        </div>
    )
};

export default Divider;