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
    case "TOGGLE_SKILLS": {
      return {
        ...state,
        isSkillsOpen: !state.isSkillsOpen,
      };
    }
    case "TOGGLE_CONTACT_ME": {
      return {
        ...state,
        isContactMeOpen: !state.isContactMeOpen,
      };
    }
    case "TOGGLE_ABOUT_ME_MINIMIZED": {
      return {
        ...state,
        isAboutMeMinimized: !state.isAboutMeMinimized,
      };
    }
    case "TOGGLE_SKILLS_MINIMIZED": {
      return {
        ...state,
        isSkillsMinimized: !state.isSkillsMinimized,
      };
    }
    case "TOGGLE_CONTACT_ME_MINIMIZED": {
      return {
        ...state,
        isContactMeMinimized: !state.isContactMeMinimized,
      };
    }

    default:
      return initialState;
  }
}

const initialState = {
  isMenuOpen: false,
  isAboutMeOpen: false,
  isSkillsOpen: false,
  isContactMeOpen: false,
  isAboutMeMinimized: true,
  isSkillsMinimized: true,
  isContactMeMinimized: true,
};
function ContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function showMenuHandler() {
    dispatch({ type: "TOGGLE_WINDOW" });
  }
  function showAboutMeHandler() {
    dispatch({ type: "TOGGLE_ABOUT_ME" });
  }
  function showContactMeHandler() {
    dispatch({ type: "TOGGLE_CONTACT_ME" });
  }
  function showSkillsHandler() {
    dispatch({ type: "TOGGLE_SKILLS" });
  }
  function minimizeSkillsHandler() {
    dispatch({ type: "TOGGLE_SKILLS_MINIMIZED" });
  }
  function minimizeAboutMeHandler() {
    dispatch({ type: "TOGGLE_ABOUT_ME_MINIMIZED" });
  }
  function minimizeContactMeHandler() {
    dispatch({ type: "TOGGLE_CONTACT_ME_MINIMIZED" });
  }

  const contextData = {
    isMenuOpen: state.isMenuOpen,
    isAboutMeOpen: state.isAboutMeOpen,
    isSkillsOpen: state.isSkillsOpen,
    isContactMeOpen: state.isContactMeOpen,
    isSkillsMinimized: state.isSkillsMinimized,
    isAboutMeMinimized: state.isAboutMeMinimized,
    isContactMeMinimized: state.isContactMeMinimized,
    toggleMenu: showMenuHandler,
    toggleAboutMe: showAboutMeHandler,
    toggleSkills: showSkillsHandler,
    toggleContactMe: showContactMeHandler,
    minimizeSkills: minimizeSkillsHandler,
    minimizeAboutMe: minimizeAboutMeHandler,
    minimizeContactMe: minimizeContactMeHandler,
  };

  return (
    <MainContext.Provider value={contextData}>
      {props.children}
    </MainContext.Provider>
  );
}

export default ContextProvider;
