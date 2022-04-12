import React from "react";
import Win95Border from "../win95-border/Win95Border.component";
import styles from "./TaskBarShortcut.module.scss";

function TaskBarShortcut(props) {
  function onClickHandler() {
    props.onMinimize();
  }
  return (
    <Win95Border
      className={styles.shortcut}
      inverted={!props.isMinimized}
      onClick={onClickHandler}
      style={{ backgroundColor: !props.isMinimized && "#E4E4E4" }}
    >
      <img src={props.icon} alt={props.name} />
      <span>{props.name}</span>
    </Win95Border>
  );
}

export default TaskBarShortcut;
