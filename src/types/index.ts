import type { StaticImageData } from "next/image";

export interface Project {
  name: string;
  date: string;
  images: StaticImageData[];
  introduce: string;
  skill: string;
  team: string;
  function: string[];
  trouble: { trouble: string; cause: string; solve: string }[];
  link: { github: string; deploy: string };
  markDown: string;
}
