import React from 'react';
import Image from 'next/image';

import TYBFullLogo from '@/images/TYBFullLogo.svg';
import FooterImage from '@/images/FooterImage.png';
import ArrowImage from '@/images/Arrow.svg';
import WavyImage from "@/images/about-us/wavesOpacity.svg";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#FAE7E2] text-foreground pt-44 flex flex-col relative overflow-hidden mt-8">
            <Image src={WavyImage} alt="Wavy Image" className="opacity w-full absolute top-0 " />
            <div className="flex flex-col gap-8 justify-center items-center">
                <Image src={TYBFullLogo} alt="company logo" />
                <nav>
                    <ul className="flex justify-center space-x-16 mt-2 text-2xl">
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li>|</li>
                        <li><a href="/product" className="hover:underline">Product</a></li>
                        <li>|</li>
                        <li><a href="/podcast" className="hover:underline">Podcast</a></li>
                        <li>|</li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>
                <Image src={FooterImage} alt="Footer Image" width={1080} />
                <Image src={ArrowImage} alt="mark image" width={250} className="absolute top-[430px] -left-10 object-fit" />
            </div>
            <div className='flex border border-[#A3A2A2] justify-between items-center h-14 px-8 mt-[120px]'>
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <nav>
                    <ul className="flex justify-center space-x-4 mt-2">
                        <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                        <li>|</li>
                        <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
                    </ul>
                </nav>
                {/* <Image src={ArrowImage} alt="mark image" width={250} className="absolute top-5 -right-10 object-fit transform -scale-x-100" /> */}
            </div>
        </footer>
    );
};
export default Footer;