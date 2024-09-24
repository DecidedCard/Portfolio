import React from "react";

const AboutMe = () => {
  return (
    <div className="py-20 h-[460px] bg-primary-200 text-text-200">
      <div className="flex flex-col items-center gap-10 mx-auto w-[1440px]">
        <h2 className="text-headingB/32px">About Me</h2>
        <div className="flex gap-24 text-bodyM/20px">
          <div className="flex justify-between gap-5 w-96">
            <div className="flex flex-col gap-5">
              <p>이름</p>
              <p>주소지</p>
              <p>이메일</p>
            </div>
            <div className="flex flex-col gap-5">
              <p>정해준</p>
              <p>충청북도 청주시</p>
              <p>heajun35@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-between gap-5 w-96">
            <div className="flex flex-col gap-5">
              <p>생년월일</p>
              <p>연락처</p>
            </div>
            <div className="flex flex-col gap-5">
              <p>02.12.07</p>
              <p>010-2433-3987</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
