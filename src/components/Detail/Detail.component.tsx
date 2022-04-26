import React from "react";
import styles from "./Detail.module.css";

import { ReactComponent as BookIcon } from "../../../public/svgs/book.svg";
import { ReactComponent as ClockIcon } from "../../../public/svgs/clock.svg";

interface DetailProps {
  variant: "lessons" | "time";
  content: string;
}
const Detail = ({ variant, content, ...props }: DetailProps) => {
  const getIcon = () => {
    switch (variant) {
      case "lessons":
        return <BookIcon />;
      case "time":
        return <ClockIcon />;
    }
  };

  return (
    <div className={styles.lessons}>
      {getIcon()}
      <p data-testid="content">{content}</p>
    </div>
  );
};

export default Detail;
