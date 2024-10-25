import React from "react";

import Porifo from "./Porifo";

const Project = () => {
  return (
    <div className="py-20 bg-primary-200 text-text-200">
      <div className="flex flex-col gap-10 mx-auto w-[1440px]">
        <h2 className="text-title/40px text-center">PROJECT</h2>
        <hr className="w-full border-text-200" />
        <Porifo />
      </div>
    </div>
  );
};

export default Project;
