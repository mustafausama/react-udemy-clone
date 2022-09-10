import React from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../../Common/RatingStars";
import styles from "./CourseCard.module.css";

const CourseCard = ({
  course: {
    id,
    image,
    title,
    author,
    rating: { score, reviews },
    price
  }
}) => {
  return (
    <Link to={`/course/${id}`} className={styles.courseCard}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <span className={styles.rating}>
        <RatingStars score={score} />
        <span className={styles.reviews}>
          ({reviews.toLocaleString("en-US")})
        </span>
      </span>
      <p className="price">
        E£
        {price.toLocaleString("en-US", {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2
        })}
      </p>
    </Link>
  );
};

export default CourseCard;
