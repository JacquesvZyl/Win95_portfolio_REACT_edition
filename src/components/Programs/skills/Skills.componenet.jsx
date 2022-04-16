import React, { useContext, useState } from "react";
import MainContext from "../../../store/Context";
import ProgramBorder from "../../UI/program-border/ProgramBorder.componentss";
import TypeWriter from "../../UI/typewriter/TypeWriter.component";
import shortcutData from "../../../data/shortcutData";

import styles from "./Skills.module.scss";

const { 0: shortcut } = {
  ...shortcutData.filter((shortcut) => shortcut.name === "Skills.cmd"),
};

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
      </div>
      <div>
        <p>React</p>
        <p>Redux</p>
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
      icon={shortcut.icon}
      name={shortcut.name}
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
            C:\Users\Jacques\skills{">"}
            <TypeWriter
              speed={200}
              text="dir"
              waitTime={800}
              doneChecker={lineTwoHandler}
            />
          </p>
        )}
        {isDoneTyping.lineTwo && skills}
        {isDoneTyping.lineTwo && <p>C:\Users\Jacques\skills{">"}</p>}
      </div>
    </ProgramBorder>
  );
}

export default Skills;
