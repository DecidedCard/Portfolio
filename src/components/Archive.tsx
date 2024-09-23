import Link from "next/link";

const Archive = () => {
  return (
    <div className="flex justify-center items-center py-20 bg-gray-500 text-white">
      <div className="flex flex-col gap-5 mx-auto w-[1440px]">
        <h2 className="text-headingB/32px text-center">ARCHIVING</h2>
        <hr className="w-full h-[1px] border-0 bg-white" />
        <div className="flex justify-center gap-10">
          <Link
            href={"https://github.com/DecidedCard"}
            target="blank"
            className="p-10 bg-white text-black rounded-xl"
          >
            <p className="text-headingB/28px">github</p>
            <p>소스코드 저장소 입니다.</p>
            <li>공부하면서 작성했던 소스코드</li>
            <li>참여했던 프로젝트 소스코드</li>
          </Link>
          <Link
            href={"https://velog.io/@decidedcard"}
            target="blank"
            className="p-10 bg-white text-black rounded-xl"
          >
            <p className="text-headingB/28px">blog</p>
            <p>공부했던 기록들을 정리한 블로그입니다.</p>
            <li>공부하였던 것들을 정리하는 곳</li>
            <li>개발하면서 느꼈던 것들을 정히한 곳</li>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Archive;
