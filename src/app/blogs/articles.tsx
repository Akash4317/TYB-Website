import type { Metadata } from "next";
import React from 'react';
import Image from 'next/image';

import { fetchContent } from "@/lib/db";
import BgLineImage from "@/images/bgLine.svg";
import { Button } from "@/components/ui/button";
import { contentTypeEnum } from "@/constants/constant";

export const generateMetadata = (): Metadata => {
	return {
		title: "Articles - The Yarn Bazaar",
		description: "Explore the latest articles from The Yarn Bazaar.",
	};
};

export interface Article {
	id: number;
	title: string;
	title_description: string;
	content: { key: string };
	title_image_url: string;
};

const ArticleDiv = ({ article }: { article: Article }) => {
	return <>
		<a target="_blank" href={article.content.key} rel="noopener noreferrer" className='h-80 border-4 border-[#F89E24] bg-[#F89E24] aspect-square rounded-xl flex flex-col justify-end items-center relative group hover:scale-105 duration-200'>
			<div className='absolute inset-0'>
				<Image src={article.title_image_url} alt='TYB' priority layout='fill' objectFit='cover' className='rounded-lg' />
			</div>
			<div className='relative rounded-t-2xl roundeb w-full h-1/2 bg-black bg-opacity-70 text-white space-y-2 p-2 rounded-b-lg'>
				<h2 className='text-xl text-center line-clamp-2'>{article.title}</h2>
			</div>
			<Button className='absolute rounded-3xl -bottom-4 left-1/2 transform -translate-x-1/2 z-50 min-w-24 w-[50%] group-hover:text-black group-hover:bg-white'>
				Read More
			</Button>
		</a>
	</>
};

const ArticlePage = async () => {
	let articles: Article[] = [];
	try {
		const res = await fetchContent(contentTypeEnum.NEWS);
		articles = res;
	} catch (error) {
		console.error('Failed to fetch articles:', error);
	}
	if (articles.length === 0) {
		return (
			<div className='min-h-[600px] max-w-full flex flex-col justify-center items-center space-y-6 relative w-full bg-[#F8D53C] overflow-hidden'>
				<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full" />
				<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full rotate-2" />
				<h1 className="font-bold text-4xl">No Articles available</h1>
			</div>
		);
	}

	return (
		<>
			<div className='min-h-[600px] max-w-full flex flex-col space-y-6 relative w-full bg-[#F8D53C]'>
				<div className='h-full relative overflow-hidden'>
					<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full" />
					<Image src={BgLineImage} alt="Background Line" className="absolute -top-10 filter brightness-50 w-full rotate-2" />
					<div className="flex justify-evenly flex-wrap gap-8 h-full p-8 z-10">
						{
							articles.map((article) => (
								<ArticleDiv key={article.id} article={article} />
							))
						}
					</div>
				</div>
			</div>
		</>
	);
};

export default ArticlePage;
