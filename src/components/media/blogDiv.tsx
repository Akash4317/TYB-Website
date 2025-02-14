import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Blog } from "@/constants/interface";

const BlogDiv = ({ blog, type = 'primary' }: { blog: Blog, type?: 'primary' | 'secondary' }) => {
  return <>
    {type === 'primary' ? (
      <Link href={`/media/${blog.id}`}>
        <div className='border-8 border-white w-full h-full rounded-lg flex flex-col justify-end items-center bg-white relative overflow-hidden'>
          <Image src={blog.title_image_url} alt='TYB' priority layout='fill' objectFit='cover' className='rounded-lg' />
          <div className='relative w-full bg-black bg-opacity-50 text-white p-4 space-y-2 rounded-b-lg'>
            <h2 className='text-xl font-semibold'>{blog.title}</h2>
            <p className='text-muted text-sm line-clamp-3'>{blog.title_description}</p>
          </div>
        </div>
      </Link>
    ) : (
      <Link href={`/media/${blog.id}`}>
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

export default BlogDiv;