import React, { useEffect, useState } from "react";
import CourseCard from "./partials/CourseCard/CourseCard.component";
import Header from "./partials/Header/Header.component";
import styles from "./App.module.css";
import Footer from "./partials/Footer/Footer.component";

interface Course {
  id: string;
  title: string;
  instructors: string[];
  lesson_count: number;
  total_duration: number;
  location: string;
  open_date: string;
  end_date: string;
  start_date: string[];
  trail: { id: string; name: string };
}

function App() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    (async () => {
      const result = await fetch(`${process.env.REACT_APP_API_URL}/courses`);
      console.log(result);
      setCourses(await result.json());
    })();
  }, []);

  return (
    <>
      <Header />

      <main className={styles.content}>
        <h1>Cursos</h1>
        <div className={styles.cards}>
          {courses?.map((e, i) => {
            return (
              <CourseCard
                key={e.id}
                {...{
                  trail: e.trail.name,
                  title: e.title,
                  start_time: e.start_date,
                  end_time: e.end_date,
                  lessons: e.lesson_count,
                  lessons_time: e.total_duration,
                  instructors: e.instructors,
                  location: e.location,
                  registrations_on: e.open_date,
                }}
              />
            );
          })}
        </div>

        <p className={styles.more}>Ver Tudo</p>
      </main>

      <Footer />
    </>
  );
}

export default App;
