import { JSX } from "react";
import { contentTypeEnum } from "./constant";

export interface TabData {
  title: string;
  content: JSX.Element
}
export interface contentTypes {
  type: contentTypeEnum;
}

export interface Blog {
  id: number;
  title: string;
  title_description: string;
  content: string;
  title_image_url: string;
};

export interface ArticleInterface {
  id: number;
  title: string;
  title_description: string;
  content: { key: string };
  title_image_url: string;
};

export interface PodcastInterface {
  id: number;
  title: string;
  title_description: string;
  content: { key: string };
  title_image_url: string;
};
