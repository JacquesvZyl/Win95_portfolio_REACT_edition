import React, { useContext } from "react";
import MainContext from "../../../store/Context";
import ProgramBorder from "../../UI/program-border/ProgramBorder.componentss";
import styles from "./Projects.module.scss";
import shortcutData from "../../../data/shortcutData";
import Project from "./Project.component";
import movieQuiz from "../../../assets/images/projects/The-Movie-Quiz.jpg";

const { 0: shortcut } = {
  ...shortcutData.filter((shortcut) => shortcut.name === "Projects"),
};

const movieQuizData = {
  title: "Movie Quiz",
  description:
    "a Fun quiz game which uses theMovieDB api to pull movie related data",
  technologies: "HTML / SCSS / Javascript",
  link: "https://gifted-kare-48bf0c.netlify.app/",
  codeLink: "https://github.com/JacquesvZyl/Movie-Guessing-Game",
};

/* 

  <h3>{props.title}</h3>
      <p>{props.technologies}</p>
      <p>{props.description}</p>
      <a href={props.link}>Link to hosted App</a>
      <a href={props.codeLink}>Link to code base</a>
*/

function Projects() {
  const ctx = useContext(MainContext);

  console.log(shortcut);

  return (
    <ProgramBorder
      state={ctx.isProjectsOpen}
      onToggle={ctx.toggleProjects}
      onMinimize={ctx.minimizeProjects}
      minimizeState={ctx.isProjectsMinimized}
      icon={shortcut.icon}
      name={shortcut.name}
    >
      <div className={styles.container}>
        <h3>Projects</h3>
        <div className={styles["projects-container"]}>
          <Project image={movieQuiz} data={movieQuizData}></Project>
        </div>
      </div>
    </ProgramBorder>
  );
}

export default Projects;
