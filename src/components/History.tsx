import React from "react";

const History = () => {
  return (
    <div className="py-20 h-fit bg-primary-200 text-text-200">
      <div className="flex flex-col gap-10 mx-auto w-[1440px] h-full">
        <h2 className="text-title/40px text-center">HISTORY</h2>
        <hr className="border-text-200" />
        <div className="flex justify-center gap-10">
          <hr className="w-[1px] h-[480px] border-0 bg-text-200" />
          <div className="flex flex-col gap-5">
            <div className="flex justify-center gap-5 w-[550px] text-body/18px">
              <div className="flex flex-col gap-4 w-fit">
                <p className="text-title/24px">
                  스파르타코딩클럼/내일배움캠프 React-4기
                </p>
                <p className="text-gray-400">2024.01 ~ 2024.05</p>
                <p>
                  약 4개월간 javascript와 React를 배우고 5개정도의 팀프로젝트를
                  진행하는 과정에서 팀원들과의 소통의 중요성을 알게 되었습니다.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-5 w-[550px] text-body/18px">
              <div className="flex flex-col gap-4 w-fit">
                <p className="text-title/24pxx">실버링</p>
                <p className="text-gray-400">인턴/2024.08 ~ 2024.08</p>
                <p className="flex flex-col">
                  <span>
                    크레딧가드라는 이름의 부동산 관리 모바일 웹 페이지의 mvp를
                    제작하였습니다.
                  </span>
                  <span>
                    react-hook-form을 사용하여 계약서 작성 및 로그인/회원가입의
                    입력 폼을 작성하였습니다.
                  </span>
                </p>
                <li>로그인/회원가입 및 임대인/임차인 구분 구현</li>
                <li>계약서 CRUD 구현</li>
                <li>월세관련 승인 요청 및 승인 확인 구현</li>
                <li>전반적인 퍼블리싱</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
