'use client';

import React from 'react';
import Image from 'next/image';

import BgLineImage from "@/images/bgLine.svg";
import { contentTypeEnum } from "@/constants/constant";
import { useContent } from "@/lib/api";
import { PodcastInterface } from '@/constants/interface';
import PodcastDiv from '@/components/media/podcastDiv';

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

		</>
	)
};

export default PodcastPage;
