import React from "react";
import Image, { StaticImageData } from "next/image";

import { IoClose } from "react-icons/io5";
import useScrollStop from "@/hooks/useScrollStop";
import useModalClose from "@/hooks/useModalClose";

type Props = {
  isModal: boolean;
  image: StaticImageData;
  onClickModalToggleHandler: () => void;
};

const ImageModal = ({ isModal, image, onClickModalToggleHandler }: Props) => {
  const { modalRef } = useModalClose({
    isModal,
    onClose: onClickModalToggleHandler,
  });

  useScrollStop();

  return (
    <div className="fixed top-0 right-0 z-20 flex justify-center items-center bg-black bg-opacity-80 w-screen h-screen">
      <IoClose
        onClick={onClickModalToggleHandler}
        className="absolute top-4 left-4 w-10 h-10 text-white cursor-pointer"
      />
      <div ref={modalRef} className="w-2/3">
        <Image src={image} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default ImageModal;
