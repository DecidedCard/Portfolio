import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Skill from "@/components/Skill";
import History from "@/components/History";
import Archive from "@/components/Archive";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Intro />
      <AboutMe />
      <Skill />
      <Archive />
      <Project />
      <History />
    </div>
  );
}
