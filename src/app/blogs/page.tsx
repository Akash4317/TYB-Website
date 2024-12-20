import type { Metadata } from "next";
import "@/styles/globals.css";
import React from 'react';
import Image from 'next/image';
import TYBImage from '@/images/tyb.svg';

export const generateMetadata = (): Metadata => {
  return {
    title: "Blogs - The Yarn Bazaar",
    description: "Explore the latest blogs from The Yarn Bazaar.",
  };
};

type Blog = {
  id: number;
  title: string;
  content: string;
};

const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await fetch('http://localhost:3001/blogs');
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
};

const BlogDiv = ({ blog }: { blog: Blog }) => {
  return (
    <div className='border min-w-[200px] h-[250px] p-4 rounded-lg flex flex-col justify-between items-center'>
      <Image src={TYBImage} alt='TYB' width={80} priority />
      <div className=''>
        <h2 className='text-xl text-center'>{blog.title}</h2>
        <p className='text-muted-foreground'>{blog.content}</p>
      </div>
    </div>
  );
};

const BlogPage = async () => {
  const blogs = await fetchBlogs();

  return (
    <>
      <div className='min-h-full max-w-full flex flex-col space-y-6'>
        <h1 className='text-center text-2xl font-bold'>Blog Page</h1>
        <div className='flex flex-wrap gap-4 justify-center'>
          {blogs.map(blog => (
            <BlogDiv key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;
