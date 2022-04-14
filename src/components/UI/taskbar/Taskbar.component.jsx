import React, { useContext } from "react";
import StartButton from "../start-button/StartButton.component";
import Time from "../time/Time.component";
import styles from "./Taskbar.module.scss";
import StartMenu from "../start-menu/StartMenu.component";
import MainContext from "../../../store/Context";
import TaskBarShortcuts from "../taskbar-shortcuts/TaskBarShortcuts.component";

function Taskbar(props) {
  const ctx = useContext(MainContext);
  function buttonClickHandler() {
    ctx.toggleMenu();
  }
  return (
    <div className={`${styles.taskbar} ${props.className}`}>
      {ctx.isMenuOpen && <StartMenu />}
      {/* <div className={styles["left-container"]}> */}
      <StartButton isClicked={ctx.isMenuOpen} onClick={buttonClickHandler} />
      <TaskBarShortcuts />

      <Time />
    </div>
  );
}

export default Taskbar;
