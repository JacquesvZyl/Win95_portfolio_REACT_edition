import React from "react";

const MainContext = React.createContext({
  isMenuOpen: false,
  isAboutMeOpen: false,
  isContactMeOpen: false,
  isSkillsOpen: false,
  isProjectsOpen: false,
  isAboutMeMinimized: false,
  isSkillsMinimized: false,
  isContactMeMinimized: false,
  toggleAboutMe: () => {},
  toggleSkills: () => {},
  toggleProjects: () => {},
  toggleMenu: () => {},
  toggleContactMe: () => {},
  minimizeAboutMe: () => {},
  minimizeSkills: () => {},
  minimizeProjects: () => {},
  minimizeContactMe: () => {},
});

export default MainContext;
