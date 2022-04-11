import React, { useReducer } from "react";
import MainContext from "./Context";

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_WINDOW": {
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    }
    case "TOGGLE_ABOUT_ME": {
      return {
        ...state,
        isAboutMeOpen: !state.isAboutMeOpen,
      };
    }
    case "TOGGLE_ABOUT_ME_MINIMIZED": {
      return {
        ...state,
        isAboutMeMinimized: !state.isAboutMeMinimized,
      };
    }

    default:
      return initialState;
  }
}

const initialState = {
  isMenuOpen: false,
  isAboutMeOpen: false,
  isAboutMeMinimized: true,
};
function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function showMenuHandler() {
    dispatch({ type: "TOGGLE_WINDOW" });
  }
  function showAboutMeHandler() {
    dispatch({ type: "TOGGLE_ABOUT_ME" });
  }
  function minimizeAboutMeHandler() {
    dispatch({ type: "TOGGLE_ABOUT_ME_MINIMIZED" });
  }

  const contextData = {
    isMenuOpen: state.isMenuOpen,
    isAboutMeOpen: state.isAboutMeOpen,
    isAboutMeMinimized: state.isAboutMeMinimized,
    toggleMenu: showMenuHandler,
    toggleAboutMe: showAboutMeHandler,
    minimizeAboutMe: minimizeAboutMeHandler,
  };

  return (
    <MainContext.Provider value={contextData}>
      {props.children}
    </MainContext.Provider>
  );
}

export default ContextProvider;
