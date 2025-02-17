'use client';

import React from 'react';
import Image from 'next/image';

import BgLineImage from "@/images/bgLine.svg";
import { contentTypeEnum } from "@/constants/constant";
import { useContent } from "@/lib/api";
import { PodcastInterface } from '@/constants/interface';
import PodcastDiv from '@/components/media/podcastDiv';
import YoutubeIcon from '@/icons/youtubeIcon.svg';
import SpotifyIcon from '@/icons/spoitfyIcon.svg';

const PodcastPage = () => {
	const { data, isLoading, isError } = useContent(contentTypeEnum.PODCAST);

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error loading Blogs</div>;
	if (!data || data.length === 0) {
		return (
			<div className='min-h-[600px] max-w-full flex flex-col justify-center items-center space-y-6 relative w-full bg-[#F8D53C] overflow-hidden'>
				<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full" />
				<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full rotate-2" />
				<h1 className="font-bold text-4xl">No Blogs available</h1>
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
								data.map((podcast: PodcastInterface) => (
									<PodcastDiv key={podcast.id} podcast={podcast} type="secondary" />
								))
							}
						</div>
					</div>
				</div>
			</div>
			<div className='my-8 w-full px-2 md:px-8 flex flex-col gap-2 justify-center'>
				<a href="https://www.youtube.com/@THEYARNBAZAAR" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
					<Image src={YoutubeIcon} alt="Youtube Icon" className="w-6 h-6 inline-block" />
					Check all our podcast in our youtube channel
				</a>
				<a href="https://open.spotify.com/show/7nrT5bUoBAtJwuLh9S4F40" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline flex items-center gap-2">
					<Image src={SpotifyIcon} alt="Spotify Icon" className="w-6 h-6 inline-block" />
					Check all our podcast in Spotify
				</a>
			</div>

		</>
	)
};

export default PodcastPage;
