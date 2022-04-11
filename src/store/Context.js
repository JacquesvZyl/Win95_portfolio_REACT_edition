import React from "react";

const MainContext = React.createContext({
  isMenuOpen: false,
  isAboutMeOpen: false,
  isAboutMeMinimized: false,
  isSkillsOpen: false,
  isSkillsMinimized: false,
  toggleAboutMe: () => {},
  toggleSkills: () => {},
  toggleMenu: () => {},
  minimizeAboutMe: () => {},
  minimizeSkills: () => {},
});

export default MainContext;
