import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ScrollImagesInterface {
    src: StaticImageData | string;
    href: string;
    alt: string;
}
interface ScrollProps {
    data: ScrollImagesInterface[];
    images: string[];
}

const Scroll: React.FC<ScrollProps> = ({ data }) => {
    return (
        <div className="pt-12 md:pt-10 box-border pb-8 md:pb-16 md:px-0 px-5">
            <div className="logos relative overflow-hidden flex items-center py-12 px-0 rounded-lg bg-white">
                <div className="logos-slide flex flex-none whitespace-nowrap animate-scroll repeat-infinite">
                    {data.map((image, idx) => (
                        <div key={idx} className="mx-4">
                            <Link href={image.href}>
                                <Image src={image.src} alt={image.alt} className="h-[60px] w-auto object-contain" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Scroll;