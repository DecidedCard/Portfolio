import type { StaticImageData } from "next/image";

export interface Project {
  name: string;
  date: string;
  images: StaticImageData[];
  introduce: string;
  skill: string;
  team: string;
  function: Comment[];
  trouble: { trouble: Comment; cause: Comment; solve: Comment }[];
  link: { github: string; deploy: string };
  markDown: string;
}

interface Comment {
  comment: string;
  image?: StaticImageData;
  markDown?: string;
}
