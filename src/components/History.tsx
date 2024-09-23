import React from "react";

const History = () => {
  return (
    <div className="flex justify-center items-center h-[460px] bg-gray-600 text-white">
      <div className="flex flex-col gap-3 p-4 w-[1440px] h-full">
        <h2 className="text-headingB/32px text-center">History</h2>
        <hr />
        <div className="flex justify-center gap-5">
          <hr className="w-[1px] h-full border-0 bg-white" />
          <div className="w-fit">
            <p>실버링</p>
            <p className="text-gray-400">인턴/2024.08 ~ 2024.08</p>
            <p>
              크레딧가드라는 이름의 부동산 관리 웹페이지의 mvp를 제작하였습니다.
            </p>

            <p>프론트 저 한명과 백엔드 1명 디자이너 1명해서 만들었습니다.</p>

            <li>크레딧가드 퍼블리싱</li>
            <li>백엔드 api 연결</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
