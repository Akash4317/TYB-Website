import React from 'react';
import Image from 'next/image';

import { fetchContent } from '@/lambda/db';
import { contentTypeEnum } from "@/constants/constant";
import { PodcastInterface } from '@/constants/interface';

import BgLineImage from "@/images/bgLine.svg";
import YoutubeIcon from '@/icons/youtubeIcon.svg';
import SpotifyIcon from '@/icons/spoitfyIcon.svg';
import PodcastDiv from '@/components/media/podcastDiv';


const PodcastPage = async () => {
	return (
		<>
			<div className='min-h-[600px] max-w-full flex flex-col space-y-6 relative w-full bg-[#F8D53C]'>
				<div className='h-full relative overflow-hidden'>
					<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full" />
					<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full rotate-2" />
					<PodcastList />
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

const PodcastList = async () => {
	const data = await fetchContent(contentTypeEnum.PODCAST);
	return (
		<div className='relative overflow-hidden'>
			<div className="flex justify-evenly flex-wrap gap-8 h-full p-8 z-10">
				{
					data.map((podcast: PodcastInterface) => (
						<PodcastDiv key={podcast.id} podcast={podcast} type="secondary" />
					))
				}
			</div>
		</div>
	)
}