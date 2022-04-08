import React from "react";
import styles from "./StartButton.module.scss";
import startImg from "../../../assets/images/win95_icons/Start Logo 32x32.png";
import Win95Border from "../win95-border/Win95Border.component";

function StartButton(props) {
  return (
    <Win95Border
      className={styles.start}
      inverted={props.isClicked}
      onClick={props.onClick}
      tabIndex={0}
    >
      <img src={startImg} alt="start button" />
      <span>Start</span>
    </Win95Border>
  );
}

export default StartButton;
