import React from "react";

const MainContext = React.createContext({
  isMenuOpen: false,
  isAboutMeOpen: false,
  toggleAboutMe: () => {},
  toggleMenu: () => {},
});

export default MainContext;
