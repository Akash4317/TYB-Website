import Image from "next/image";
import { PodcastInterface } from "@/constants/interface";

const PodcastDiv = ({ podcast, type = 'primary' }: { podcast: PodcastInterface, type?: 'primary' | 'secondary' }) => {
  return <>
    <a target="_blank" href={podcast.content.key} rel="noopener noreferrer" className='h-80 aspect-square rounded-lg flex flex-col justify-end items-center bg-white relative hover:scale-105 duration-200'>
      <div className='border-8 border-white w-full h-full rounded-lg flex flex-col justify-end items-center bg-white relative overflow-hidden'>
        <Image src={podcast.title_image_url} alt='TYB' priority layout='fill' objectFit='cover' className='rounded-lg' />
        <div className='relative w-full bg-black bg-opacity-50 text-white p-4 space-y-2 rounded-b-lg'>
          <h2 className='text-xl font-semibold'>{podcast.title}</h2>
          <p className='text-muted text-sm line-clamp-3'>{podcast.title_description}</p>
        </div>
      </div>
    </a>
  </>
};

export default PodcastDiv;