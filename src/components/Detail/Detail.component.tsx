import React from "react";
import styles from "./Detail.module.css";

import { ReactComponent as BookIcon } from "../../../public/svgs/book.svg";
import { ReactComponent as ClockIcon } from "../../../public/svgs/clock.svg";
import { ReactComponent as UserIcon } from "../../../public/svgs/user.svg";
import { ReactComponent as LocationIcon } from "../../../public/svgs/location.svg";

interface DetailProps {
  variant: "lessons" | "time" | "instructors" | "location";
  content: string;
}
const Detail = ({ variant, content, ...props }: DetailProps) => {
  const getIcon = () => {
    switch (variant) {
      case "lessons":
        return <BookIcon />;
      case "time":
        return <ClockIcon />;
      case "instructors":
        return <UserIcon />;
      case "location":
        return <LocationIcon />;
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
