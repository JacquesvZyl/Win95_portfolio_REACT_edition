import React from "react";
import styles from "./DesktopShortcut.module.scss";
import Draggable from "react-draggable";

function DesktopShortcut(props) {
  function onClickHandler() {
    !props.state && props.stateHandler();
    props.minimizeHandler && props.minimizeHandler();
  }

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

/* 
      stateHandler={ctx[shortcut.toggleHandler]}
      minimizeHandler={ctx[shortcut.toggleMinHandler]}
      state={ctx[shortcut.toggleState]}
      minimizeState = {ctx[shortcut.minimizeState]}

*/
