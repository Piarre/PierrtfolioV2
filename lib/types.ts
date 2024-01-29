import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type Link = {
  name: string;
  hash: string;
};

export interface Project {
  title: string;
  description: string;
  link?: Link | Link[];
  tags: string[];
  imageUrl?: any;
}
