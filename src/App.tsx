import React, { useEffect, useState } from "react";
import CourseCard from "./partials/CourseCard/CourseCard.component";
import Header from "./partials/Header/Header.component";
import styles from "./App.module.css";

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
      const r = await fetch("http://localhost:5000/courses");
      const crs = await r.json();
      console.log(crs);
      setCourses(crs);
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
      </main>
    </>
  );
}

export default App;
