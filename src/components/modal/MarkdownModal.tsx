"use client";

import React from "react";

import MDEditor from "@uiw/react-md-editor";

import useScrollStop from "@/hooks/useScrollStop";

import { porifoMD } from "@/util/project-readMe/porifo";
import useModalClose from "@/hooks/useModalClose";

type Props = {
  isModal: boolean;
  onClickIsModalToggleHandler: () => void;
};

const MarkdownModal = ({ isModal, onClickIsModalToggleHandler }: Props) => {
  const { modalRef } = useModalClose({
    isModal,
    onClose: onClickIsModalToggleHandler,
  });

  useScrollStop();

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-95">
      <div ref={modalRef}>
        <MDEditor.Markdown
          source={porifoMD}
          className="p-3 w-[1100px] h-[800px] overflow-scroll rounded-md"
        />
      </div>
    </div>
  );
};

export default MarkdownModal;
