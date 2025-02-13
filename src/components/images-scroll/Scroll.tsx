import Image from 'next/image';
import React from 'react'

interface ScrollProps {
    images: string[];
}

const Scroll: React.FC<ScrollProps> = ({ images }) => {
    return (
        <div className="pt-12 md:pt-10 box-border pb-8 md:pb-16 md:px-0 px-5">
            <div className="logos relative overflow-hidden flex items-center py-12 px-0 rounded-lg bg-white">
                <div className="logos-slide flex flex-none whitespace-nowrap animate-scroll">
                    {images.map((src, idx) => (
                        <div key={idx} className="mx-4">
                            <Image src={src} alt="brand logo" className="h-[100px] w-auto" />
                        </div>
                    ))}
                    {images.map((src, idx) => (
                        <div key={`duplicate-${idx}`} className="mx-4">
                            <Image src={src} alt="brand logo" className="h-[100px] w-auto" />
                        </div>
                    ))}
                    {images.map((src, idx) => (
                        <div key={`duplicate2-${idx}`} className="mx-4">
                            <Image src={src} alt="brand logo" className="h-[100px] w-auto" />
                        </div>
                    ))}
                    {images.map((src, idx) => (
                        <div key={`duplicate3-${idx}`} className="mx-4">
                            <Image src={src} alt="brand logo" className="h-[100px] w-auto" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Scroll;