import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button.component";
import Detail from "../../components/Detail/Detail.component";
import Schedule from "../../components/Schedule/Schedule.component";
import styles from "./CourseCard.module.css";

import { ReactComponent as AndroidIcon } from "../../../public/svgs/android-logo.svg";

interface CourseCardProps {
  trail: string;
  title: string;
  start_time: string;
  end_time: string;
  lessons: string;
  lessons_time: number;
  location: string;
  registrations_on?: string;
  instructors: string[];
}

const CourseCard = ({
  trail,
  title,
  start_time,
  end_time,
  lessons,
  lessons_time,
  location,
  registrations_on,
  instructors,
}: CourseCardProps) => {
  const [convertedTime, setConvertedTime] = useState("");

  useEffect(() => {
    if (lessons_time >= 60) {
      setConvertedTime(`${(lessons_time / 60).toFixed(0)}H`);
    } else {
      setConvertedTime(`${lessons_time}M`);
    }
  }, [lessons_time]);

  return (
    <article className={styles.card}>
      <section className={styles.header}>
        <div>
          <h2>
            TRILHA <span>{trail}</span>
          </h2>

          <AndroidIcon />
        </div>
        <h3>{title}</h3>
      </section>

      <section className={styles.body}>
        <div className={styles.line}>
          <Schedule variant="start" timeDate={start_time} />
          <Schedule variant="end" timeDate={end_time} />
        </div>

        <div className={styles.line}>
          <Detail content={`${lessons} aulas`} variant="lessons" />
          <Detail content={`${convertedTime} total`} variant="time" />
        </div>

        <div className={styles.line}>
          <Detail content={instructors.join(", ")} variant="instructors" />
          <Detail content={location} variant="location" />
        </div>
      </section>

      <section className={styles.footer}>
        {registrations_on && <p>Incricoes a partir de {registrations_on}</p>}
        <div>
          <Button label="Página do curso" />
        </div>
      </section>
    </article>
  );
};

export default CourseCard;
