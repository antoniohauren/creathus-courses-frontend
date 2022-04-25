import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  active?: boolean;
  label: string;
}
const Button = ({ active = true, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} disabled={!active}>
      {props.label}
    </button>
  );
};

export default Button;
