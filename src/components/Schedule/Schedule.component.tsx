import React, { useEffect, useState } from "react";
import styles from "./Schedule.module.css";
import { ReactComponent as CalendarIcon } from "../../../public/svgs/calendar.svg";

interface ScheduleProps {
  timeDate: string;
  variant: "start" | "end";
}

const Schedule = ({ timeDate, variant, ...props }: ScheduleProps) => {
  const [dateString, setDateString] = useState("");
  // TODO: receive formated date from backend
  useEffect(() => {
    const date = new Date(timeDate);
    const dayMonth = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });

    const hour = date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "America/Fortaleza",
    });

    variant === "start"
      ? setDateString(`${dayMonth} às ${hour}`)
      : setDateString(`${dayMonth}`);
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
