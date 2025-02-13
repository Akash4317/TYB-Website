import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';

import { fetchPodcasts } from "@/lib/db";
import BgLineImage from "@/images/bgLine.svg";

export const generateMetadata = (): Metadata => {
	return {
		title: "Podcasts - The Yarn Bazaar",
		description: "Explore the latest podcasts from The Yarn Bazaar.",
	};
};

export interface Podcast {
	id: number;
	title: string;
	title_description: string;
	content: { key: string };
	title_image_url: string;
};

const PodcastDiv = ({ podcast, type = 'primary' }: { podcast: Podcast, type?: 'primary' | 'secondary' }) => {
	return <>
		<a target="_blank" href={podcast.content.key} rel="noopener noreferrer" className='h-80 aspect-square rounded-lg flex flex-col justify-end items-center bg-white relative hover:scale-105 duration-200'>
			<div className='border-8 border-white w-full h-full rounded-lg flex flex-col justify-end items-center bg-white relative overflow-hidden'>
				<Image src={podcast.title_image_url} alt='TYB' priority layout='fill' objectFit='cover' className='rounded-lg' />
				<div className='relative w-full bg-black bg-opacity-50 text-white p-4 space-y-2 rounded-b-lg'>
					<h2 className='text-xl font-semibold'>{podcast.title}</h2>
					<p className='text-muted text-sm line-clamp-3'>{podcast.title_description}</p>
				</div>
			</div>
		</a>
	</>
};

const PodcastPage = async () => {
	let podcasts: Podcast[] = [];
	try {
		const res = await fetchPodcasts();
		podcasts = res;
	} catch (error) {
		console.error('Failed to fetch podcasts:', error);
	}
	if (podcasts.length === 0) {
		return (
			<div className='min-h-[600px] max-w-full flex flex-col justify-center items-center space-y-6 relative w-full bg-[#F8D53C] overflow-hidden'>
				<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full" />
				<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full rotate-2" />
				<h1 className="font-bold text-4xl">No Podcasts available</h1>
			</div>
		);
	}

	return (
		<>
			<div className='min-h-[600px] max-w-full flex flex-col space-y-6 relative w-full bg-[#F8D53C]'>
				<div className='h-full relative overflow-hidden'>
					<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full" />
					<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full rotate-2" />
					<div className='relative overflow-hidden'>
						<div className="flex justify-evenly flex-wrap gap-8 h-full p-8 z-10">
							{
								podcasts.map((podcast) => (
									<PodcastDiv key={podcast.id} podcast={podcast} type="secondary" />
								))
							}
						</div>
					</div>
				</div>
			</div>

		</>
	);
};

export default PodcastPage;
