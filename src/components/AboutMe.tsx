import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-16 h-[460px] bg-gray-500 text-white">
      <h2 className="text-headingB/32px">About Me</h2>
      <div className="flex gap-24 text-bodyM/20px">
        <div className="flex flex-col gap-5">
          <p>이름: 정해준</p>
          <p>주소지: 충청북도 청주시</p>
          <p>이메일: heajun35@gmail.com</p>
        </div>
        <div className="flex flex-col gap-5">
          <p>생년월일: 02.12.07</p>
          <p>연락처: +82 10-2433-3987</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
