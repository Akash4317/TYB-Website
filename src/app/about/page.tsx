import type { Metadata } from "next";
import React from 'react';

import Image from 'next/image';
import TargetImage from "@/images/about-us/target.svg";
import ForegroundImage from "@/images/about-us/foreground.svg";
import TeamWorkImage from "@/images/about-us/teamwork.svg";
import UserImage from "@/images/about-us/user.svg";
import TYBLogo from "@/images/tyb.svg";
export const generateMetadata = (): Metadata => {
	return {
		title: "About us - The Yarn Bazaar",
		description: "What we do at The Yarn Bazaar.",
	};
};
interface WhyChoseUs {
	label: string;
	description?: string;
}
const whyChoseUs: WhyChoseUs[] = [
	{ label: "Secure Transactions", description: "Safe and transparent payments with our trusted escrow service." },
	{ label: "Sustainability Commitment", description: "Eco-friendly sourcing to reduce environmental impact." },
	{ label: "Innovative Solutions", description: "Constantly evolving features for a smarter experience." },
	{ label: "User-Friendly Platform", description: "Simplified tools for seamless procurement and operations." },
	{ label: "Quality Assurance", description: "Only the best, thoroughly vetted suppliers for premium yarn." },
	{ label: "24/7 Support", description: "Dedicated assistance anytime you need it." }
]
const DiveSection = () => {
	return (
		<div className='min-h-[240px] max-w-full flex flex-col items-center justify-center relative'>
			<h1 className="text-center text-8xl absolute">Let’s dive into what we do</h1>
			<Image src={TeamWorkImage} alt="What we do" className="opacity-25" />
		</div>
	)
}
const EvolvedOverTheYears = () => {
	return (
		<div className="">
			<h1 className="text-center text-4xl text-red-800">Evolved over the years</h1>
			<div className="h-[400px] m-2">
			</div>
		</div>
	)
}
const WhatDrivesUs = () => {
	return (
		<div className="flex flex-col gap-24">
			<h1 className="text-center text-4xl text-red-800">What Drives Us</h1>
			<div className="h-[250px] m-2 flex gap-14 justify-between">
				<div className="bg-[#FFCDCA] flex items-end rounded-2xl relative z-50 w-[250px]">
					<div className="bg-[#ffdb8d] rounded-2xl h-full -top-20 left-3 w-[90%] absolute z-10"></div>
					<Image src={ForegroundImage} alt="Foreground Image" className="z-30" />
					<Image src={TargetImage} alt="Target Image" className="absolute z-40 -top-[50px] left-[35%]" />
					<p className="absolute z-40 w-[80%] left-10 text-xl top-24">KRANTI - To create an impact by revolutionising the textile industry</p>
				</div>
				<div className="bg-[#FFCDCA] flex items-end rounded-2xl relative z-50 w-[250px]">
					<div className="bg-[#ffdb8d] rounded-2xl h-full -top-20 left-3 w-[90%] absolute z-10"></div>
					<Image src={ForegroundImage} alt="Foreground Image" className="z-30" />
					<Image src={TargetImage} alt="Target Image" className="absolute z-40 -top-[50px] left-[35%]" />
					<p className="absolute z-40 w-[80%] left-10 text-xl top-24">KRANTI - To create an impact by revolutionising the textile industry</p>
				</div>
				<div className="bg-[#FFCDCA] flex items-end rounded-2xl relative z-50 w-[250px]">
					<div className="bg-[#ffdb8d] rounded-2xl h-full -top-20 left-3 w-[90%] absolute z-10"></div>
					<Image src={ForegroundImage} alt="Foreground Image" className="z-30" />
					<Image src={TargetImage} alt="Target Image" className="absolute z-40 -top-[50px] left-[35%]" />
					<p className="absolute z-40 w-[80%] left-10 text-xl top-24">KRANTI - To create an impact by revolutionising the textile industry</p>
				</div>
				<div className="bg-[#FFCDCA] flex items-end rounded-2xl relative z-50 w-[250px]">
					<div className="bg-[#ffdb8d] rounded-2xl h-full -top-20 left-3 w-[90%] absolute z-10"></div>
					<Image src={ForegroundImage} alt="Foreground Image" className="z-30" />
					<Image src={TargetImage} alt="Target Image" className="absolute z-40 -top-[50px] left-[35%]" />
					<p className="absolute z-40 w-[80%] left-10 text-xl top-24">KRANTI - To create an impact by revolutionising the textile industry</p>
				</div>
			</div>
		</div>
	)
}
const WhyChooseUs = () => {
	return (
		<div className="flex flex-col gap-24">
			<h1 className="text-center text-4xl text-red-800">Why Choose Us</h1>
			<div className="grid grid-cols-3 gap-6 justify-items-center">
				{
					whyChoseUs.map((item, index) => (
						<div key={index} className="bg-[#F8D53C] flex flex-col gap-3 justify-center items-center text-center rounded-2xl h-[250px] w-[250px]">
							<h2 className="text-2xl w-[80%]">{item.label}</h2>
							<p className="text-sm w-[80%]">{item.description}</p>
						</div>
					))
				}
			</div>
		</div>
	)
}
const HassleFreeProcurement = () => {
	return (
		<div>
			<h1 className="text-center text-4xl text-red-800">Hassle-Free Procurement</h1>
			<div className="text-center flex flex-col gap-16 justify-center items-center">
				<div className="flex flex-col items-center">
					<Image src={UserImage} alt="User Image" width={120} />
					<div className="bg-[#F8D849] rounded-xl p-2 px-4">
						Our Happy Buyer
					</div>

				</div>
				<div className="border border-[#F89E24] rounded-full aspect-square p-4 flex items-center justify-center">
					<Image src={TYBLogo} alt="TYB Icon" width={30} />
				</div>
				<div className="flex flex-col items-center relative">
					<Image src={UserImage} alt="User Image" width={120} />
					<div className="bg-[#F8D849] rounded-xl min-h-10 min-w-36 absolute top-4 -right-[200px] text-left p-4">
						<p>Confirm with Seller</p>
						<p>Check inventory</p>
					</div>

				</div>
				<div className="bg-[#A33B35] rounded-full aspect-square h-20 flex items-center justify-center">
				</div>
			</div>
		</div>
	)
}
const AboutUsPage = async () => {

	return (
		<div className="flex flex-col gap-16 px-8">
			<DiveSection />
			<EvolvedOverTheYears />
			<WhatDrivesUs />
			<WhyChooseUs />
			<HassleFreeProcurement />
		</div>
	);
};

export default AboutUsPage;
