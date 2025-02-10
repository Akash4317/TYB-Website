import type { Metadata } from "next";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import TYBImage from '@/images/tyb.svg';

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
	description: string;
	content: string;
};

const BlogDiv = ({ blog }: { blog: Blog }) => {
	return (
		<Link href={`/blogs/${blog.id}`}>
			<div className='border min-w-[200px] max-w-[300px] h-[260px] p-4 rounded-lg flex flex-col justify-between items-center bg-[#F8D53C]'>
				<Image src={TYBImage} alt='TYB' width={80} priority />
				<div className=''>
					<h2 className='text-xl text-center'>{blog.title}</h2>
					<p className='text-muted-foreground text-sm line-clamp-3'>{blog.description}</p>
				</div>
			</div>
		</Link>
	);
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
		return <h1 className='text-center'>No blogs found</h1>;
	}

	return (
		<>
			<div className='min-h-[600px] max-w-full flex flex-col space-y-6 relative w-full'>
				<div className='flex flex-wrap gap-4 justify-center z-10 relative'>
					<Image src={BgLineImage} alt="Background Line" className="absolute z-0 -top-10 filter brightness-50 w-full" />
					{blogs.slice(0, 4).map(blog => (
						<BlogDiv key={blog.id} blog={blog} />
					))}
				</div>
				<Button className='absolute bottom-4 right-4'>
					<Link href='/blogs/upload'>
						Upload Blog
					</Link>
				</Button>
			</div>
		</>
	);
};

export default BlogPage;
