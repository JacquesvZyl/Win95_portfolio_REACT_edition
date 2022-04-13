import whoAmI from "../assets/images/win95_icons/Help book.ico";
import msDos from "../assets/images/win95_icons/MS-DOS logo.ico";
import mail from "../assets/images/win95_icons/Mail.ico";
import projects from "../assets/images/win95_icons/WordPad document.ico";

const shortcutData = [
  {
    name: "About Me",
    icon: whoAmI,
    id: "aboutMe",
    toggleHandler: "toggleAboutMe",
    toggleState: "isAboutMeOpen",
    toggleMinHandler: "minimizeAboutMe",
    minimizeState: "isAboutMeMinimized",
  },
  {
    name: "Skills.cmd",
    icon: msDos,
    id: "skills",
    toggleHandler: "toggleSkills",
    toggleState: "isSkillsOpen",
    toggleMinHandler: "minimizeSkills",
    minimizeState: "isSkillsMinimized",
  },
  {
    name: "Contact Me",
    icon: mail,
    id: "contactMe",
    toggleHandler: "toggleContactMe",
    toggleState: "isContactMeOpen",
    toggleMinHandler: "minimizeContactMe",
    minimizeState: "isContactMeMinimized",
  },
  {
    name: "Projects",
    icon: projects,
    id: "projects",
    toggleHandler: "toggleProjects",
    toggleState: "isProjectsOpen",
    toggleMinHandler: "minimizeProjects",
    minimizeState: "isProjectsMinimized",
  },
];

export default shortcutData;
