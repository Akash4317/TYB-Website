import type { Metadata } from "next";
import "@/styles/globals.css";
import React from 'react';
import Image from 'next/image';
import TYBImage from '@/images/tyb.svg';
import Link from "next/link";
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
  content: string;
};

const fetchBlogs = async (): Promise<Blog[]> => {
  const response = await fetch(`${process.env.DB_ENDPOINT}/blogs`);
  if (!response.ok) {
    throw new Error('Failed to fetch blogs');
  }
  return response.json();
};

const BlogDiv = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blogs/${blog.id}`}>
      <div className='border min-w-[200px] h-[250px] p-4 rounded-lg flex flex-col justify-between items-center'>
        <Image src={TYBImage} alt='TYB' width={80} priority />
        <div className=''>
          <h2 className='text-xl text-center'>{blog.title}</h2>
          <p className='text-muted-foreground'>{blog.content}</p>
        </div>
      </div>
    </Link>
  );
};

const BlogPage = async () => {
  let blogs: Blog[] = [];
  try {
    blogs = await fetchBlogs();
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
  }
  if (blogs.length === 0) {
    return <h1 className='text-center'>No blogs found</h1>;
  }

  return (
    <>
      <div className='min-h-full max-w-full flex flex-col space-y-6 relative'>
        <h1 className='text-center text-2xl font-bold'>Blog Page</h1>
        <div className='flex flex-wrap gap-4 justify-center'>
          {blogs.map(blog => (
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
