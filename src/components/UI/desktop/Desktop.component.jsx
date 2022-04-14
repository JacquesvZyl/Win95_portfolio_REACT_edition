import React from "react";
import Taskbar from "../taskbar/Taskbar.component";
import Clippy from "../../Clippy/Clippy.component";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../../store/Context";
import styles from "./Desktop.module.scss";
import DesktopShortcuts from "../desktop-shortcuts/DesktopShortcuts.component";
import AboutMe from "../../Programs/about-me/AboutMe.component";
import Skills from "../../Programs/skills/Skills.componenet";
import ContactMe from "../../Programs/contact-me/ContactMe.component";
import Projects from "../../Programs/projects/Projects.component";
import Virus from "../../Programs/not-a-virus/Virus.component";

function Desktop() {
  const [showClippy, setShowClippy] = useState(false);
  const ctx = useContext(MainContext);

  useEffect(() => {
    setShowClippy(true);

    const timeOut = setTimeout(() => {
      setShowClippy(false);
    }, 10000);

    return () => clearTimeout(timeOut);
  }, []);

  function closeMenu() {
    if (!ctx.isMenuOpen) return;
    ctx.toggleMenu();
  }

  return (
    <div className={styles.desktop} onClick={closeMenu}>
      <DesktopShortcuts />
      {ctx.isVirusOpen && <Virus />}
      {ctx.isAboutMeOpen && <AboutMe />}
      {ctx.isSkillsOpen && <Skills />}
      {ctx.isContactMeOpen && <ContactMe />}
      {ctx.isProjectsOpen && <Projects />}

      {showClippy && <Clippy />}
      <Taskbar className={styles.taskbar} />
    </div>
  );
}

export default Desktop;
