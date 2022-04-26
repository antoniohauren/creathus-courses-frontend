import React from "react";
import styles from "./Detail.module.css";

import { ReactComponent as BookIcon } from "../../../public/svgs/book.svg";

interface DetailProps {
  variant: "lessons";
  content: string;
}
const Detail = ({ variant, content, ...props }: DetailProps) => {
  const getIcon = () => {
    switch (variant) {
      case "lessons":
        return <BookIcon />;
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
