import React, { useEffect, useState } from "react";
import styles from "./EndApplet.module.css";

interface EndAppletProps {
  timeDate: string;
}

const EndApplet = ({ timeDate, ...props }: EndAppletProps) => {
  const [dateString, setDateString] = useState("");

  useEffect(() => {
    const date = new Date(timeDate);
    const dayMonth = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
    });

    setDateString(`${dayMonth}`);
  }, [timeDate]);

  return (
    <div className={styles.endApplet}>
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
        <p>término</p>
        <p data-testid="dateString">{dateString}</p>
      </div>
    </div>
  );
};

export default EndApplet;
