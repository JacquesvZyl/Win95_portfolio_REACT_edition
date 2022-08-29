import React from "react";

const MainContext = React.createContext({
  isMenuOpen: false,
  isAboutMeOpen: true,
  isContactMeOpen: false,
  isSkillsOpen: false,
  isProjectsOpen: false,
  isVirusOpen: false,
  isAboutMeMinimized: false,
  isSkillsMinimized: false,
  isContactMeMinimized: false,
  toggleAboutMe: () => {},
  toggleSkills: () => {},
  toggleVirus: () => {},
  toggleProjects: () => {},
  toggleMenu: () => {},
  toggleContactMe: () => {},
  minimizeAboutMe: () => {},
  minimizeSkills: () => {},
  minimizeProjects: () => {},
  minimizeContactMe: () => {},
});

export default MainContext;
