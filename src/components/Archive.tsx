import Image from "next/image";
import Link from "next/link";

import github from "@/../public/assets/skillImage/github.svg";
import velog from "@/../public/assets/skillImage/velog.jpg";

const Archive = () => {
  return (
    <div className="py-20 bg-primary-100 text-text-200">
      <div className="flex flex-col gap-5 mx-auto w-[1440px]">
        <h2 className="text-headingB/32px text-center">ARCHIVING</h2>
        <hr className="w-full border-text-200" />
        <div className="flex justify-center gap-10">
          <Link
            href={"https://github.com/DecidedCard"}
            target="blank"
            className="flex flex-col gap-3 p-10 w-96 bg-accent-200 text-black rounded-xl text-bodyR/18px duration-300 hover:scale-105"
          >
            <p className="flex items-center gap-5 text-headingB/28px">
              <Image src={github} alt="github" className="w-10" />
              Github
            </p>
            <p className="text-bodyM/20px">소스코드 저장소 입니다.</p>
            <div className="-indent-6 ml-6">
              <li>공부하면서 작성했던 소스코드</li>
              <li>참여했던 프로젝트 소스코드</li>
            </div>
          </Link>
          <Link
            href={"https://velog.io/@decidedcard"}
            target="blank"
            className="flex flex-col gap-3 p-10 w-96 bg-accent-200 text-black rounded-xl text-bodyR/18px duration-300 hover:scale-105"
          >
            <p className="flex items-center gap-5 text-headingB/28px">
              <Image src={velog} alt="velog" className="w-10" />
              Blog
            </p>
            <p className="text-bodyM/20px">
              공부했던 기록들을 정리한 블로그입니다.
            </p>
            <div className="-indent-6 ml-6">
              <li>공부하였던 것들을 정리하는 곳</li>
              <li>개발하면서 느꼈던 것들을 정히한 곳</li>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Archive;
