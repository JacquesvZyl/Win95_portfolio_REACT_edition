import React from "react";
import styles from "./Clippy.module.scss";
import clippyImg from "../../assets/images/win95_icons/clippy.png";

function Clippy() {
  return (
    <div className={styles.clippy}>
      <div className={styles["chat-bubble"]}>
        Hi there! For more information, click on desktop shortcuts or the start
        menu!
      </div>
      <img src={clippyImg} alt="Annoying Clippy" />
    </div>
  );
}

export default Clippy;
