import React from "react";

type Props = {
  onScrollToIntro: () => void;
  onScrollToAboutMe: () => void;
  onScrollToSkill: () => void;
  onScrollToArchive: () => void;
  onScrollToProject: () => void;
  onScrollToHistory: () => void;
};

const Header = ({
  onScrollToIntro,
  onScrollToAboutMe,
  onScrollToArchive,
  onScrollToHistory,
  onScrollToProject,
  onScrollToSkill,
}: Props) => {
  return (
    <header className="sticky top-0 z-10 flex justify-between p-3 w-full h-20 bg-bg-300">
      <div className="flex justify-between items-center mx-auto min-w-[1440px] max-w-[1440px] text-text-200">
        <h1
          onClick={onScrollToIntro}
          className="text-headingB/32px cursor-pointer"
        >
          portfolio
        </h1>
        <nav className="flex gap-3 text-headingB/28px">
          <ol onClick={onScrollToProject} className="cursor-pointer">
            PROJECT
          </ol>
          <hr className="mx-1 w-[1px] h-8 border-0 bg-text-200" />
          <ol onClick={onScrollToSkill} className="cursor-pointer">
            SKILL
          </ol>
          <hr className="mx-1 w-[1px] h-8 border-0 bg-text-200" />
          <ol onClick={onScrollToArchive} className="cursor-pointer">
            ARCHIVING
          </ol>
          <hr className="mx-1 w-[1px] h-8 border-0 bg-text-200" />
          <ol onClick={onScrollToHistory} className="cursor-pointer">
            HISTORY
          </ol>
          <hr className="mx-1 w-[1px] h-8 border-0 bg-text-200" />
          <ol onClick={onScrollToAboutMe} className="cursor-pointer">
            ABOUT ME
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
