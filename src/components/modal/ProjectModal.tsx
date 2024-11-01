"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import MDEditor from "@uiw/react-md-editor";
import { IoClose } from "react-icons/io5";

import useScrollStop from "@/hooks/useScrollStop";
import useModalClose from "@/hooks/useModalClose";

import type { Project } from "@/types";

type Props = {
  project: Project;
  isModal: boolean;
  onClickIsModalToggleHandler: () => void;
};

const ProjectModal = ({
  project,
  isModal,
  onClickIsModalToggleHandler,
}: Props) => {
  const { modalRef } = useModalClose({
    isModal,
    onClose: onClickIsModalToggleHandler,
  });

  useScrollStop();

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-95">
      <IoClose
        onClick={onClickIsModalToggleHandler}
        className="absolute top-4 left-4 w-10 h-10 cursor-pointer text-accent-200"
      />
      <div
        ref={modalRef}
        className="flex flex-col gap-4 p-4 w-[1280px] h-[900px] bg-white rounded-lg overflow-scroll"
      >
        <div>
          <h3 className="text-title/24px text-center">{project.name}</h3>
          <p className="text-center text-gray-400">{project.date}</p>
        </div>
        <hr className="w-full border-black" />
        <div className="p-3">
          <p className="text-title/20px">기능</p>
          <div className="px-4">
            {project.function.map((item) => (
              <li key={item.comment}>{item.comment}</li>
            ))}
          </div>
        </div>
        <div className="p-3">
          <p className="text-title/20px">트러블 슈팅</p>
          <div className="flex flex-col gap-4 px-4">
            {project.trouble.map((item) => (
              <ol key={item.trouble.comment} className="flex flex-col gap-3">
                <li className="flex flex-col gap-1">
                  <div>
                    <label className="text-title/16px">문제: </label>
                    {item.trouble.comment}
                  </div>
                  {item.trouble.markDown && (
                    <MDEditor.Markdown
                      source={item.trouble.markDown}
                      className="p-3 rounded-lg"
                    />
                  )}
                  {item.trouble.image && (
                    <Image
                      src={item.trouble.image}
                      alt=""
                      width={400}
                      height={400}
                      className="mx-auto w-3/5 h-auto"
                    />
                  )}
                </li>
                <li className="flex flex-col gap-1">
                  <div>
                    <label className="text-title/16px">원인: </label>
                    {item.cause.comment}
                  </div>
                  {item.cause.markDown && (
                    <MDEditor.Markdown
                      source={item.cause.markDown}
                      className="p-3 rounded-lg"
                    />
                  )}
                  {item.cause.image && (
                    <Image
                      src={item.cause.image}
                      alt=""
                      width={400}
                      height={400}
                      className="mx-auto w-3/5 h-auto"
                    />
                  )}
                </li>
                <li className="flex flex-col gap-1">
                  <div>
                    <label className="text-title/16px">해결: </label>
                    {item.solve.comment}
                  </div>
                  {item.solve.markDown && (
                    <MDEditor.Markdown
                      source={item.solve.markDown}
                      className="p-3 rounded-lg"
                    />
                  )}
                  {item.solve.image && (
                    <Image
                      src={item.solve.image}
                      alt=""
                      width={400}
                      height={400}
                      className="mx-auto w-3/5 h-auto"
                    />
                  )}
                </li>
              </ol>
            ))}
          </div>
        </div>
        <div className="p-3">
          <p className="text-title/20px">트러블 슈팅</p>
          <div className="flex flex-col gap-1 px-4">
            <li>
              <label className="text-title/16px">Github link: </label>
              <Link href={project.link.github} target="blank">
                {project.link.github}
              </Link>
            </li>
            <li>
              <label className="text-title/16px">Deploy link: </label>
              <Link href={project.link.deploy} target="blank">
                {project.link.deploy}
              </Link>
            </li>
          </div>
        </div>
        <div className="p-3">
          <p className="text-title/20px">README</p>
          <MDEditor.Markdown
            source={project.markDown}
            className="p-3 w-[1100px] h-[800px] overflow-scroll rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
