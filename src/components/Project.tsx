import Link from "next/link";
import React from "react";

const Project = () => {
  return (
    <div className="flex justify-center items-center p-20 bg-gray-600 text-white">
      <div className="flex flex-col gap-4 mx-auto w-[1440px]">
        <h2 className="text-headingB/28px text-center">Project</h2>
        <hr className="w-full h-[1px] border-0 bg-white" />
        <div className="flex flex-col justify-center gap-3 mx-auto p-4 w-[1000px] bg-white text-black rounded-xl">
          <p className="text-bodyB/20px">Porifo</p>
          <span className="text-bodyR/18px text-gray-400">
            2024.04 ~ 2024.05
          </span>
          <hr className="border-black" />
          <div className="flex gap-3">
            <div className="w-[400px] h-[500px] border border-solid border-black">
              이미지 들어갈곳
            </div>
            <div className="flex flex-col gap-5 text-bodyM/20px">
              <p>
                porifo라는 이름의 이력서를 템플릿 기반으로 작성할 수 있고,
                피드백을 받을 수 있는 프로젝트입니다.
              </p>

              <p>
                Next.js를 처음으로 제대로 사용하여 어떻게 사용해야 되는지 알게
                되는 계기가 되었습니다.
              </p>

              <p>
                supabase를 사용하여 로그인 및 sql DB를 접하게 되는 계기가
                되었습니다.
              </p>

              <Link
                href={"https://github.com/DecidedCard/Porifo"}
                target="blank"
                className="p-4 w-fit bg-black rounded-md text-white"
              >
                자세히 보기
              </Link>

              <hr className="border-black" />

              <div className="text-bodyR/18px">
                <li className="flex gap-5 p-1">
                  주요기능: 템플릿을 기반으로 이력서를 작성할 수 있고, 작성한
                  이력서를 공유할 수 있습니다.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
