import React from "react";
import Link from "next/link";

import Slider from "./Slider";

const Project = () => {
  return (
    <div className="py-20 bg-primary-200 text-text-200">
      <div className="flex flex-col gap-10 mx-auto w-[1440px]">
        <h2 className="text-headingB/28px text-center">PROJECT</h2>
        <hr className="w-full border-text-200" />
        <div className="flex flex-col justify-center gap-3 mx-auto p-4 w-[1000px] bg-accent-200 text-black rounded-xl">
          <p className="text-bodyB/20px text-center">Porifo</p>
          <span className="text-bodyR/18px text-gray-400 text-center">
            2024.04 ~ 2024.05
          </span>
          <hr className="border-black" />
          <div className="flex gap-5">
            <div className="flex w-[400px] h-[500px]">
              <Slider />
            </div>
            <hr className="my-auto w-[1px] h-[500px] border-0 bg-black" />
            <div className="flex flex-col gap-3 text-bodyM/18px w-full">
              <ol className="flex justify-between w-full">
                <span className="w-[120px] text-end whitespace-nowrap">
                  프로젝트 소개:
                </span>
                <span className="w-[500px]">
                  porifo는 포트폴리오를 간단히 작성하고, 유저들끼리 피드백을
                  받을 수 있는 사이트 입니다.
                </span>
              </ol>
              <ol className="flex justify-between">
                <span className="w-[120px] text-end whitespace-nowrap">
                  기술 스택:
                </span>
                <span className="w-[500px]">
                  Next.js, TypeScript, tailwindcss, zustand, Tanstack Query,
                  supabase
                </span>
              </ol>
              <ol className="flex justify-between">
                <span className="w-[120px] text-end whitespace-nowrap">
                  팀 구성:
                </span>
                <span className="w-[500px]">프론트엔드: 4명, 디자인: 1명</span>
              </ol>
              <ol className="flex justify-between">
                <span className="w-[120px] text-end whitespace-nowrap">
                  기능 구현:
                </span>
                <span className="flex flex-col gap-3 w-[500px]">
                  <p>
                    supabase DB와 로컬스토리지를 사용하여 로그인 유저와 비로그인
                    유저를 구분하여 저장하도록 구현.
                  </p>
                  <p>이력서 CRUD 구현</p>
                  <p>
                    route handler를 사용하여 지정한 요청만 수행할 수 있도록
                    구현.
                  </p>
                </span>
              </ol>
              <ol className="flex justify-between">
                <span className="w-[120px] text-end whitespace-nowrap">
                  배포 링크:
                </span>
                <span className="w-[500px]">
                  <Link
                    href={"https://www.porifo.com/"}
                    target="blank"
                    className="cursor-pointer underline"
                  >
                    https://www.porifo.com/
                  </Link>
                </span>
              </ol>
              <ol className="flex justify-between">
                <span className="w-[120px] text-end whitespace-nowrap">
                  Github 링크:
                </span>
                <span className="w-[500px]">
                  <Link
                    href={"https://github.com/DecidedCard/Porifo"}
                    target="blank"
                    className="cursor-pointer underline"
                  >
                    https://github.com/DecidedCard/Porifo
                  </Link>
                </span>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
