import whoAmI from "../assets/images/win95_icons/Help book.ico";
import msDos from "../assets/images/win95_icons/MS-DOS logo.ico";
import mail from "../assets/images/win95_icons/Mail.ico";

const shortcutData = [
  {
    name: "About Me",
    icon: whoAmI,
    id: "aboutMe",
    toggleHandler: "toggleAboutMe",
    toggleState: "isAboutMeOpen",
  },
  {
    name: "Skills.cmd",
    icon: msDos,
    id: "skills",
    toggleHandler: "toggleSkills",
    toggleState: "isSkillsOpen",
  },
  {
    name: "Contact Me",
    icon: mail,
    id: "contactMe",
    toggleHandler: "toggleContactMe",
    toggleState: "isContactMeOpen",
  },
];

export default shortcutData;
