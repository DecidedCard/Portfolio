import React from "react";

import Image from "next/image";

import { frontEndSkillArr } from "@/util/skill";

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
              {frontEndSkillArr.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <Image src={item.image} alt="css3" className="w-40 h-40" />
                  <p className="text-black">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 p-4 w-96 bg-white rounded-xl">
            <p className="text-bodyM/20px text-black">Back-End</p>
            <hr className="w-full h-[1px] border-0 bg-black" />
            <div className="grid grid-cols-2 gap-3 p-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
