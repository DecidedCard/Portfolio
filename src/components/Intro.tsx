import React from "react";

const Intro = () => {
  return (
    <section className="flex flex-col items-center gap-10 py-16 h-[460px] bg-gray-600 text-white">
      <h2 className="w-[750px] h-16 text-center text-headingB/32px border-b border-solid border-black">
        정해준의 포트폴리오
      </h2>
      <div className="flex flex-col items-center gap-4 text-bodyM/20px">
        <p>안녕하세요 어릴 때 꿈구던 개발자가 되고 싶은 정해준입니다.</p>
        <p>계속해서 발전하고 앞으로 나아가겠습니다.</p>
        <p>많은 사람들이 사용하는 서비스를 만들고 싶습니다.</p>
      </div>
    </section>
  );
};

export default Intro;
