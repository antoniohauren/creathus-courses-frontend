import React from "react";
import CourseCard from "./partials/CourseCard/CourseCard.component";
import Header from "./partials/Header/Header.component";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <main className={styles.content}>
        <h1>Cursos</h1>
        <div className={styles.cards}>
          {Array(8)
            .fill(Math.random())
            .map((e, i) => {
              return (
                <CourseCard
                  key={e}
                  {...{
                    trail: "android",
                    title:
                      i === 2
                        ? "Webservices com Retrofit e imagens glide"
                        : "Webservices com Retrofit",
                    start_time: new Date().toISOString(),
                    end_time: new Date().toISOString(),
                    lessons: "5",
                    lessons_time: 60,
                    instructors: ["teste 1", "test2", "teste3"],
                    location: "campus manaus",
                    registrations_on: "11/05",
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
