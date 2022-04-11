import React from "react";

import styles from "./StartMenuShortcut.module.scss";

function StartMenuShortcut(props) {
  function onClickHandler() {
    !props.state && props.onToggle();
    props.onMinimizeToggle();
  }
  return (
    <div
      onClick={onClickHandler}
      className={`${styles.shortcut} ${props.className}`}
    >
      <img src={props.icon} alt="" />
      <span>{props.text}</span>
    </div>
  );
}

export default StartMenuShortcut;

/* 
      state={ctx[shortcut.toggleState]}
      onToggle={ctx[shortcut.toggleHandler]}
      onMinimizeToggle={ctx[shortcut.toggleMinHandler]}
      minimizeState={ctx[shortcut.minimizeState]}

*/
