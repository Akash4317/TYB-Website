import React from 'react';
import type { Metadata } from "next";

import Image from 'next/image';
import Subheading from '@/components/ui/Subheading';
import { briefHistoryParagraphs, IndustryPotentialParagraphs } from '@/constants/constant';
import briefHistoryImage from '@/images/about-us/brief-history-image.png';
import IndustryPotentialImage from '@/images/about-us/Industry-potential-image.svg';
import TargetSVG from '@/images/about-us/target.svg';
import SharedVisionSVG from '@/images/about-us/shared-vision.svg';
import MountainSVG from '@/images/about-us/mountain.svg';
import ThreePillarsImage from '@/images/about-us/three-pillars.png';
import OurValuesImage from '@/images/about-us/our-values.svg';
import AimSVG from '@/images/about-us/aim.svg';
import DeadlineSVG from '@/images/about-us/deadline.svg';
import IndianSVG from '@/images/about-us/indian.svg';
import IntelligenceSVG from '@/images/about-us/intelligence.svg';
import SaveSVG from '@/images/about-us/save.svg';
import ServiceSVG from '@/images/about-us/service.svg';

export const generateMetadata = (): Metadata => {
	return {
		title: "About us - The Yarn Bazaar",
		description: "What we do at The Yarn Bazaar.",
	};
};

interface OurThreePillarsInterface {
	image: string;
	title: string;
	description: string;
}
const OurThreePillarsData: OurThreePillarsInterface[] = [
	{
		image: TargetSVG,
		title: 'Our Purpose',
		description: 'KRANTI - To create an impact by revolutionising the textile industry'
	},
	{
		image: SharedVisionSVG,
		title: 'Our Vision',
		description: 'To organise the unorganised textile industry'
	},
	{
		image: MountainSVG,
		title: 'Our Mission',
		description: 'To empower small yarn buyers and suppliers'
	}
]
interface OurValuesInterface {
	image: string;
	title: string;
}
const OurValuesData: OurValuesInterface[] = [
	{
		image: AimSVG,
		title: 'Customer-centricity'
	},
	{
		image: DeadlineSVG,
		title: 'Speed Over Perfection'
	},
	{
		image: IndianSVG,
		title: 'We are a tribe'
	},
	{
		image: IntelligenceSVG,
		title: 'Take Intelligent Risks'
	},
	{
		image: SaveSVG,
		title: 'Frugality'
	},
	{
		image: ServiceSVG,
		title: 'Industry Excellence'
	}
]
const BriefHistory = () => {
	return (
		<div className="grid md:grid-cols-5 gap-8 p-8">
			<div className='col-span-3'>
				<Subheading text="A Brief History of Revolutionising The Textile Industry" className="mb-8" />
				<div className="text-lg leading-7 tracking-normal text-gray-600">
					{briefHistoryParagraphs.map((paragraph, index) => (
						<>
							<p key={index} >
								{paragraph}
							</p>
							<br />
						</>
					))}
					<p className='font-bold text-gray-900'>Pratik Gadia</p>
					<p>Founder & Chief Executive Officer</p>
					<p>The Yarn Bazaar</p>
				</div>
			</div>
			<div className='col-span-5 md:col-span-2'>
				<Image src={briefHistoryImage} alt="Brief History Image" />
			</div>
			<p></p>
		</div>
	);
}
const IndustryPotential = () => {
	return (
		<div className="grid md:grid-cols-7 gap-8 bg-white p-8">
			<div className='col-span-7 md:col-span-3 flex justify-center items-center '>
				<Image src={IndustryPotentialImage} alt="Industry Potential Image" />
			</div>
			<div className='col-span-7 md:col-span-4 flex flex-col justify-center'>
				<Subheading text="Unleashing The Industry’s Potential" className="mb-8" />
				<div className="text-lg leading-7 tracking-normal text-gray-600">
					{
						IndustryPotentialParagraphs.map((paragraph, index) => (
							<>
								<p key={index} >
									{paragraph}
								</p>
								<br />
							</>
						))
					}
				</div>
			</div>
		</div>
	);
}
interface PillarProps {
	pillar: OurThreePillarsInterface;
}

const PillarDiv: React.FC<PillarProps> = ({ pillar }) => {
	return (
		<div className='grid grid-cols-5 gap-8 p-8'>
			<div className='col-span-1 flex justify-center'>
				<Image src={pillar.image} width={100} alt="target" />
			</div>
			<div className='col-span-4'>
				<Subheading text={pillar.title} className="mb-4" />
				<p className='text-lg leading-7 tracking-normal text-gray-600'>
					{pillar.description}
				</p>
			</div>
		</div>
	)
}
const OurThreePillars = () => {
	return (
		<div className='grid md:grid-cols-2 p-16 pt-0'>
			<div className=''>
				{
					OurThreePillarsData.map((pillar, index) => (
						<PillarDiv key={index} pillar={pillar} />
					))
				}
			</div>
			<div className='items-center flex justify-center'>
				<Image src={ThreePillarsImage} alt="Three Pillars Image" className='rounded-2xl' />
			</div>
		</div>
	)
}
const ValuesDiv: React.FC<{ value: OurValuesInterface }> = ({ value }) => {
	return (
		<div className='grid grid-cols-5 gap-8'>
			<div className='col-span-2 flex justify-center'>
				<Image src={value.image} width={50} alt="target" />
			</div>
			<div className='col-span-3 text-xl text-gray-600'>
				<p>{value.title}</p>
			</div>
		</div>
	)
}
const OurValues = () => {
	return (
		<div className="grid md:grid-cols-7 gap-8 bg-white p-16">
			<div className='col-span-7 md:col-span-3 flex justify-center items-center '>
				<Image src={OurValuesImage} alt="Our Image" />
			</div>
			<div className='col-span-7 md:col-span-4 flex flex-col justify-center'>
				<Subheading text="Unleashing The Industry’s Potential" className="mb-8" />
				<p className="text-lg leading-7 tracking-normal text-gray-600">
					We live and breathe the fundamental principles that guide our actions and decisions - our core values.
				</p>
				<div className='grid grid-cols-2 gap-4 mt-4'>
					{
						OurValuesData.map((value, index) => (
							<ValuesDiv key={index} value={value} />
						))
					}

				</div>
			</div>
		</div>
	)

}

const AboutUsPage = async () => {

	return (
		<div className="flex flex-col gap-16">
			<BriefHistory />
			<IndustryPotential />
			<OurThreePillars />
			<OurValues />
		</div>
	);
};

export default AboutUsPage;
