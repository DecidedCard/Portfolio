import { Project } from "@/types";

import porifo1 from "@/../public/assets/projectImage/porifo1.png";
import porifo2 from "@/../public/assets/projectImage/porifo2.png";
import porifo3 from "@/../public/assets/projectImage/porifo3.png";
import resend from "@/../public/assets/projectImage/resend setting.png";
import { porifoMD } from "./project-readMe/porifo";

import GGImage1 from "@/../public/assets/projectImage/GG_main_page.png";
import GGImage2 from "@/../public/assets/projectImage/GG_maple_main_page.png";
import GGImage3 from "@/../public/assets/projectImage/GG_maple_result_page.png";
import GGImage4 from "@/../public/assets/projectImage/GG_maple_result_page2.png";
import GGImage5 from "@/../public/assets/projectImage/GG_maple_result_page3.png";
import { GG_MD } from "./project-readMe/GG";

const ProjectArr: Project[] = [
  {
    name: "Porifo",
    date: "2024.04 ~ 2024.05",
    images: [porifo1, porifo2, porifo3],
    introduce:
      "porifo는 템플릿 기반으로 이력서를 작성 및 수정할 수 있고, 공유하여 유저들끼리 피드백을 받을 수 있는 사이트 입니다.",
    skill:
      "Next.js, TypeScript, tailwindcss, zustand, Tanstack Query, supabase",
    team: "프론트엔드: 4명, 디자인: 1명",
    function: [
      { comment: "Supabase를 사용하여 Oauth 및 이메일 로그인/회원가입 구현" },
      { comment: "이력서 작성 및 수정할 수 있는 작성 페이지 구현" },
      {
        comment:
          "이력서 공유시 피드백을 받고 공유한 것을 확인할 수 있는 커뮤니티 페이지 구현",
      },
    ],
    trouble: [
      {
        trouble: {
          comment:
            "resend라는 메일을 보내는 서비스를 이용하는 중에 도메인 인증이 되어야 서비스를 사용할 수 있었는데 도메인 인증이 되지 않는 문제가 발생하였습니다.",
        },
        cause: {
          comment:
            "도메인 설정을 해줘야 하는 데 처음 이용하는 서비스라 정확히 어떤 걸 해줘야 하는지 파악하지 못해 발생한 문제였습니다.",
        },
        solve: {
          comment:
            "resend에서 알려주는 세팅을 해서 인증을 할 수 있게 되었습니다.",
          image: resend,
        },
      },
      {
        trouble: {
          comment:
            "작성한 데이터를 가져와서 수정하는 과정에서 데이터를 가져오고 데이터가 있으면 그걸로 값을 세팅하는 과정에서 무한 렌더링이 걸리는 오류가 발생했습니다.",
        },
        cause: {
          comment:
            "유저 정보를 기반으로 데이터를 가져와서 세팅하는 과정에서 비로그인 유저와 조건이 충돌이 나는 부분이 있어서 생기는 오류였습니다.",
        },
        solve: {
          comment:
            "유저 정보를 확인하는 과정을 비로그인 유저와 조건을 구분하여 데이터를 가져올 수 있게 조건을 수정하여 해결하였습니다.",
        },
      },
    ],
    link: {
      deploy: "https://www.porifo.com/",
      github: "https://github.com/DecidedCard/Porifo",
    },
    markDown: porifoMD,
  },

  {
    name: "GG(good-game)",
    date: "2024.10 ~ 2024.10",
    images: [GGImage1, GGImage2, GGImage3, GGImage4, GGImage5],
    introduce:
      "GG는 게임 캐릭터의 랭킹을 확인할 수 있고 캐릭터를 검색하여 캐릭터의 상세정보를 확인할 수 있는 페이지입니다.",
    skill: "Next.js, TypeScript, tailwindcss, zustand, Tanstack Query",
    team: "개인 프로젝트",
    function: [
      {
        comment:
          "넥슨 오픈 API를 이용하여 메이플스토리라는 게임의 데이터를 가져와서 구현",
      },
      { comment: "랭킹 정보를 가져와서 랭킹을 확인할 수 있는 페이지 구현" },
      {
        comment:
          "캐릭터를 검색하여 캐릭터의 스탯 및 아이템 등을 확인할 수 있는 페이지 구현",
      },
      { comment: "모바일 환경을 고려하여 반응형 디자인 구현" },
    ],
    trouble: [
      {
        trouble: {
          comment:
            "query string을 사용하여 URL에 저장된 데이터를 가져오는 과정에서 useSearchParams를 사용하였는데 build 중에 오류가 발생했습니다.",
          markDown: `
## 사용했던 방법

\`\`\`tsx
import { useSearchParams } from "next/navigation";

const Home = () => {
  // 사용하는 컴포넌트 에서 바로 사용.
  const params = useSearchParams();

  // 아래의 로직 작성

  // 위의 처럼 사용했을 때 build 에러가 발생.
}
\`\`\`
`,
        },
        cause: {
          comment:
            "next에서 useSearchParams를 사용하면 사용한 부분을 Suspense로 감싸서 사용해야 된다고 공식 문서에 나와 있다는 것을 알게 되었습니다.",
          markDown: `
## 공식문서
[공식문서 링크](https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout)
            `,
        },
        solve: {
          comment:
            "기존에 사용하던 부분을 컴포넌트로 다시 작성하고 그 컴포넌트를 Suspense로 감싸서 문제를 해결하였습니다.",
          markDown: `
## 해결한 방법
\`\`\`tsx
import { useSearchParams } from "next/navigation";

const CharacterInfo = () => {
const params = useSearchParams()

// 로직 및 tsx
}

// page.tsx
import React, { Suspense } from "react";

import CharacterInfo from "@/components/maple/result/ChatacterInfo";

const page = () => {
  return (
    <Suspense>
      <CharacterInfo />
    </Suspense>
  );
};

export default page;
\`\`\`
            `,
        },
      },
      {
        trouble: {
          comment:
            "react-hook-form을 사용하여 공통 컴포넌트를 사용하려고 했는데 type을 any로 설정한게 typescript를 사용하는 목적이랑 어긋나는 거 같아 any를 변경하려던 중 react-hook-form에 있는 FieldValues를 사용하려고 했지만 작성한 커스텀 타입이 적용되지 않아 오류가 발생하였습니다.",
          markDown: `
## 사용했던 방법

\`\`\`tsx
// type

import type { UseFormRegister } from "react-hook-form";

export interface InputProps{
  size?: "big" | "small";
  type?: "text" | "password";
  placeholder?: string;
  register: UseFormRegister<any>; // 이 부분에서 type any라는 에러메시지가 떴습니다. 이걸 수정할려고 했습니다.
  value: string;
}

// Input.tsx
import React from "react";

import type { InputProps } from "@/types/commonProps";
import type { FieldValues, Path } from "react-hook-form";

const Input = <T extends FieldValues>({
  size,
  type,
  placeholder,
  register,
  value,
}: InputProps<T>) => {
  const height =
    (size === "big" && "h-14 text-body/22px") ||
    (size === "small" && "h-10 text-body/18px") ||
    "h-10 text-body/18px";

  const inputType =
    (type === "text" && "text") ||
    (type === "password" && "password") ||
    "text";

  return (
    <input
      type={inputType}
      placeholder={placeholder || ""}
      {...register(value}
      autoComplete="off"
    />
  );
};

export default Input;
\`\`\`

            `,
        },
        cause: {
          comment:
            "UseFormRegister의 제네릭으로 FieldValues를 사용하여 type 문제는 해결하는 듯 싶었지만 커스텀 타입으로 지정된 register를 props로 집어넣게 되면 FieldValues와 type 불일치가 일어나 오류가 발생하였습니다.",
          markDown: `
## 변경했지만 새로 발생한 문제
\`\`\`tsx
import type { UseFormRegister, FieldValues } from "react-hook-form";

export interface InputProps {
  size?: "big" | "small";
  type?: "text" | "password";
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  value: string;
}

\`\`\`

타입을 저렇게 변경하였었습니다.
            `,
        },
        solve: {
          comment:
            "제네릭을 사용하여 커스텀 타입을 적용할 수 있도록 변경하여 문제를 해결하였습니다.",
          markDown: `
## 해결한 방법
\`\`\`tsx
// type을 제네릭을 활용하여 변경
import type { UseFormRegister, FieldValues } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
  size?: "big" | "small";
  type?: "text" | "password";
  placeholder?: string;
  register: UseFormRegister<T>;
  value: string;
}

// Input.tsx
import React from "react";

import type { InputProps } from "@/types/commonProps";
import type { FieldValues, Path } from "react-hook-form";

const Input = <T extends FieldValues>({
  size,
  type,
  placeholder,
  register,
  value,
}: InputProps<T>) => {
  const height =
    (size === "big" && "h-14 text-body/22px") ||
    (size === "small" && "h-10 text-body/18px") ||
    "h-10 text-body/18px";

  const inputType =
    (type === "text" && "text") ||
    (type === "password" && "password") ||
    "text";

  return (
    <input
      type={inputType}
      placeholder={placeholder || ""}
      {...register(value as Path<T>)}
      autoComplete="off"
    />
  );
};

export default Input;


\`\`\`
            `,
        },
      },
    ],
    link: {
      deploy: "https://gg-ashen-five.vercel.app/",
      github: "https://github.com/DecidedCard/GG",
    },
    markDown: GG_MD,
  },
];

export default ProjectArr;
