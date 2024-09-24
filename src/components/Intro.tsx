import React from "react";

const Intro = () => {
  return (
    <section className="h-[460px] bg-primary-100 text-text-200">
      <div className="flex flex-col items-center gap-10 mx-auto py-16 w-[1440px]">
        <h2 className="w-[750px] h-16 text-center text-headingB/32px">
          정해준의 포트폴리오
        </h2>
        <hr className="w-full border-accent-200" />
        <div className="flex flex-col items-center gap-4 text-bodyM/20px">
          <p>안녕하세요 어릴 때 꿈구던 개발자가 되고 싶은 정해준입니다.</p>
          <p>계속해서 발전하고 앞으로 나아가고</p>
          <p>많은 사람들이 사용하는 서비스를 만들고 싶습니다.</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
