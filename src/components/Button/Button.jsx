import React from "react";
import styles from "./Button.module.scss";

function Button({ children, type, variation, icon }) {
  const colorMap = {
    primary: styles["--primary"],
    secondary: styles["--secondary"]
  };

  const buttonClass = `${styles.btn} ${styles[`btn__${type}`]} ${colorMap[variation]}`;

  return (
    <button className={buttonClass}>
      {children}
      {icon && <span className="center">{icon}</span>}
    </button>
  );
}

export default Button;
