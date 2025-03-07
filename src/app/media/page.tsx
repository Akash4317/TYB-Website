
import type { Metadata } from "next";
import React from 'react';

import Tab from "../../components/ui/tab";
import BlogPage from "./blog/blogs";
import PodcastPage from "./podcast/podcasts";
import ArticlePage from "./news/articles";
import { TabData } from "@/constants/interface";
import UnderConstruction from "@/components/UnderConstruction";

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
      <UnderConstruction />
    </div>
  );
}
export default MediaPage;
