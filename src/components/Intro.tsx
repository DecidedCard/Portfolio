import React from "react";

import useIntro from "@/hooks/useIntro";

const Intro = () => {
  const { title, comment1, comment2, comment3 } = useIntro();
  return (
    <section className="h-[600px] bg-primary-100 text-text-200">
      <div className="flex flex-col justify-center items-center gap-14 py-10 mx-auto w-[1440px] h-full">
        <div className="flex flex-col gap-5 justify-center items-center w-full">
          <h2 className="h-[43px] text-title/40px">{title}</h2>
          <hr className="w-full border-accent-200" />
        </div>

        <div className="flex flex-col items-center gap-4 text-body/26px">
          <p>{comment1}</p>
          <p>{comment2}</p>
          <p>{comment3}</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
