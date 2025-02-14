import { ArticleInterface } from "@/constants/interface";
import Image from "next/image";
import { Button } from "../ui/button";

const ArticleDiv = ({ article }: { article: ArticleInterface }) => {
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

export default ArticleDiv;