import React from 'react';
import Image from 'next/image';

import ArrowImage from '@/images/Arrow.svg';
import TYBFullLogo from '@/images/TYBFullLogo.svg';
import FooterImage from '@/images/FooterImage.png';
import WavyImage from "@/images/about-us/wavesOpacity.svg";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#FAE7E2] text-foreground pt-44 flex flex-col relative overflow-hidden mt-8">
            <Image src={WavyImage} alt="Wavy Image" className="opacity w-full absolute top-0 " />
            <div className="flex flex-col gap-8 justify-center items-center px-4 md:px-8">
                <Image src={TYBFullLogo} alt="company logo" className="md:w-[40%] w-[70%]" />
                <nav>
                    <ul className="flex flex-wrap justify-center space-x-4 md:space-x-16 mt-2 text-lg md:text-2xl text-center">
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li>|</li>
                        <li><a href="/media" className="hover:underline">Media</a></li>
                        <li>|</li>
                        <li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
                    </ul>
                </nav>
                <Image src={FooterImage} alt="Footer Image" width={1080} className="w-full max-w-[600px] md:max-w-[800px]" />
                <Image src={ArrowImage} alt="mark image" width={250} className="absolute bottom-24  left-0 object-contain w-16 md:w-24 lg:w-44" />
            </div>
            <div className='flex flex-col md:flex-row border border-[#A3A2A2] justify-between items-center h-auto md:h-14 px-4 md:px-8 mt-[60px] md:mt-[120px] py-4 md:py-0 text-center'>
                <p className="text-sm md:text-base">All content &copy; Copyright 2023 by Filosha Infotech Pvt. Ltd. All Rights Reserved.</p>
                <nav className="mt-2 md:mt-0">
                    <ul className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-sm md:text-base">
                        <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
                        <li className="hidden md:inline">|</li>
                        <li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};
export default Footer;
