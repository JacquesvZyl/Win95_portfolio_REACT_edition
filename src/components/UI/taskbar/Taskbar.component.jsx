import React, { useState } from "react";
import StartButton from "../start-button/StartButton.component";
import Time from "../time/Time.component";
import styles from "./Taskbar.module.scss";
import StartMenu from "../start-menu/StartMenu.component";

function Taskbar(props) {
  const [isClicked, setIsClicked] = useState(false);
  function buttonClickHandler() {
    setIsClicked((prevVal) => !prevVal);
  }
  return (
    <div className={`${styles.taskbar} ${props.className}`}>
      <StartButton isClicked={isClicked} onClick={buttonClickHandler} />
      {isClicked && <StartMenu />}
      <Time />
    </div>
  );
}

export default Taskbar;
