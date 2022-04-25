import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  active: boolean;
  label: string;
}
const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button} disabled={props.active}>
      {props.label}
    </button>
  );
};

export default Button;
