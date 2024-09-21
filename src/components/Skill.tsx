import React from "react";

import Image from "next/image";

import html5 from "@/../public/assets/skillImage/HTML5.svg";
import css3 from "@/../public/assets/skillImage/CSS3.svg";
import javascript from "@/../public/assets/skillImage/JavaScript.svg";
import react from "@/../public/assets/skillImage/React.svg";
import nextjs from "@/../public/assets/skillImage/Nextjs.svg";
import tailwindCSS from "@/../public/assets/skillImage/Tailwind_CSS.svg";
import zustand from "@/../public/assets/skillImage/zustand.svg";

const Skill = () => {
  return (
    <div className="flex justify-center items-center py-10 bg-gray-700 text-white">
      <div className="flex flex-col items-center gap-5 w-[1440px]">
        <h2 className="text-headingB/32px">Skill</h2>
        <hr className="w-full h-[1px] border-0 bg-black" />
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-3 p-4 w-96 bg-white rounded-xl">
            <p className="text-bodyM/20px text-black">Front-End</p>
            <hr className="w-full h-[1px] border-0 bg-black" />
            <div className="grid grid-cols-2 gap-3 p-4">
              <Image src={html5} alt="html5" className="w-40 h-40" />
              <Image src={css3} alt="css3" className="w-40 h-40" />
              <Image src={javascript} alt="css3" className="w-40 h-40" />
              <Image src={react} alt="css3" className="w-40 h-40" />
              <Image src={nextjs} alt="css3" className="w-40 h-40" />
              <Image src={tailwindCSS} alt="css3" className="w-40 h-40" />
              <Image src={zustand} alt="css3" className="w-40 h-40" />
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 w-96 bg-white rounded-xl">
            <p className="text-bodyM/20px text-black">Front-End</p>
            <hr className="w-full h-[1px] border-0 bg-black" />
            <div className="grid grid-cols-2 gap-3 p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
