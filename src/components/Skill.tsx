import React from "react";

import Image from "next/image";

import {
  frontEndSkillArr,
  backEndSkillArr,
  deploymentArr,
  versionControlArr,
  communicationArr,
} from "@/util/skill";

const Skill = () => {
  return (
    <div className="py-20 bg-primary-300 text-white">
      <div className="flex flex-col items-center gap-10 mx-auto w-[1440px]">
        <h2 className="text-headingB/32px">SKILL</h2>
        <hr className="w-full border-white" />
        <div className="flex justify-center gap-4 w-full">
          <div className="flex flex-col gap-3 p-4 w-96 bg-accent-200 rounded-xl duration-300 hover:scale-105">
            <p className="text-bodyB/20px text-black">Front-End</p>
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
          <div className="flex flex-col gap-3 ">
            <div className="flex flex-col gap-3 p-4 w-96 h-fit bg-accent-200 rounded-xl duration-300 hover:scale-105">
              <p className="text-bodyB/20px text-black">Back-End</p>
              <hr className="w-full h-[1px] border-0 bg-black" />
              <div className="flex flex-wrap gap-3 p-4">
                {backEndSkillArr.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item.image}
                    alt={item.text}
                    className="w-fit h-32"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 w-96 h-fit bg-accent-200 rounded-xl duration-300 hover:scale-105">
              <p className="text-bodyB/20px text-black">Communication</p>
              <hr className="w-full h-[1px] border-0 bg-black" />
              <div className="flex flex-wrap justify-center gap-3 p-4">
                {communicationArr.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item.image}
                    alt={item.text}
                    className="w-fit h-20"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 p-4 w-96 h-fit bg-accent-200 rounded-xl duration-300 hover:scale-105">
              <p className="text-bodyB/20px text-black">Deployment</p>
              <hr className="w-full h-[1px] border-0 bg-black" />
              <div className="p-4">
                {deploymentArr.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item.image}
                    alt={item.text}
                    className="w-fit h-32"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4 w-96 h-fit bg-accent-200 rounded-xl duration-300 hover:scale-105">
              <p className="text-bodyB/20px text-black">Version Control</p>
              <hr className="w-full h-[1px] border-0 bg-black" />
              <div className="flex flex-wrap justify-center items-center gap-5 p-4">
                {versionControlArr.map((item, idx) => (
                  <Image
                    key={idx}
                    src={item.image}
                    alt={item.text}
                    className="w-fit h-28"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
