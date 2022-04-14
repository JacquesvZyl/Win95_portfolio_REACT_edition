import React from "react";

import styles from "./Project.module.scss";

function techStackHelper(array) {
  const result = array.map((tech, i) => {
    if (tech.toLowerCase() === "html")
      return (
        <span key={i} style={{ backgroundColor: "#E56027" }}>
          HTML
        </span>
      );
    if (tech.toLowerCase() === "javascript")
      return (
        <span key={i} style={{ backgroundColor: "#E4D04B" }}>
          Javascript
        </span>
      );
    if (tech.toLowerCase() === "css")
      return (
        <span key={i} style={{ backgroundColor: "#1F8EE7" }}>
          CSS
        </span>
      );
    if (tech.toLowerCase() === "react")
      return (
        <span key={i} style={{ backgroundColor: "#00CCF2" }}>
          React
        </span>
      );
    if (tech.toLowerCase() === "firebase")
      return (
        <span key={i} style={{ backgroundColor: "#F29800" }}>
          Firebase
        </span>
      );
    return undefined;
  });

  return result;
}

function Project(props) {
  const { title, technologies, description, link, codeLink } = props.data;

  return (
    <div
      className={styles["project-container"]}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${props.image})`,
      }}
    >
      <div className={styles.data}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.technologies}>
          {techStackHelper(technologies)}
        </div>

        <div className={styles.links}>
          <a href={link} target="_blank" rel="noreferrer noopener">
            Link to Hosted App
          </a>
          <a href={codeLink} target="_blank" rel="noreferrer noopener">
            Link to Code Base
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
