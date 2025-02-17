import React from 'react';
import type { Metadata } from "next";

import Image from 'next/image';
import Divider from '@/components/ui/divider';

import BoxImage from "@/icons/box.svg";
import TYBLogo from "@/images/tyb.svg";
import BgLineImage from "@/images/bgLine.svg";
import UserImage from "@/images/about-us/user.svg";
import TargetImage from "@/images/about-us/target.svg";
import TeamWorkImage from "@/images/about-us/teamwork.svg";
import JourneyImage from "@/images/about-us/journeyLine.svg";
import ForegroundImage from "@/images/about-us/foreground.svg";
import ManufacturingImage from "@/images/about-us/manufacturing.svg";
import MasonryCards from '@/components/ui/MasonryCards';

export const generateMetadata = (): Metadata => {
	return {
		title: "About us - The Yarn Bazaar",
		description: "What we do at The Yarn Bazaar.",
	};
};

const whyChoseUs = [
	{ title: "Secure Transactions", description: "Safe and transparent payments with our trusted escrow service.", imageUrl: 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/image+165.jpg', isSmall: true, },
	{ title: "Sustainability Commitment", description: "Eco-friendly sourcing to reduce environmental impact.", imageUrl:"https://tyb-website-next.s3.ap-south-1.amazonaws.com/image+167.jpg" ,isSmall: true,},
	{ title: "Innovative Solutions", description: "Constantly evolving features for a smarter experience.", imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/image+170.jpg", isSmall: true, },
	{ title: "User-Friendly Platform", description: "Simplified tools for seamless procurement and operations.", imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/image+168.jpg", isSmall: true, },
	{ title: "Quality Assurance", description: "Only the best, thoroughly vetted suppliers for premium yarn.", imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/image+166.jpg", isSmall: true, },
	{ title: "24/7 Support", description: "Dedicated assistance anytime you need it.", imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/image+169.jpg", isSmall: true, },
	{ title: "Secure Transactions", description: "Safe and transparent payments with our trusted escrow service.", imageUrl: 'https://tyb-website-next.s3.ap-south-1.amazonaws.com/image+165.jpg', isSmall: true, },
	{ title: "Sustainability Commitment", description: "Eco-friendly sourcing to reduce environmental impact.", imageUrl: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/image+167.jpg",isSmall: true, },
	
]
interface OurGrowthPartners {
	name: string;
	brand: string;
	image: string;
}
const ourGrowthPartners: OurGrowthPartners[] = [
	{ name: "Ashneer Grover", brand: "Third Unicorn", image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/Ashneer.jpg" },
	{ name: "Aman Gupta" , brand: "Shaadi", image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/Aman.jpg" },
	{ name: "Anuppam Mittal", brand: "boAt", image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/boat.jpg" },
	{ name: "Ekta Kapoor", brand: "Balaji Telefilms Ltd", image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/ekansha.png" },
	{ name: "Peyush Goyal", brand: "lenskart", image: "https://tyb-website-next.s3.ap-south-1.amazonaws.com/peyush.jpg" },
]
interface OurStrengths {
	name: string;
	position: string;
	image: string;
	description: string;
	linkedIn?: string;
}
const OurStrengths: OurStrengths[] = [
	{ name: "Kavita", position: "Tester", image: UserImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	{ name: "Pratik Gadia", position: "CEO", image: UserImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	{ name: "Snigdha", position: "UI/UX Designer", image: UserImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	{ name: "Vivek", position: "CTO", image: UserImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	{ name: "Shamim", position: "Principal Tech Head", image: UserImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
	{ name: "Meet", position: "Tech Lead", image: UserImage, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
]
interface RedCircleProps {
	top: string;
	left: string;
	children?: React.ReactNode;
	className?: string;
}
const RedCircle: React.FC<RedCircleProps> = ({ top, left, children, className }) => {
	return (
		<div
			className={`bg-red-800 rounded-full aspect-square h-20 flex items-center justify-center absolute transform -translate-x-1/2 -translate-y-1/2 z-20 ${className}`}
			style={{ left: left, top: top }}
		>
			{children}
		</div>
	);
};
const DiveSection = () => {
	return (
		<div className='min-h-[240px] max-w-full flex flex-col items-center justify-center relative'>
			<h1 className="text-center text-8xl absolute z-50">Let’s dive into what we do</h1>
			<Image src={TeamWorkImage} alt="What we do" className="opacity-35" />
		</div>
	)
}
const TargetCircle = () => {
	return (
		<div className='border-4 border-red-400 h-16 aspect-square rounded-full p-2'>
			<div className=' bg-orange-400 h-full aspect-square rounded-full '>

			</div>
		</div>
	)
}
const EvolvedOverTheYears = () => {
	return (
		<div className="flex flex-col">
			<h1 className="text-center text-4xl text-red-800">Evolved over the years</h1>
			<div className="min-h-[600px] flex justify-center items-center relative">
				<Image src={JourneyImage} alt="Journey Image" className="absolute w-[90.5%]" />
				<div className='w-[90%] grid grid-cols-6  gap-y-[400px] justify-items-center'>
					<div className='relative h-full w-full flex justify-center'>
						<div className='absolute flex justify-center items-center flex-col gap-2 -top-[260px] max-w-[200px]'>
							<Image src={ManufacturingImage} alt="User Image" width={160} />
							<p className='text-sm w-[80%]'>TYB transforms yarn trading with transparency and efficiency.</p>
						</div>
						<h3 className='absolute -bottom-10'>2019</h3>
						<TargetCircle />
					</div>
					<div className='relative h-full w-full flex justify-center'>
						<div className='absolute flex justify-center items-center flex-col gap-2 -bottom-[260px] max-w-[200px]'>
							<Image src={ManufacturingImage} alt="User Image" width={160} />
							<p className='text-sm w-[80%]'>TYB transforms yarn trading with transparency and efficiency.</p>
						</div>
						<h3 className='absolute -top-10'>2019</h3>
						<TargetCircle />
					</div>
					<div className='relative h-full w-full flex justify-center'>
						<div className='absolute flex justify-center items-center flex-col gap-2 -top-[260px] max-w-[200px]'>
							<Image src={ManufacturingImage} alt="User Image" width={160} />
							<p className='text-sm w-[80%]'>TYB transforms yarn trading with transparency and efficiency.</p>
						</div>
						<h3 className='absolute -bottom-10'>2019</h3>
						<TargetCircle />
					</div>
					<div className='relative h-full w-full flex justify-center'>
						<div className='absolute flex justify-center items-center flex-col gap-2 -bottom-[260px] max-w-[200px]'>
							<Image src={ManufacturingImage} alt="User Image" width={160} />
							<p className='text-sm w-[80%]'>TYB transforms yarn trading with transparency and efficiency.</p>
						</div>
						<h3 className='absolute -top-10'>2019</h3>
						<TargetCircle />
					</div>
					<div className='relative h-full w-full flex justify-center'>
						<div className='absolute flex justify-center items-center flex-col gap-2 -top-[260px] max-w-[200px]'>
							<Image src={ManufacturingImage} alt="User Image" width={160} />
							<p className='text-sm w-[80%]'>TYB transforms yarn trading with transparency and efficiency.</p>
						</div>
						<h3 className='absolute -bottom-10'>2019</h3>
						<TargetCircle />
					</div>
					<div className='relative h-full w-full flex justify-center'>
						<div className='absolute flex justify-center items-center flex-col gap-2 -bottom-[260px] max-w-[200px]'>
							<Image src={ManufacturingImage} alt="User Image" width={160} />
							<p className='text-sm w-[80%]'>TYB transforms yarn trading with transparency and efficiency.</p>
						</div>
						<h3 className='absolute -top-10'>2019</h3>
						<TargetCircle />
					</div>
				</div>
			</div>
		</div>
	)
}
const DrivesUsCard: React.FC<{ title: string; description: string; image: string }> = ({ title, description, image }) => {
	return (
		<div className="bg-[#FFCDCA] flex items-end rounded-2xl relative z-50 w-[250px] group">
			<div className='z-30'>
				<Image src={ForegroundImage} alt="Foreground Image" />
			</div>
			<div className="bg-[#ffdb8d] rounded-2xl h-full left-3 w-[90%] absolute z-10 flex flex-col items-center justify-evenly p-4 -top-6 group-hover:-top-52 transition-all duration-500">
				<Image src={image} alt="Target Image" />
				<p className='text-center'>{description}</p>
			</div>
			<p className="absolute z-40 text-5xl w-[80%] left-[10%] top-[10%] h-full items-center flex justify-center font-bold text-center">{title}</p>
		</div>

	)
}
const WhatDrivesUs = () => {
	return (
		<div className="flex flex-col gap-24">
			<h1 className="text-center text-4xl text-red-800">What Drives Us</h1>
			<div className="min-h-[250px] m-2 flex flex-wrap gap-y-[250px] gap-14 justify-evenly">
				<DrivesUsCard title='Our Purpose' description='KRANTI - To create an impact by revolutionising the textile industry' image={TargetImage} />
				<DrivesUsCard title='Our Vision' description='To organise the unorganised textile industry' image={TargetImage} />
				<DrivesUsCard title='Our Misson' description='To empower small yarn buyers and suppliers' image={TargetImage} />
			</div>
		</div>
	)
}
const WhyChooseUs = () => {
	return (
		<>
			<h1 className="text-center text-4xl text-red-800">Why Choose Us</h1>
			<MasonryCards cards={whyChoseUs} />
		</>
		
	)
}
const HassleFreeProcurement = () => {
	return (
		<div className="flex flex-col gap-16 min-h-[1080px]">
			<h1 className="text-center text-4xl text-red-800">Hassle-Free Procurement</h1>
			<div className="text-center flex flex-col gap-16 justify-center items-center">
				<div className="border border-[#F89E24] relative w-[1px] h-[1080px]">
					<div className="flex flex-col items-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
						<Image src={UserImage} alt="User Image" width={120} />
						<div className="bg-[#F8D849] flex items-center justify-center rounded-xl min-h-10 w-[160px]">
							• Our Happy Buyer
						</div>
					</div>
					<div className="border-2 border-[#F89E24] rounded-full aspect-square w-[80px] flex items-center justify-center absolute top-[160px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-red-50">
						<Image src={TYBLogo} alt="TYB Icon" width={30} />
					</div>
					<div className='absolute top-[240px] left-[-46px] z-30 aspect-square w-[90px]'>
						<div className='w-full h-full flex justify-center items-center'>
							<div className='bg-red-800 rounded-full aspect-square w-[80px] left-[-8px] z-40'></div>
							<Image src={BoxImage} alt="order query" width={40} className='z-50 absolute filter invert' />
							<div className='rounded-full absolute aspect-square w-[90px] border-2 border-[#F89E24] p-1 bg-[#fdf3f0]'></div>
							<div className='absolute right-1/2 h-[90px] w-[50px] bg-[#fdf3f0]'></div>
						</div>
						<div className="relative">
							<div className="border border-[#F89E24] absolute w-[120px] top-[-45px] -left-2/3"></div>
							<div className="bg-[#F8D849] rounded-xl flex flex-col items-start justify-center min-h-10 min-w-[160px] absolute -top-[65px] -left-[200px] px-4">
								<p>• Recieved Query</p>
							</div>
						</div>
					</div>
					<div className="border-2 border-[#F89E24] rounded-full aspect-square h-20 flex items-center justify-center absolute top-[400px] -left-8 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-red-50">
						<Image src={UserImage} alt="User Image" width={120} />
						<div className="relative">
							<div className="border border-[#F89E24] absolute w-[120px]"></div>
							<div className="bg-[#F8D849] rounded-xl flex flex-col items-start justify-center min-h-16 min-w-[160px] absolute -top-[35px] -right-[260px] px-4">
								<p>• Confirm with Seller</p>
								<p>• Check inventory</p>
							</div>
						</div>
					</div>
					<div className='absolute top-[480px] left-[-26px] z-30 aspect-square w-[90px]'>
						<div className='w-full h-full flex justify-center items-center'>
							<div className='bg-red-800 rounded-full aspect-square w-[80px] left-[-8px] z-40'></div>
							<Image src={BoxImage} alt="order query" width={40} className='z-50 absolute filter invert' />
							<div className='rounded-full absolute aspect-square w-[90px] border-2 border-[#F89E24] p-1 bg-[#fdf3f0]'>
								<Image src={BoxImage} alt="User Image" width={60} />
							</div>
							<div className='absolute left-[-20px] h-[80px] w-[50px] bg-[#fdf3f0]'></div>
						</div>
						<div className="relative">
							<div className="border border-[#F89E24] absolute w-[120px] top-[-45px] -left-2/3"></div>
							<div className="bg-[#F8D849] rounded-xl flex flex-col items-start justify-center min-h-10 min-w-[160px] absolute -top-[65px] -left-[260px] px-4">
								<p>• Internal Quality Check</p>
							</div>
						</div>
					</div>
					<RedCircle top="640px" left="-32px">
						<div className="relative">
							<div className="border border-red-800 absolute w-[120px] left-0"></div>
							<div className="bg-[#F8D849] rounded-xl flex flex-col items-start justify-center min-h-10 min-w-[220px] absolute -top-[20px] -right-[320px] px-4">
								<p>• Send test samples to buyer</p>
							</div>
						</div>
					</RedCircle>
					<div className='absolute top-[720px] left-[-26px] z-30 aspect-square w-[90px]'>
						<div className='w-full h-full flex justify-center items-center'>
							<div className='bg-red-800 rounded-full aspect-square w-[80px] left-[-8px] z-40'></div>
							<Image src={BoxImage} alt="order query" width={40} className='z-50 absolute filter invert' />
							<div className='rounded-full absolute aspect-square w-[90px] border-2 border-[#F89E24] p-1 bg-[#fdf3f0]'>
								<Image src={BoxImage} alt="User Image" width={60} />
							</div>
							<div className='absolute left-[-20px] h-[80px] w-[50px] bg-[#fdf3f0]'></div>
						</div>
						<div className="relative">
							<div className="border border-[#F89E24] absolute w-[120px] top-[-45px] -left-2/3"></div>
							<div className="bg-[#F8D849] rounded-xl flex flex-col items-start justify-center min-h-10 min-w-[160px] absolute -top-[65px] -left-[260px] px-4">
								<p>• Internal Quality Check</p>
							</div>
						</div>
					</div>
					<RedCircle top="880px" left="-32px">
						<div className="relative">
							<div className="border border-red-800 absolute w-[120px] left-0"></div>
							<div className="bg-[#F8D849] rounded-xl flex flex-col items-start justify-center min-h-10 min-w-[220px] absolute -top-[20px] -right-[320px] px-4">
								<p>• Pre dispatch QC</p>
							</div>
						</div>
					</RedCircle>
					<RedCircle top="1000px" left="32px">
						<div className="relative">
							<div className="border border-red-800 absolute w-[120px] right-0"></div>
							<div className="bg-[#F8D849] rounded-xl flex flex-col items-start justify-center min-h-10 min-w-[120px] absolute -top-[20px] right-[80px] px-4">
								<p>• Fulfillment</p>
							</div>
						</div>
					</RedCircle>
					<div className="bg-red-800 rounded-full aspect-square h-3 flex items-center justify-center absolute top-[1080px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
					</div>
				</div>
			</div>
		</div>
	)
}
const OurGrowthPartners = () => {
	const duplicatedPartners = [...ourGrowthPartners, ...ourGrowthPartners]
	return (
		<div className="flex flex-col gap-16 h-[832px]">
			<h1 className="text-center text-4xl text-red-800">Our Growth Partners</h1>
			<div className="grid grid-cols-4 gap-6 h-[800px] justify-items-center bg-[#f9bc6b] overflow-hidden relative">
				<Image src={BgLineImage} alt="Background Line" className="absolute filter brightness-50 w-full" />
				<div className="flex flex-col gap-6 animate-scroll">
					{duplicatedPartners.map((item, index) => (
						<div key={index} className="min-w-[250px] flex justify-center">
							<div className="bg-white border border-gray-200 shadow-lg p-4  flex flex-col items-center rounded-2xl w-[250px] overflow-hidden">
								<div className="relative w-full h-full rounded-t-2xl overflow-hidden">
									<Image src={item.image} alt="User Image" className='w-full h-full object-cover' width={0} height={0}/>
								</div>
								<div className="bg-[#F8D53C] w-full py-3 px-4 text-center rounded-b-2xl">
									<h2 className="text-lg font-bold">{item.name}</h2>
									<p className="text-sm text-gray-700">{item.brand}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="flex flex-col gap-6 animate-scrollDown">
					{duplicatedPartners.map((item, index) => (
						<div key={index} className="min-w-[250px] flex justify-center">
							<div className="bg-white border border-gray-200 shadow-lg p-4  flex flex-col items-center rounded-2xl w-[250px] overflow-hidden">
								<div className="relative w-full h-full rounded-t-2xl overflow-hidden">
									<Image src={item.image} alt="User Image" className='w-full h-full object-cover' width={0} height={0} />
								</div>
								<div className="bg-[#F8D53C] w-full py-3 px-4 text-center rounded-b-2xl">
									<h2 className="text-lg font-bold">{item.name}</h2>
									<p className="text-sm text-gray-700">{item.brand}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-6 animate-scroll">
					{duplicatedPartners.map((item, index) => (
						<div key={index} className="min-w-[250px] flex justify-center">
							<div className="bg-white border border-gray-200 shadow-lg p-4  flex flex-col items-center rounded-2xl w-[250px] overflow-hidden">
								<div className="relative w-full h-full rounded-t-2xl overflow-hidden">
									<Image src={item.image} alt="User Image" className='w-full h-full object-cover' width={0} height={0} />
								</div>
								<div className="bg-[#F8D53C] w-full py-3 px-4 text-center rounded-b-2xl">
									<h2 className="text-lg font-bold">{item.name}</h2>
									<p className="text-sm text-gray-700">{item.brand}</p>
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-6 animate-scrollDown">
					{duplicatedPartners.map((item, index) => (
						<div key={index} className="min-w-[250px] flex justify-center">
							<div className="bg-white border border-gray-200 shadow-lg p-4  flex flex-col items-center rounded-2xl w-[250px] overflow-hidden">
								<div className="relative w-full h-full rounded-t-2xl overflow-hidden">
									<Image src={item.image} alt="User Image" className='w-full h-full object-cover' width={0} height={0} />
								</div>
								<div className="bg-[#F8D53C] w-full py-3 px-4 text-center rounded-b-2xl">
									<h2 className="text-lg font-bold">{item.name}</h2>
									<p className="text-sm text-gray-700">{item.brand}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
const OurStrength = () => {
	return (
		<div className="flex flex-col gap-16 bg-[#F8D53C] overflow-hidden relative h-[700px]">
			<Image src={BgLineImage} alt="Background Line" className="absolute" />

			<h1 className="text-left text-6xl text-red-800 absolute left-8 top-8">Meet Our Strength</h1>
			<div className="grid grid-rows-2 gap-6 h-[600px] w-[2080px] justify-items-center absolute top-24 " style={{ transform: 'rotate(-20deg)' }}>
				<div className="flex gap-6 animate-scrollRight">
					{
						OurStrengths.map((item, index) => (
							<StrengthUserDiv key={index} item={item} />
						))
					}
				</div>
				<div className="flex gap-6 animate-scrollLeft">
					{
						OurStrengths.map((item, index) => (

							<StrengthUserDiv key={index} item={item} />
						))
					}
				</div>


			</div>
		</div>
	)

}
interface StrengthUserDivProps {
	item: OurStrengths;
}
const StrengthUserDiv = ({ item }: StrengthUserDivProps) => {
	return (
		<div className="min-w-[400px] flex justify-center">
			<div className="bg-white flex gap-3 justify-center items-center text-center rounded-2xl h-[250px] p-4">
				<div className='h-full w-[240px] flex items-center justify-center rounded-2xl border'>
					<Image src={item.image} alt="User Image" width={120} height={120} />
				</div>
				<div className='flex flex-col gap-3 text-left'>
					<div>
						<h2 className="text-2xl">{item.name}</h2>
						<p className="text-sm">{item.position}</p>
					</div>
					<div>
						<p>{item.description}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
const AboutUsPage = async () => {

	return (
		<div className="flex flex-col gap-16">
			<DiveSection />
			<Divider />
			<EvolvedOverTheYears />
			<Divider />
			<WhatDrivesUs />
			<Divider />
			<WhyChooseUs />
			<Divider />
			<HassleFreeProcurement />
			<Divider />
			<OurGrowthPartners />
			<Divider />
			<OurStrength />
		</div>
	);
};

export default AboutUsPage;
