import React from "react";
import "./styles/App.css";
import HeroSection from "./components/hero/index";
import Navbar from "./components/navbar";
import WorksSection from "./components/works";
import SkillsSection from "./components/skills";
import ProjectsSection from "./components/projects";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorksSection />
      <SkillsSection />
      <ProjectsSection />
    </>
  );
}

export default App;
