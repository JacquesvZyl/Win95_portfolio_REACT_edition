import React from "react";
import Win95Border from "../win95-border/Win95Border.component";
import styles from "./ProgramBorder.module.scss";
import close from "../../../assets/images/other_images/win95_close.png";
import minimize from "../../../assets/images/other_images/win95_minimize.png";
import resize from "../../../assets/images/win95_icons/3lines.png";

import shortcutData from "../../../data/shortcutData";
import Draggable from "react-draggable";

function ProgramBorder(props) {
  const className = props.className ? props.className : "";
  const show = props.minimizeState ? "none" : "inline";
  console.log(show);

  function onCloseHander() {
    props.onToggle();
    props.onMinimize();
  }
  return (
    <Draggable handle="#handle" cancel="#close, #minimize">
      <Win95Border
        className={`${styles.program} ${className}`}
        style={{ display: show }}
      >
        <div className={styles.header}>
          <div className={styles["header-top"]} id="handle">
            <div className={styles["header-left"]}>
              <img src={shortcutData[0].icon} alt="" />
              <span>{shortcutData[0].name}</span>
            </div>
            <div className={styles["header-right"]}>
              <img
                src={minimize}
                id="minimize"
                alt="minimize"
                onMouseDown={props.onMinimize}
              />
              <img
                src={close}
                id="close"
                alt="close"
                onMouseDown={onCloseHander}
              />
            </div>
          </div>
          <div className={styles["header-bottom"]}>
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Help</span>
          </div>
        </div>
        <div className={`${styles["data-container"]}`}>{props.children}</div>
        <div className={styles.footer} id="handle">
          <div className={styles["footer-left"]}>
            <Win95Border inverted="true">
              <span>1 object(s)</span>
            </Win95Border>
          </div>
          <Win95Border inverted="true" className={styles["footer-right"]}>
            <span>352 bytes</span>
            <img src={resize} alt="resize" />
          </Win95Border>
        </div>
      </Win95Border>
    </Draggable>
  );
}

export default ProgramBorder;
