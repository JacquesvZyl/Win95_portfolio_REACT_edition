import React from "react";
import styles from "./Win95Border.module.scss";

function Win95Border(props) {
  const { inverted, ...restProps } = props;
  const isInverted = inverted ? inverted : false;
  return (
    <div
      {...restProps}
      className={`${isInverted ? styles["border-inverted"] : styles.border} ${
        props.className
      }`}
    >
      {props.children}
    </div>
  );
}

export default Win95Border;
