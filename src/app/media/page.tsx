
import type { Metadata } from "next";
import React from 'react';

import Tab from "../../components/ui/tab";
import BlogPage from "./blog/blogs";
import PodcastPage from "./podcast/podcasts";
import ArticlePage from "./news/articles";
import { TabData } from "@/constants/interface";
import TYBStoryImage from "@/images/tybStory.svg";
import PodcastImage from "@/images/podcast.svg"
import Image from "next/image";
import Subheading from "@/components/ui/Subheading";
import blog1 from "@/images/blog-1.svg";
import blog2 from "@/images/blog-1.svg";
import blog3 from "@/images/blog-1.svg";
import blog4 from "@/images/blog-1.svg";
import TYBpulse from "@/images/TYBPulse.svg";
import TYBtimes from "@/images/TYBTimes.svg";
import { Button } from "@/components/ui/button";
import RoundTable from "@/images/TYBRoundTable.svg";
import TYBTable from "@/images/TYBTable.svg";
import { mediaCoverageData } from "@/constants/constant";


const blogData = [
  {
    id: 1,
    image: blog1,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 2,
    image: blog2,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 3,
    src: blog3,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: 4,
    image: blog4,
    title: "Lorem ipsum dolor sit amet, consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

export const generateMetadata = (): Metadata => {
  return {
    title: "Media - The Yarn Bazaar",
    description: "Explore the latest media from The Yarn Bazaar.",
  };
};

const tabs: TabData[] = [
  {
    title: "Blogs",
    content: <BlogPage />
  },
  {
    title: "Podcasts",
    content: <PodcastPage />
  },
  {
    title: "Articles",
    content: <ArticlePage />
  },
]


const MediaPage = async () => {
  return (
    <div className='min-h-[600px] max-w-full flex flex-col space-y-6 pt-12 md:pt-6 relative'>
      {/* <Tab tabs={tabs} /> */}
      <TYBStory />
      <FeatureBlog />
      <NewsLetter />
      <MediaCoverage />
    </div>
  );
}
export default MediaPage;


const TYBStory = () => {
  return (
    <div className="relative overflow-hidden py-8 md:py-16">
      <div className="max-w-[95%] items-end flex justify-between mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-4 md:gap-12">
          <div>
            <Image src={TYBStoryImage} alt="TYB Story Image" className="max-w-[560px] h-[170px]" />

          </div>
          <div>
            <p className="text-[20px] font-light max-w-[500px] mb-8">
              <span className="font-semibold">The Yarn Bazaar Stories</span> <br />
              Is an engaging Podcast and Roundtable series that features industry leaders sharing their expertise and experiences
            </p>
            <p className="text-[20px] font-light">Listen to our podcasts <span className="text-[#FD5B2F] underline cursor-pointer">here</span></p>
          </div>
       </div>
        <div>
          <Image src={PodcastImage} alt="TYB Story Image" className="max-w-[617] h-[341px]" />
       </div>
      </div>
    </div>
   
  );
}

const FeatureBlog = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="max-w-[95%] flex flex-col gap:4 md:gap-12 mx-auto px-4 md:px-8">
        <Subheading text="Featured Blog" position="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">     
            {blogData.map((blog) => (
              <div key={blog.id} className="max-w-md bg-white rounded-lg ">
               <Image
                  src={blog2}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-t-lg"
                  width={0}
                  height={0}
                />
                <div className="py-4">
                  <h2 className="text-md  font-smeibold text-[#FD5B2F]">{blog.title}</h2>
                  <p className="font-light tracking-normal mt-2">{blog.description}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center">
          <Button
            variant="default"
            size="icon"
            className="group relative overflow-hidden bg-gradient-to-r from-[#FD5B2F] to-[#FD5B2F] hover:from-[#e87556] hover:to-[#ef552b] text-white font-poppins font-semibold rounded-full px-16 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              More Blogs
            </span>
          </Button>
       </div>
      </div>
    </div>
  )
}

const NewsLetter = () => {
  return (
    <div className="relative overflow-hidden py-16 md:py-24">
      <div className="max-w-[95%] flex flex-col gap-16 mx-auto px-4 md:px-8">
        <Subheading text="Commitment to Indian Textile" position="left" />
        <div className="flex justify-between">
          <div className="flex flex-col gap-4 md:gap-12">
            <div>
              <Image src={TYBpulse} alt="TYB Story Image" className="" />
            </div>
            <div>
              <p className="text-[20px] font-light max-w-[500px] mb-8">
                <span className="font-semibold">The Yarn Bazaar Pulse</span> <br />
                Is our fortnightly newsletter offering expert opinions, interviews, and key industry updates for quick industry insights.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 md:gap-12">
            <div>
              <Image src={TYBtimes} alt="TYB Story Image" className="" />
            </div>
            <div>
              <p className="text-[20px] font-light max-w-[500px] mb-8">
                <span className="font-semibold"> The Yarn Bazaar Times</span> <br />
                is our daily report tracking the daily price movement of fiber yarns and fabric along with currency and industry news all on one single page.
              </p>
            </div>
          </div>
        </div>
        <div className="flex rounded-tl-xl rounded-bl-xl">
          <div className="w-1/2">
            <Image
              src={RoundTable}
              alt="The Yarn Bazaar Round Table"
              className="w-full h-auto rounded-xl"
            />
          </div>
            <div className="w-1/2 bg-white p-8 rounded-tr-xl rounded-br-xl flex flex-col items-center justify-center">
            <Image
              src={TYBTable}
              alt="The Yarn Bazaar Table"
              className="max-w-[350px] h-full rounded-tr-xl rounded-br-xl"
            />
            <h3 className="text-black font-semibold text-3xl md:text-5xl ">
              Quality Matters
            </h3>
            <p className="text-gray-700 text-center max-w-[390px] text-lg mt-2">
              Elevating Indian Textiles Through Our Unwavering Commitment to Quality
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const MediaCoverage = () => {
  return (

    <div className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="max-w-[95%] flex flex-col gap:4 md:gap-12 mx-auto px-4 md:px-8">
        <Subheading text="Media Coverage" position="left" />

        <div className="flex gap-[60px] justify-center flex-wrap">
          {mediaCoverageData.map(({ src, href, alt }, index) => (
            <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="flex justify-center">
              <Image src={src} alt={alt} width={150} height={60} className="object-contain" />
            </a>
          ))}
        </div>
      </div>
      </div>
    
  )
}