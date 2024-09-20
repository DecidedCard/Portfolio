import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-3 w-full h-20 border-b border-solid border-black">
      <div className="flex justify-between items-center mx-auto min-w-[1440px] max-w-[1440px]">
        <h1 className="text-headingB/32px">portfolio</h1>
        <div className="flex gap-3 text-headingB/28px">
          <p>About Me</p>
          <hr className="mx-1 w-[1px] h-8 bg-black" />
          <p>Skill</p>
          <hr className="mx-1 w-[1px] h-8 bg-black" />
          <p>Archive</p>
          <hr className="mx-1 w-[1px] h-8 bg-black" />
          <p>Project</p>
          <hr className="mx-1 w-[1px] h-8 bg-black" />
          <p>History</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
