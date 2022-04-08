import React, { useEffect, useState } from "react";
import Win95Border from "../win95-border/Win95Border.component";
import styles from "./Time.module.scss";
import volumeIcon from "../../../assets/images/win95_icons/Volume.ico";

function Time() {
  const [time, setTime] = useState("00:00");

  useEffect(() => {
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    setTime(new Date().toLocaleTimeString("en-GB", options));

    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-GB", options));
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <Win95Border className={styles.clock} inverted="true">
      <img src={volumeIcon} alt="Volume" />
      <span className={styles.time}>{time}</span>
    </Win95Border>
  );
}

export default Time;

/* 

            <div class="system__tray">
                <img src="/src/images/win95_icons/Volume.ico" alt="">
                <span class="time">00:00</span>
            </div>

*/
