import React from "react";

type Props = {
  onScrollToAboutMe: () => void;
  onScrollToSkill: () => void;
  onScrollToArchive: () => void;
  onScrollToProject: () => void;
  onScrollToHistory: () => void;
};

const Header = ({
  onScrollToAboutMe,
  onScrollToArchive,
  onScrollToHistory,
  onScrollToProject,
  onScrollToSkill,
}: Props) => {
  return (
    <header className="sticky top-0 flex justify-between p-3 w-full h-20 border-b border-solid border-accent-200">
      <div className="flex justify-between items-center mx-auto min-w-[1440px] max-w-[1440px] text-text-200">
        <h1 className="text-headingB/32px">portfolio</h1>
        <nav className="flex gap-3 text-headingB/28px">
          <ol className="cursor-pointer" onClick={onScrollToAboutMe}>
            About Me
          </ol>
          <hr className="mx-1 w-[1px] h-8 border-0 bg-black" />
          <ol className="cursor-pointer" onClick={onScrollToSkill}>
            Skill
          </ol>
          <hr className="mx-1 w-[1px] h-8 border-0 bg-black" />
          <ol className="cursor-pointer" onClick={onScrollToArchive}>
            Archive
          </ol>
          <hr className="mx-1 w-[1px] h-8 border-0 bg-black" />
          <ol className="cursor-pointer" onClick={onScrollToProject}>
            Project
          </ol>
          <hr className="mx-1 w-[1px] h-8 border-0 bg-black" />
          <ol className="cursor-pointer" onClick={onScrollToHistory}>
            History
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
