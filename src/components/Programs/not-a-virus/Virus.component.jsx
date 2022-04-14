import React, { useContext } from "react";
import * as ReactDOM from "react-dom";
import MainContext from "../../../store/Context";
import styles from "./Virus.module.scss";
import GlitchClip from "react-glitch-effect/core/GlitchClip";
const popupRoot = document.getElementById("popup-root");

function Virus() {
  const ctx = useContext(MainContext);
  return ReactDOM.createPortal(
    <div className={styles.container} onClick={ctx.toggleVirus}>
      <div className={`${styles.text} ${styles.glitch}`}>
        <GlitchClip duration={5000}>
          <div className={styles.heading}>
            <h3>Windows</h3>
          </div>

          <p>An error has occured. To continue:</p>
          <p>Press Enter to return to Windows, or</p>
          <p>
            Press CTRL+ALT+DEL to restart your computer. If you do this, you
            will lose any unsaved information in all open applications.
          </p>
          <p>Error: 0E : 016F : BFF9B3D4</p>
          <div className={styles.heading}>
            <p>Press any key to continue</p>
          </div>
        </GlitchClip>
      </div>
    </div>,
    popupRoot
  );
}

export default Virus;
