import React from "react";
import { useContext } from "react";
import { ProgressBar } from "react-bootstrap";
import { CoursesContext } from "../../../contexts/CoursesContext";
import RatingStars from "../../Common/RatingStars";
import styles from "./RatingStats.module.css";
const RatingStats = () => {
  const {
    selectedCourse: { reviewsPercentage }
  } = useContext(CoursesContext);
  return (
    <>
      <div className="d-flex flex-row align-items-center align-content-center justify-content-start">
        <ProgressBar
          className={`rounded-0 me-4 flex-grow-1 ${styles.progressBar}`}
          now={reviewsPercentage[0]}
        />
        <RatingStars score={5} hideScore />
        <a href="/" className="ms-2 flex-grow-1">
          {reviewsPercentage[0]}%
        </a>
      </div>
      <div className="d-flex flex-row align-items-center align-content-center justify-content-start">
        <ProgressBar
          className={`rounded-0 me-4 ${styles.progressBar}`}
          now={reviewsPercentage[1]}
        />
        <RatingStars score={4} hideScore />
        <a href="/" className="ms-2 flex-grow-1">
          {reviewsPercentage[1]}%
        </a>
      </div>
      <div className="d-flex flex-row align-items-center align-content-center justify-content-start">
        <ProgressBar
          className={`rounded-0 me-4 ${styles.progressBar}`}
          now={reviewsPercentage[2]}
        />
        <RatingStars score={3} hideScore />
        <a href="/" className="ms-2 flex-grow-1">
          {reviewsPercentage[2]}%
        </a>
      </div>
      <div className="d-flex flex-row align-items-center align-content-center justify-content-start">
        <ProgressBar
          className={`rounded-0 me-4 ${styles.progressBar}`}
          now={reviewsPercentage[3]}
        />
        <RatingStars score={2} hideScore />
        <a href="/" className="ms-2 flex-grow-1">
          {reviewsPercentage[3]}%
        </a>
      </div>
      <div className="d-flex flex-row align-items-center align-content-center justify-content-start">
        <ProgressBar
          className={`rounded-0 me-4 ${styles.progressBar}`}
          now={reviewsPercentage[4]}
        />
        <RatingStars score={1} hideScore />
        <a href="/" className="ms-2 flex-grow-1">
          {reviewsPercentage[4]}%
        </a>
      </div>
    </>
  );
};

export default RatingStats;
