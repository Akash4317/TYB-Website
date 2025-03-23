import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import FooterImage from '@/images/FooterImage.png';
import TYBFooterLogo from '@/images/TYBFullLogo.png';
import { TybSocialLinks } from '@/constants/constant';

const Footer: React.FC = () => {
	return (
		<footer className="text-foreground flex flex-col overflow-hidden mt-8">
			<div className="flex flex-col gap-8 justify-center items-center px-4 md:px-8">
				<Image src={FooterImage} alt="Footer Image" width={1080} className="w-full max-w-[600px] md:max-w-[800px]" />
			</div>
			<div className='flex flex-col bg-white gap-2 items-center'>
				<div className='grid grid-cols-1 md:grid-cols-3 md:w-full gap-4 md:gap-8 bg-white items-center px-8 py-4 md:py-0 text-center max-w-[1080px]'>
					<div className='flex justify-center items-center p-8'>
						<Image src={TYBFooterLogo} alt="company logo" className='max-w-72' />
					</div>
					<nav className='flex flex-col gap-4 items-center'>
						<h2 className='text-primary text-xl font-light'>Fayde Ka Sauda!</h2>
						<ul className="flex justify-between text-sm px-8 w-80">
							<li><Link href="/about-us" className="hover:underline">About Us</Link></li>
							<li><a href="/media" className="hover:underline">Media</a></li>
							<li><a href="/contact-us" className="hover:underline">Contact Us</a></li>
						</ul>
					</nav>
					<div className='w-full flex flex-col max-w-64 m-auto'>
						<label className="text-left w-full text-primary text-">Follow us</label>
						<div className="flex flex-wrap justify-between  w-full">
							{
								TybSocialLinks.map((item, index) => (
									<Link key={index} href={item.link} target="_blank">
										<Image src={item.icon} width={32} height={32} alt={item.alt} />
									</Link>
								))
							}
						</div>
					</div>
				</div>

				<div className='flex flex-col md:flex-row justify-between items-center h-auto min-h-12 px-4 md:px-8 py-4 md:py-0 text-center text-gray-400'>
					<p className="text-sm">All content &copy; Copyright 2023 by Filosha Infotech Pvt. Ltd. All Rights Reserved.</p>
					<nav className="mt-2 md:mt-0">
						<ul className="flex flex-wrap justify-center space-x-2 md:space-x-4 text-sm">
							<li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
							<li className="hidden md:inline">|</li>
							<li><a href="/terms-and-conditions" className="hover:underline">Terms & Conditions</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
