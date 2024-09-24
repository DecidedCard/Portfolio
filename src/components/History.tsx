import React from "react";

const History = () => {
  return (
    <div className="py-20 h-[460px] bg-primary-300 text-black">
      <div className="flex flex-col gap-3 mx-auto w-[1440px] h-full">
        <h2 className="text-headingB/32px text-center">History</h2>
        <hr className="border-black" />
        <div className="flex justify-center gap-5 text-bodyM/20px">
          <hr className="w-[1px] h-full border-0 bg-black" />
          <div className="w-fit">
            <p className="text-headingB/28px">실버링</p>
            <p className="text-gray-500">인턴/2024.08 ~ 2024.08</p>
            <p>
              크레딧가드라는 이름의 부동산 관리 페이지의 mvp를 제작하였습니다.
            </p>
            <li>임대인/임차인 구분</li>
            <li>계약서 CRUD 작성</li>
            <li>월세관련 승인 요청 및 승인 확인 작성</li>
            <li>전반적인 퍼블리싱</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
