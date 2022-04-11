import React from "react";

const MainContext = React.createContext({
  isMenuOpen: false,
  isAboutMeOpen: false,
  isAboutMeMinimized: false,
  toggleAboutMe: () => {},
  toggleMenu: () => {},
  minimizeAboutMe: () => {},
});

export default MainContext;
