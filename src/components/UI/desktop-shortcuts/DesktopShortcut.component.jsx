import React from "react";
import styles from "./DesktopShortcut.module.scss";
import Draggable from "react-draggable";

function onClickHandler(e) {
  console.log(e);
}
function DesktopShortcut(props) {
  return (
    <Draggable>
      <div
        className={styles["desktop-shortcut"]}
        onDoubleClick={onClickHandler}
      >
        <img src={props.icon} alt="desktop icon" />
        <div className={styles.title}>{props.title}</div>
      </div>
    </Draggable>
  );
}

export default DesktopShortcut;
