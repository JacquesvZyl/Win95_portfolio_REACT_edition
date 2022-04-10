import React from "react";
import styles from "./Win95Border.module.scss";

function Win95Border(props) {
  const { inverted, className, ...restProps } = props;
  const isInverted = inverted ? inverted : false;
  const classname = className ? className : "";
  return (
    <div
      {...restProps}
      className={`${
        isInverted ? styles["border-inverted"] : styles.border
      } ${classname}`}
    >
      {props.children}
    </div>
  );
}

export default Win95Border;
