import React, { useContext, useState } from "react";
import MainContext from "../../../store/Context";
import ProgramBorder from "../../UI/program-border/ProgramBorder.componentss";
import TypeWriter from "../../UI/typewriter/TypeWriter.component";
import shortcutData from "../../../data/shortcutData";

import styles from "./Skills.module.scss";

function Skills() {
  const [isDoneTyping, setIsDoneTyping] = useState({
    lineOne: false,
    lineTwo: false,
  });
  const ctx = useContext(MainContext);

  function lineOneHandler() {
    setIsDoneTyping((val) => ({ ...val, lineOne: true }));
  }
  function lineTwoHandler() {
    setIsDoneTyping((val) => ({ ...val, lineTwo: true }));
  }

  const skills = (
    <div className={styles.skills}>
      <div>
        <p>HTML</p>
        <p>CSS</p>
        <p>SCSS &amp; SASS</p>
        <p>JavaScript</p>
        <p>React</p>
      </div>
      <div>
        <p>NodeJs</p>
        <p>Redux</p>
        <p>Express</p>
        <p>C#</p>
        <p>Unity</p>
      </div>
    </div>
  );

  return (
    <ProgramBorder
      className={styles.container}
      state={ctx.isSkillsOpen}
      onToggle={ctx.toggleSkills}
      onMinimize={ctx.minimizeSkills}
      minimizeState={ctx.isSkillsMinimized}
      icon={shortcutData[1].icon}
      name={shortcutData[1].name}
    >
      <div className={styles["text-container"]}>
        <p>Microsoft(R) Windows 95</p>
        <p>(C)Copyright Microsoft Corp 1981-1996.</p>
        <p className={styles["first-prompt"]}>
          C:\Users\Jacques{">"}
          <TypeWriter
            speed={150}
            text="cd skills"
            waitTime={800}
            doneChecker={lineOneHandler}
          />
        </p>
        {isDoneTyping.lineOne && (
          <p>
            C:\Users\Jacques\skills{">"}{" "}
            <TypeWriter
              speed={200}
              text="dir"
              waitTime={800}
              doneChecker={lineTwoHandler}
            />
          </p>
        )}
        {isDoneTyping.lineTwo && skills}
      </div>
    </ProgramBorder>
  );
}

export default Skills;
