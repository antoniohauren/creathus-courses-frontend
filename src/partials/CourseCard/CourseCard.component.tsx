import React from "react";
import Button from "../../components/Button/Button.component";
import Detail from "../../components/Detail/Detail.component";
import Schedule from "../../components/Schedule/Schedule.component";
import styles from "./CourseCard.module.css";

interface CourseCardProps {
  trail: string;
  title: string;
  start_time: string;
  end_time: string;
  lessons: string;
  lessons_time: string;
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
  return (
    <article className={styles.card}>
      <section className={styles.header}>
        <div>
          <h2>
            TRILHA <span>{trail}</span>
          </h2>
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
          <Detail content={`${lessons_time}h total`} variant="time" />
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
