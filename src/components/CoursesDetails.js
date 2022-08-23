import React from "react";
import styles from "./CoursesDetails.module.css";
import CourseCard from "./CourseCard";

const CoursesDetails = ({ title, body, name, courses }) => {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>{body}</p>
      <a href="/" className={styles.btn}>
        Explore {name}
      </a>
      <div className={styles.wrapper}>
        {courses.map((course) => (
          <CourseCard {...course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default CoursesDetails;
