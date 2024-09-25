import React from "react";
import Image, { StaticImageData } from "next/image";

import { IoClose } from "react-icons/io5";

type Props = {
  image: StaticImageData;
  onClickModalToggleHandler: () => void;
};

const ImageModal = ({ image, onClickModalToggleHandler }: Props) => {
  return (
    <div className="fixed top-0 right-0 z-20 flex justify-center items-center bg-black bg-opacity-80 w-screen h-screen">
      <IoClose
        onClick={onClickModalToggleHandler}
        className="absolute top-4 left-4 w-10 h-10 text-white cursor-pointer"
      />
      <Image src={image} alt="" className="w-1/2" />
    </div>
  );
};

export default ImageModal;
