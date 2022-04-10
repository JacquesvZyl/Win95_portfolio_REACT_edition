import React from "react";
import Taskbar from "../taskbar/Taskbar.component";
import Clippy from "../../Clippy/Clippy.component";
import { useContext, useEffect, useState } from "react";
import MainContext from "../../../store/Context";
import styles from "./Desktop.module.scss";
import DesktopShortcuts from "../desktop-shortcuts/DesktopShortcuts.component";
import ProgramBorder from "../program-border/ProgramBorder.componentss";
import AboutMe from "../../Programs/about-me/AboutMe.component";

function Desktop() {
  const [showClippy, setShowClippy] = useState(false);
  const ctx = useContext(MainContext);

  useEffect(() => {
    console.log("from useeffect in App");
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
      <AboutMe />
      {showClippy && <Clippy />}
      <Taskbar className={styles.taskbar} />
    </div>
  );
}

export default Desktop;
