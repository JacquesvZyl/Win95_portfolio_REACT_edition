import React from "react";
import ProgramBorder from "../../UI/program-border/ProgramBorder.componentss";
import jacquesImage from "../../../assets/images/other_images/Jacques.jpg";

import styles from "./AboutMe.module.scss";

function AboutMe() {
  return (
    <ProgramBorder className={styles["main-container"]}>
      <div className={styles.about}>
        <div className={styles.text}>
          <h1>Hi! I'm Jacques</h1>
          <p>
            I'm a 36 year old self-taught front-end developer. Originally from
            Cape Town, South Africa, I'm currently living in Bangkok, Thailand
            with my wonderful wife since late 2020.
          </p>
          <p>
            In 2020 I was retrenched from my job as an Application support
            engineer. I thought to myself that this was the perfect opportunity
            to change my career path to something that I actually
            enjoy...development!
          </p>

          <p>
            I have since taught myself the Unity engine and C# for game
            Development, mostly for fun and out of curiosity.
          </p>
          <p>
            One of my android games was actually
            <a
              target="_blank"
              href="https://www.pocketgamer.com/golf-in-60-seconds/"
            >
              nominated for best sport game of 2021 on PocketGamer.com.
            </a>
          </p>
          <p>
            I'm currently laser focused on web development and taught myself
            HTML, CSS, JavaScript, Nodejs with express, and mongoDB.
          </p>
          <p>
            I'm fascinated with creating content and user experiences with code.
          </p>
        </div>
        <div className={styles.image}>
          <img src={jacquesImage} alt="Jacques van Zyl" />
        </div>
      </div>
    </ProgramBorder>
  );
}

export default AboutMe;
