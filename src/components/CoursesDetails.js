import React from "react";
import styles from "./CoursesDetails.module.css";
import CourseCard from "./CourseCard";
import Placeholder from "./Placeholder";
import { toast } from "react-toastify";

const CoursesDetails = ({ title, body, name, courses, loading, error }) => {
  if (error) toast.error(error);
  return (
    <div className={styles.container}>
      {title && <h1>{title}</h1>}
      {body && <p>{body}</p>}
      {name && (
        <a href="/" className={styles.btn}>
          Explore {name}
        </a>
      )}
      <div className={styles.wrapper}>
        {!loading &&
          courses &&
          courses.map((course) => <CourseCard {...course} key={course.id} />)}
        {(loading || error) && <Placeholder />}
      </div>
    </div>
  );
};

export default CoursesDetails;
