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

  function onCloseHander() {
    props.onToggle();
    props.onMinimize();
  }
  return (
    <Draggable handle="#handle" cancel="#close, #minimize">
      <Win95Border className={`${styles.program}`} style={props.style}>
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
                onClick={props.onMinimize}
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
        <div className={`${className} ${styles["data-container"]}`}>
          {props.children}
        </div>
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

/* 

<div class="help__popup draggable popup win95__border">
        <div class="basic__window__top__container">
            <div class="basic__window_top">
                <div class="basic__window__top__left">
                    <img class="popup__icon" src="${icon.src}" alt="">
                    <div class="popup__title">${title.innerText}</div>
                </div>
                <div class="basic__window__top__right">
                    <div class="minimize__popup__button popup__button win95__border">
                        <div class="minimize__box"></div>
                    </div>
                    <div class="close__popup__button popup__button win95__border">&#10006</div>
                </div>
            </div>
            <div class="basic__window__middle">
                <span>File</span>
                <span>Edit</span>
                <span>View</span>
                <span>Help</span>
            </div>
        </div>
      
        <div class="popup__main__section__container">
            <div class="popup__main_section">
                <div class="popup__main__text">
                    <h1>Hi! I'm Jacques</h1>
                    <p>I'm a 36 year old self-taught front-end developer. Originally from Cape Town, South Africa,
                        I'm
                        currently living in Bangkok,
                        Thailand with my wonderful wife since late 2020.</p>
                    <p>In 2020 I was retrenched from my job as an Application support engineer. I thought to myself
                        that this was the perfect opportunity to change my career path to something that I actually
                        enjoy...development!</p>
      
                    <p>I have since taught myself the Unity engine and C# for game Development, mostly for fun and
                        out of curiosity.</p>
                    <p>One of my android games was actually <a target="_blank"
                            href="https://www.pocketgamer.com/golf-in-60-seconds/">nominated for best sport game of
                            2021 on PocketGamer.com.</a> </p>
                    <p>I'm currently laser focused on web development and taught myself HTML, CSS, JavaScript,
                        Nodejs with express, and mongoDB.</p>
                    <p>I'm fascinated with creating content and user experiences with code.</p>
                </div>
                <div class="popup__main__image">
                    <img src="./src/images/other_images/Jacques.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="basic__window__bottom__container">
            <div class="basic__window__bottom_left win95__border__invert">1 object(s)</div>
            <div class="basic__window__bottom_rest win95__border__invert">
                <div class="basic__window__bottom__rest__text">352 bytes</div>
                <img src="/src/images/win95_icons/3lines.png" alt="">
            </div>
        </div>
      </div>`

*/
