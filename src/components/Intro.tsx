import React from "react";

import useIntro from "@/hooks/useIntro";

const Intro = () => {
  const { title, comment1, comment2, comment3 } = useIntro();
  return (
    <section className="h-[460px] bg-primary-100 text-text-200">
      <div className="flex flex-col items-center gap-10 mx-auto py-16 w-[1440px]">
        <h2 className="text-headingB/32px">{title}</h2>
        <hr className="w-full border-accent-200" />
        <div className="flex flex-col gap-4 text-bodyM/20px">
          <p>{comment1}</p>
          <p>{comment2}</p>
          <p>{comment3}</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
