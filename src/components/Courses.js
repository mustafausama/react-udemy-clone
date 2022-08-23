import React, { useContext } from "react";
import styles from "./Courses.module.css";
import { CoursesContext } from "../contexts/CoursesContext";
import CourseCard from "./CourseCard";

const Courses = () => {
  const coursesContent = useContext(CoursesContext);
  return (
    <section className={styles.courses}>
      <div className={styles.container}>
        <h1>{coursesContent.title}</h1>
        <p>{coursesContent.body}</p>
        <a href="/" className={styles.btn}>
          Explore {coursesContent.name}
        </a>
        <div className={styles.wrapper}>
          {coursesContent.courses.map((course) => (
            <CourseCard {...course} key={course.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
