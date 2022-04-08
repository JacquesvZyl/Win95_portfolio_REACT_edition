import React from "react";

import styles from "./StartMenuShortcut.module.scss";

function StartMenuShortcut(props) {
  return (
    <div className={`${styles.shortcut} ${props.className}`}>
      <img src={props.icon} alt="" />
      <span>{props.text}</span>
    </div>
  );
}

export default StartMenuShortcut;
