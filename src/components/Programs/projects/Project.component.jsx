import React from "react";

import styles from "./Project.module.scss";

function Project(props) {
  const { title, technologies, description, link, codeLink } = props.data;
  return (
    <div
      className={styles["project-container"]}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${props.image})`,
      }}
    >
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.technologies}>Technologies used: {technologies}</p>
      <a href={link} target="_blank" rel="noreferrer noopener">
        Link to Hosted App
      </a>
      <a href={codeLink} target="_blank" rel="noreferrer noopener">
        Link to Code Base
      </a>
    </div>
  );
}

export default Project;
