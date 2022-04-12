import React from "react";

const MainContext = React.createContext({
  isMenuOpen: false,
  isAboutMeOpen: false,
  isContactMeOpen: false,
  isSkillsOpen: false,
  isAboutMeMinimized: false,
  isSkillsMinimized: false,
  isContactMeMinimized: false,
  toggleAboutMe: () => {},
  toggleSkills: () => {},
  toggleMenu: () => {},
  toggleContactMe: () => {},
  minimizeAboutMe: () => {},
  minimizeSkills: () => {},
  minimizeContactMe: () => {},
});

export default MainContext;
