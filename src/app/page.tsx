"use client";

import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Skill from "@/components/Skill";
import History from "@/components/History";
import Archive from "@/components/Archive";
import Project from "@/components/Project";
import Header from "@/components/Header";

import useHome from "@/hooks/useHome";

export default function Home() {
  const {
    aboutMeRef,
    archiveRef,
    handleScrollTo,
    historyRef,
    projectRef,
    skillRef,
  } = useHome();
  return (
    <div className="bg-bg-100">
      <Header
        onScrollToAboutMe={() => handleScrollTo(aboutMeRef)}
        onScrollToSkill={() => handleScrollTo(skillRef)}
        onScrollToArchive={() => handleScrollTo(archiveRef)}
        onScrollToProject={() => handleScrollTo(projectRef)}
        onScrollToHistory={() => handleScrollTo(historyRef)}
      />
      <Intro />
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={archiveRef}>
        <Archive />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={historyRef}>
        <History />
      </div>
    </div>
  );
}
