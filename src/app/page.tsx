"use client";

import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Skill from "@/components/Skill";
import History from "@/components/History";
import Archive from "@/components/Archive";
import Project from "@/components/project/Project";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import useHome from "@/hooks/useHome";

export default function Home() {
  const {
    introRef,
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
        onScrollToIntro={() => handleScrollTo(introRef)}
        onScrollToAboutMe={() => handleScrollTo(aboutMeRef)}
        onScrollToSkill={() => handleScrollTo(skillRef)}
        onScrollToArchive={() => handleScrollTo(archiveRef)}
        onScrollToProject={() => handleScrollTo(projectRef)}
        onScrollToHistory={() => handleScrollTo(historyRef)}
      />
      <div ref={introRef}>
        <Intro />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={skillRef}>
        <Skill />
      </div>
      <div ref={archiveRef}>
        <Archive />
      </div>
      <div ref={historyRef}>
        <History />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <Footer />
    </div>
  );
}
