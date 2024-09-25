import { MutableRefObject, useRef } from "react";

const useHome = () => {
  const introRef = useRef<HTMLDivElement | null>(null);
  const aboutMeRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const archiveRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const historyRef = useRef<HTMLDivElement | null>(null);

  const handleScrollTo = (ref: MutableRefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return {
    introRef,
    aboutMeRef,
    skillRef,
    archiveRef,
    projectRef,
    historyRef,
    handleScrollTo,
  };
};

export default useHome;
