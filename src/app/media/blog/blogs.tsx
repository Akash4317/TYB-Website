'use client';

import React from 'react';
import Image from 'next/image';

import { useContent } from "@/lib/api";
import { Blog } from "@/constants/interface";

import BgLineImage from "@/images/bgLine.svg";
import { Button } from "@/components/ui/button";
import BlogDiv from "@/components/media/blogDiv";
import { contentTypeEnum } from '@/constants/constant';
import Divider from '@/components/ui/divider';

const BlogPage = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const { data, isLoading, isError } = useContent(contentTypeEnum.BLOG);

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
					<div className="grid h-full p-16 z-10">
						{data.length > 0 && (
							<div className="grid grid-cols-2 gap-4 h-full z-30">
								<BlogDiv blog={data[0]} />
								{data.length > 1 && (
									<div className="grid grid-rows-2 gap-4 z-10">
										<BlogDiv blog={data[1]} />
										{data.length > 2 && (
											<div className="grid grid-cols-2 gap-4">
												<BlogDiv blog={data[2]} />
												{data.length > 3 && <BlogDiv blog={data[3]} />}
											</div>
										)}
									</div>
								)}
							</div>
						)}
					</div>
				</div>
				<Button className='absolute -bottom-4 right-[40%] z-50 min-w-48 w-[20%] border' variant='outline' onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? 'Hide Older Blogs' : 'See Older Blogs'}
				</Button>
			</div>
			<Divider className='my-8' />
			{
				isOpen && (
					<>
						<div className='relative overflow-hidden'>
							<div className="flex justify-evenly flex-wrap gap-8 h-full p-8 z-10">
								{
									data.map((blog: Blog) => (
										<BlogDiv key={blog.id} blog={blog} type="secondary" />
									))
								}
							</div>

						</div>
						<Divider className='my-8' />
					</>
				)
			}
		</>
	);
};

export default BlogPage;
