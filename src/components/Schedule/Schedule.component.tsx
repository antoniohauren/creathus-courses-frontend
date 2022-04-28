import React, { useEffect, useState } from "react";
import styles from "./Schedule.module.css";
import { ReactComponent as CalendarIcon } from "../../assets/svgs/calendar.svg";

interface ScheduleProps {
  timeDate: string | string[];
  variant: "start" | "end";
}

const Schedule = ({ timeDate, variant, ...props }: ScheduleProps) => {
  const [dateString, setDateString] = useState("");
  useEffect(() => {
    variant === "start"
      ? setDateString(`${timeDate[0]} às ${timeDate[1]}`)
      : setDateString(`${timeDate}`);
  }, [timeDate, variant]);

  return (
    <div className={styles.schedule}>
      <CalendarIcon />
      <div className={styles.dateText}>
        {variant === "start" ? <p>inicio em</p> : <p>término</p>}
        <p data-testid="dateString">{dateString}</p>
      </div>
    </div>
  );
};

export default Schedule;
