import React from "react";
import Link from "next/link";

import Slider from "./Slider";
import MarkdownModal from "../modal/MarkdownModal";

import useModalToggle from "@/hooks/useModalToggle";

import { porifoMD } from "@/util/project-readMe/porifo";

import porifo1 from "@/../public/assets/projectImage/porifo1.png";
import porifo2 from "@/../public/assets/projectImage/porifo2.png";
import porifo3 from "@/../public/assets/projectImage/porifo3.png";

const Porifo = () => {
  const { isModal, onClickIsModalToggleHandler } = useModalToggle();

  const images = [porifo1, porifo2, porifo3];

  return (
    <div className="flex flex-col justify-center gap-3 mx-auto p-4 w-[1000px] bg-accent-200 text-black rounded-xl">
      <p className="text-body/26px text-center">Porifo</p>
      <span className="text-body/18px text-gray-400 text-center">
        2024.04 ~ 2024.05
      </span>
      <hr className="border-black" />
      <div className="relative flex gap-5">
        <div className="flex w-[400px] h-[500px]">
          <Slider images={images} />
        </div>
        <hr className="my-auto w-[1px] h-[500px] border-0 bg-black" />
        <div className="flex flex-col gap-3 text-body/18px w-full">
          <ol className="flex justify-between w-full">
            <span className="w-[120px] text-end whitespace-nowrap">
              프로젝트 소개:
            </span>
            <span className="w-[500px]">
              porifo는 템플릿 기반으로 이력서를 작성 및 수정할 수 있고, 공유하여
              유저들끼리 피드백을 받을 수 있는 사이트 입니다.
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
              <p> - Supabase를 사용하여 Oauth 및 이메일 로그인/회원가입 구현</p>
              <p> - 이력서 작성 및 수정할 수 있는 작성 페이지 구현</p>
              <p>
                - 이력서 공유시 피드백을 받고 공유한 것을 확인할 수 있는
                커뮤니티 페이지 구현
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
        <button
          onClick={onClickIsModalToggleHandler}
          className="absolute bottom-4 right-4 ml-4 p-2 w-fit border border-solid border-black rounded-lg"
        >
          README
        </button>
      </div>
      {isModal && (
        <MarkdownModal
          markdown={porifoMD}
          isModal={isModal}
          onClickIsModalToggleHandler={onClickIsModalToggleHandler}
        />
      )}
    </div>
  );
};

export default Porifo;
