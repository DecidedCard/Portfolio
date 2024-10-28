import React from "react";
import Link from "next/link";

import Slider from "./Slider";
import MarkdownModal from "../modal/MarkdownModal";

import useModalToggle from "@/hooks/useModalToggle";

import { GG_MD } from "@/util/project-readMe/GG";

import GGImage1 from "@/../public/assets/projectImage/GG_main_page.png";
import GGImage2 from "@/../public/assets/projectImage/GG_maple_main_page.png";
import GGImage3 from "@/../public/assets/projectImage/GG_maple_result_page.png";
import GGImage4 from "@/../public/assets/projectImage/GG_maple_result_page2.png";
import GGImage5 from "@/../public/assets/projectImage/GG_maple_result_page3.png";

const GoodGame = () => {
  const { isModal, onClickIsModalToggleHandler } = useModalToggle();

  return (
    <div className="flex flex-col justify-center gap-3 mx-auto p-4 w-[1000px] bg-accent-200 text-black rounded-xl">
      <p className="text-body/26px text-center">GG(good-game)</p>
      <span className="text-body/18px text-gray-400 text-center">
        2024.10 ~ 2024.10
      </span>
      <hr className="border-black" />
      <div className="relative flex gap-5">
        <div className="flex my-auto w-[400px] h-[500px]">
          <Slider images={[GGImage1, GGImage2, GGImage3, GGImage4, GGImage5]} />
        </div>
        <hr className="my-auto w-[1px] h-[900px] border-0 bg-black" />
        <div className="flex flex-col gap-3 text-body/18px w-full">
          <ol className="flex justify-between w-full">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              프로젝트 소개:
            </span>
            <span className="w-[500px]">
              porifo는 템플릿 기반으로 이력서를 작성 및 수정할 수 있고, 공유하여
              유저들끼리 피드백을 받을 수 있는 사이트 입니다.
            </span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              기술 스택:
            </span>
            <span className="w-[500px]">
              Next.js, TypeScript, tailwindcss, zustand, Tanstack Query
            </span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              팀 구성:
            </span>
            <span className="w-[500px]">개인프로젝트</span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              기능 구현:
            </span>
            <span className="flex flex-col gap-3 w-[500px]">
              <p>
                - 넥슨 오픈 API를 이용하여 메이플스토리라는 게임의 데이터를
                가져와서 구현
              </p>
              <p> - 랭킹 정보를 가져와서 랭킹을 확인할 수 있는 페이지 구현</p>
              <p>
                - 캐릭터를 검색하여 캐릭터의 스탯 및 아이템 등을 확인할 수 있는
                페이지 구현
              </p>
              <p>- 모바일 환경을 고려하여 반응형 디자인 구현</p>
            </span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              트러블 슈팅:
            </span>
            <span className="flex flex-col gap-3 w-[500px]">
              <span className="flex flex-col gap-1">
                <span>
                  <span className="text-title/16px">문제</span>: query string을
                  사용하여 url에 저장된 데이터를 가져오는 과정에서
                  useSearchParams를 사용하였는데 build중에 오류가 발생했습니다.
                </span>
                <span>
                  <span className="text-title/16px">문제 원인</span>: next에서
                  useSearchParams를 사용하면 사용한 부분을 Suspense로 감싸서
                  사용해야 된다고 공식문서에 나와있다는 것을 알게 되었습니다.
                </span>
                <span>
                  <span className="text-title/16px">해결 방법</span>: 기존에
                  사용하던 부분을 컴포넌트로 다시 작성하고 그 컴포넌트를
                  Suspense로 감싸서 문제를 해결하였습니다.
                </span>
              </span>
              <span className="flex flex-col gap-1">
                <span>
                  <span className="text-title/16px">문제</span>:
                  react-hook-form을 사용하여 공통 컴포넌트를 사용할려고 했는데
                  type을 any로 설정한게 typescript를 사용하는 목적이랑 어긋나는
                  거 같아 any를 변경하려던 중 unkown이나 react-hook-form에 있는
                  FieldValues를 사용할려고 했지만 작성한 커스텀 타입이 적용되지
                  않아 오류가 발생하였습니다.
                </span>
                <span>
                  <span className="text-title/16px">문제 원인</span>:
                  UseFormRegister의 제네릭으로 FieldValues를 사용하여 type문제는
                  해결하는 듯 싶었지만 커스텀 타입으로 지정된 register를 props로
                  집어넣게 되면 FieldValues와 type 불일치가 일어나 오류가
                  발생하였습니다.
                </span>
                <span>
                  <span className="text-title/16px">해결 방법</span>: 제네릭을
                  사용하여 커스텀 타입을 적용할 수 있도록 변경하여 문제를
                  해결하였습니다.
                </span>
              </span>
            </span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              배포 링크:
            </span>
            <span className="w-[500px]">
              <Link
                href={"https://gg-ashen-five.vercel.app/"}
                target="blank"
                className="cursor-pointer underline"
              >
                https://gg-ashen-five.vercel.app/
              </Link>
            </span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              Github 링크:
            </span>
            <span className="w-[500px]">
              <Link
                href={"https://github.com/DecidedCard/GG"}
                target="blank"
                className="cursor-pointer underline"
              >
                https://github.com/DecidedCard/GG
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
          markdown={GG_MD}
          isModal={isModal}
          onClickIsModalToggleHandler={onClickIsModalToggleHandler}
        />
      )}
    </div>
  );
};

export default GoodGame;
