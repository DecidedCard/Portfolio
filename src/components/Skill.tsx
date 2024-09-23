import React from "react";

import Image from "next/image";

import { frontEndSkillArr } from "@/util/skill";

console.log(frontEndSkillArr);
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
            <div className="flex flex-wrap justify-center items-center gap-3 p-4">
              {frontEndSkillArr.map((item, idx) => (
                <Image
                  key={idx}
                  src={item.image}
                  alt={item.text}
                  className="w-fit h-24"
                />
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
