
import type { Metadata } from "next";
import React from 'react';

import "@/styles/globals.css";
import Tab, { TabData } from "./tab";
import BlogPage from "./blogs";

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
    content: <h1>Podcasts</h1>
  },
  {
    title: "Articles",
    content: <h1>Articles</h1>
  },
]


const MediaPage = async () => {
  return (
    <div className='min-h-[600px] max-w-full flex flex-col space-y-6 pt-6 relative'>
      <Tab tabs={tabs} />
    </div>
  );
}
export default MediaPage;
