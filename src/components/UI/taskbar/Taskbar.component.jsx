import React, { useContext } from "react";
import StartButton from "../start-button/StartButton.component";
import Time from "../time/Time.component";
import styles from "./Taskbar.module.scss";
import StartMenu from "../start-menu/StartMenu.component";
import MainContext from "../../../store/Context";

function Taskbar(props) {
  const ctx = useContext(MainContext);
  function buttonClickHandler() {
    ctx.toggleMenu();
  }
  return (
    <div className={`${styles.taskbar} ${props.className}`}>
      <StartButton isClicked={ctx.isMenuOpen} onClick={buttonClickHandler} />
      {ctx.isMenuOpen && <StartMenu />}
      <Time />
    </div>
  );
}

export default Taskbar;
