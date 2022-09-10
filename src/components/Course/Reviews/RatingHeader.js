import React from "react";
import { useContext } from "react";
import { CoursesContext } from "../../../contexts/CoursesContext";
import styles from "./RatingHeader.module.css";

const RatingHeader = () => {
  const {
    selectedCourse: {
      rating: { score, reviews: numReviews }
    }
  } = useContext(CoursesContext);

  return (
    <h1 className="fs-4 fw-bold">
      <span className={styles.star}>
        <i className="fa-solid fa-star me-2"></i>
      </span>
      {score} course rating <span className={styles.separator}> • </span>
      {parseInt(numReviews / 1000)}K ratings
    </h1>
  );
};

export default RatingHeader;
