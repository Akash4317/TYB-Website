import type { Metadata } from "next";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';

import { fetchBlogs } from "@/lib/db";
import BgLineImage from "@/images/bgLine.svg";
import { Button } from "@/components/ui/button";

export const generateMetadata = (): Metadata => {
	return {
		title: "Blogs - The Yarn Bazaar",
		description: "Explore the latest blogs from The Yarn Bazaar.",
	};
};

export interface Blog {
	id: number;
	title: string;
	title_description: string;
	content: string;
	title_image_url: string;
};

const BlogDiv = ({ blog, type = 'primary' }: { blog: Blog, type?: 'primary' | 'secondary' }) => {
	return <>
		{type === 'primary' ? (
			<Link href={`/blogs/${blog.id}`}>
				<div className='border-8 border-white w-full h-full rounded-lg flex flex-col justify-end items-center bg-white relative overflow-hidden'>
					<Image src={blog.title_image_url} alt='TYB' priority layout='fill' objectFit='cover' className='rounded-lg' />
					<div className='relative w-full bg-black bg-opacity-50 text-white p-4 space-y-2 rounded-b-lg'>
						<h2 className='text-xl font-semibold'>{blog.title}</h2>
						<p className='text-muted text-sm line-clamp-3'>{blog.title_description}</p>
					</div>
				</div>
			</Link>
		) : (
			<Link href={`/blogs/${blog.id}`}>
				<div className='h-80 aspect-square rounded-lg flex flex-col justify-end items-center bg-white relative hover:scale-105 duration-200 group shadow-md'>
					<div className='absolute inset-0'>
						<Image src={blog.title_image_url} alt='TYB' priority layout='fill' objectFit='cover' className='rounded-lg' />
					</div>
					<div className='relative rounded-t-2xl roundeb w-full h-1/2 bg-black bg-opacity-50 text-white space-y-2 p-2 rounded-b-lg'>
						<h2 className='text-xl text-center line-clamp-2'>{blog.title}</h2>
						<p className='text-muted text-sm line-clamp-3'>{blog.title_description}</p>
					</div>
					<Button className='absolute rounded-3xl -bottom-4 left-1/2 transform -translate-x-1/2 z-50 min-w-24 w-[50%] border border-white  group-hover:bg-white group-hover:text-black'>
						Read More
					</Button>
				</div>
			</Link>
		)}
	</>
};

const BlogPage = async () => {
	let blogs: Blog[] = [];
	try {
		const res = await fetchBlogs();
		blogs = res;
	} catch (error) {
		console.error('Failed to fetch blogs:', error);
	}
	if (blogs.length === 0) {
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
					<div className="grid h-full p-16 z-10">
						{blogs.length > 0 && (
							<div className="grid grid-cols-2 gap-4 h-full z-30">
								<BlogDiv blog={blogs[0]} />
								{blogs.length > 1 && (
									<div className="grid grid-rows-2 gap-4 z-10">
										<BlogDiv blog={blogs[1]} />
										{blogs.length > 2 && (
											<div className="grid grid-cols-2 gap-4">
												<BlogDiv blog={blogs[2]} />
												{blogs.length > 3 && <BlogDiv blog={blogs[3]} />}
											</div>
										)}
									</div>
								)}
							</div>
						)}
					</div>
				</div>
				<Button className='absolute -bottom-4 right-[40%] z-50 min-w-48 w-[20%] border' variant='outline'>
					See More
				</Button>
				<Button className='absolute bottom-4 right-4 z-50'>
					<Link href='/blogs/upload'>
						Upload Blog
					</Link>
				</Button>
			</div>
			<div className='relative overflow-hidden'>
				<div className="flex justify-evenly flex-wrap gap-8 h-full p-8 z-10">
					{
						blogs.map((blog) => (
							<BlogDiv key={blog.id} blog={blog} type="secondary" />
						))
					}
				</div>
			</div>
		</>
	);
};

export default BlogPage;
