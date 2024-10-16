import React, { useState } from "react";
import Image from "next/image";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import ImageModal from "../modal/ImageModal";
import useModalToggle from "@/hooks/useModalToggle";

import porifo1 from "@/../public/assets/projectImage/porifo1.png";
import porifo2 from "@/../public/assets/projectImage/porifo2.png";
import porifo3 from "@/../public/assets/projectImage/porifo3.png";

const Slider = () => {
  const { isModal, onClickIsModalToggleHandler } = useModalToggle();

  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [porifo1, porifo2, porifo3];

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col gap-20 my-auto items-center h-fit">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`프로젝트 ${index}`}
              onClick={onClickIsModalToggleHandler}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
      <div className="flex gap-10 text-bodyB/20px mt-4">
        <button onClick={prevImage}>
          <IoIosArrowBack className="w-8 h-8" />
        </button>
        <button onClick={nextImage}>
          <IoIosArrowForward className="w-8 h-8" />
        </button>
      </div>
      {isModal && (
        <ImageModal
          isModal={isModal}
          image={images[currentIndex]}
          onClickModalToggleHandler={onClickIsModalToggleHandler}
        />
      )}
    </div>
  );
};

export default Slider;
