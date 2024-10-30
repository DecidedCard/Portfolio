import React from "react";
import Link from "next/link";

import Slider from "./Slider";
import MarkdownModal from "../modal/MarkdownModal";

import useModalToggle from "@/hooks/useModalToggle";

import type { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  const { isModal, onClickIsModalToggleHandler } = useModalToggle();

  return (
    <div className="flex flex-col justify-center gap-3 mx-auto p-4 w-[1000px] bg-accent-200 text-black rounded-xl">
      <p className="text-body/26px text-center">{project.name}</p>
      <span className="text-body/18px text-gray-400 text-center">
        {project.date}
      </span>
      <hr className="border-black" />
      <div className="relative flex gap-5">
        <div className="flex my-auto w-[400px] h-[500px]">
          <Slider images={project.images} />
        </div>
        <hr className="my-auto w-[1px] h-[800px] border-0 bg-black" />
        <div className="flex flex-col gap-3 text-body/18px w-full">
          <ol className="flex justify-between w-full">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              프로젝트 소개:
            </span>
            <span className="w-[500px]">{project.introduce}</span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              기술 스택:
            </span>
            <span className="w-[500px]">{project.skill}</span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              팀 구성:
            </span>
            <span className="w-[500px]">{project.team}</span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              기능 구현:
            </span>
            <span className="flex flex-col gap-3 w-[500px]">
              {project.function.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              트러블 슈팅:
            </span>
            <span className="flex flex-col gap-3 w-[500px]">
              {project.trouble.map((item) => (
                <span key={item.cause} className="flex flex-col gap-1">
                  <span>
                    <span className="text-title/16px">문제</span>:{" "}
                    {item.trouble}
                  </span>
                  <span>
                    <span className="text-title/16px">문제 원인</span>:{" "}
                    {item.cause}
                  </span>
                  <span>
                    <span className="text-title/16px">해결 방법</span>:
                    {item.solve}
                  </span>
                </span>
              ))}
            </span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              배포 링크:
            </span>
            <span className="w-[500px]">
              <Link
                href={project.link.deploy}
                target="blank"
                className="cursor-pointer underline"
              >
                {project.link.deploy}
              </Link>
            </span>
          </ol>
          <ol className="flex justify-between">
            <span className="w-[120px] text-title/20px text-end whitespace-nowrap">
              Github 링크:
            </span>
            <span className="w-[500px]">
              <Link
                href={project.link.github}
                target="blank"
                className="cursor-pointer underline"
              >
                {project.link.github}
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
          markdown={project.markDown}
          isModal={isModal}
          onClickIsModalToggleHandler={onClickIsModalToggleHandler}
        />
      )}
    </div>
  );
};

export default ProjectCard;
