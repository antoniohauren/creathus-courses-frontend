import React, { useEffect, useState } from "react";
import styles from "./Schedule.module.css";

interface ScheduleProps {
  timeDate: string;
  type: "start" | "end";
}

const Schedule = ({ timeDate, type, ...props }: ScheduleProps) => {
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
    });

    console.log(type);

    type === "start"
      ? setDateString(`${dayMonth} às ${hour}`)
      : setDateString(`${dayMonth}`);
  }, [timeDate, type]);

  return (
    <div className={styles.schedule}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
      <div className={styles.dateText}>
        {type === "start" ? <p>inicio em</p> : <p>término</p>}
        <p data-testid="dateString">{dateString}</p>
      </div>
    </div>
  );
};

export default Schedule;
