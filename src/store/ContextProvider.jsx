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
    case "TOGGLE_PROJECTS": {
      return {
        ...state,
        isProjectsOpen: !state.isProjectsOpen,
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
    case "TOGGLE_PROJECTS_MINIMIZED": {
      return {
        ...state,
        isProjectsMinimized: !state.isProjectsMinimized,
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
  isProjectsOpen: false,
  isAboutMeMinimized: true,
  isSkillsMinimized: true,
  isContactMeMinimized: true,
  isProjectsMinimized: true,
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
  function showProjectsHandler() {
    dispatch({ type: "TOGGLE_PROJECTS" });
  }
  function minimizeSkillsHandler() {
    dispatch({ type: "TOGGLE_SKILLS_MINIMIZED" });
  }
  function minimizeProjectsHandler() {
    dispatch({ type: "TOGGLE_PROJECTS_MINIMIZED" });
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
    isProjectsOpen: state.isProjectsOpen,
    isContactMeOpen: state.isContactMeOpen,
    isSkillsMinimized: state.isSkillsMinimized,
    isProjectsMinimized: state.isProjectsMinimized,
    isAboutMeMinimized: state.isAboutMeMinimized,
    isContactMeMinimized: state.isContactMeMinimized,
    toggleMenu: showMenuHandler,
    toggleAboutMe: showAboutMeHandler,
    toggleSkills: showSkillsHandler,
    toggleProjects: showProjectsHandler,
    toggleContactMe: showContactMeHandler,
    minimizeSkills: minimizeSkillsHandler,
    minimizeAboutMe: minimizeAboutMeHandler,
    minimizeContactMe: minimizeContactMeHandler,
    minimizeProjects: minimizeProjectsHandler,
  };

  return (
    <MainContext.Provider value={contextData}>
      {props.children}
    </MainContext.Provider>
  );
}

export default ContextProvider;
