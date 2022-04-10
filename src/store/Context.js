import React from "react";

const MainContext = React.createContext({
  isMenuOpen: false,
  toggleMenu: () => {},
});

export default MainContext;
