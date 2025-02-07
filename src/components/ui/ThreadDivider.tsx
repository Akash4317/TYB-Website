"use client"
import Image from 'next/image';
import React from 'react';
import coneSrc from "@/images/cone.png";
import threadSrc from "@/images/Line.png"

interface ThreadDividerProps {
    className?: string; 
}

const ThreadDivider: React.FC<ThreadDividerProps> = ({ className = '' }) => {
    return (
        <div className={`relative w-full flex justify-center items-center ${className}`}>
            <div className="absolute top-[80%] left-0 right-0 -translate-y-1/2">
                <Image src={threadSrc} alt="Thread" layout="responsive" width={1000} height={50} />
            </div>

            <div className="relative z-[100] flex gap-2">
                <Image src={coneSrc} alt="Thread Cones" width={0} height={0} />
                <Image src={coneSrc} alt="Thread Cones" width={0} height={0} />
                <Image src={coneSrc} alt="Thread Cones" width={0} height={0} />
            </div>
        </div>
    );
};

export default ThreadDivider;
