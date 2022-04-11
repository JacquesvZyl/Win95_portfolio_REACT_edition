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

    default:
      return initialState;
  }
}

const initialState = {
  isMenuOpen: false,
  isAboutMeOpen: false,
};
function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function showMenuHandler() {
    dispatch({ type: "TOGGLE_WINDOW" });
  }
  function showAboutMeHandler() {
    dispatch({ type: "TOGGLE_ABOUT_ME" });
  }

  const contextData = {
    isMenuOpen: state.isMenuOpen,
    isAboutMeOpen: state.isAboutMeOpen,
    toggleMenu: showMenuHandler,
    toggleAboutMe: showAboutMeHandler,
  };

  return (
    <MainContext.Provider value={contextData}>
      {props.children}
    </MainContext.Provider>
  );
}

export default ContextProvider;
