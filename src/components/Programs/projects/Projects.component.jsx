import React, { useContext } from "react";
import MainContext from "../../../store/Context";
import ProgramBorder from "../../UI/program-border/ProgramBorder.componentss";
import styles from "./Projects.module.scss";
import shortcutData from "../../../data/shortcutData";
import Project from "./Project.component";
import movieQuiz from "../../../assets/images/projects/The-Movie-Quiz.jpg";
import foodFury from "../../../assets/images/projects/food-fury.png";
import mapty from "../../../assets/images/projects/Mapty.jpg";
import {
  movieQuizData,
  foodFuryData,
  maptyData,
} from "../../../data/projectData";

const { 0: shortcut } = {
  ...shortcutData.filter((shortcut) => shortcut.name === "Projects"),
};

function Projects() {
  const ctx = useContext(MainContext);

  return (
    <ProgramBorder
      state={ctx.isProjectsOpen}
      onToggle={ctx.toggleProjects}
      onMinimize={ctx.minimizeProjects}
      minimizeState={ctx.isProjectsMinimized}
      icon={shortcut.icon}
      name={shortcut.name}
      className={styles.main}
    >
      <div className={styles.container}>
        <h3>Projects</h3>
        <div className={styles["projects-container"]}>
          <Project image={movieQuiz} data={movieQuizData} />
          <Project image={foodFury} data={foodFuryData} />
          <Project image={mapty} data={maptyData} />
        </div>
      </div>
    </ProgramBorder>
  );
}

export default Projects;
