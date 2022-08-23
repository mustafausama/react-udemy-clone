import React from "react";

import styles from "./CourseCard.module.css";

const CourseCard = ({
  image,
  title,
  author,
  rating: { score, reviews },
  price
}) => {
  // preparing stars class names
  let scoreTMP = score;
  const stars = [];
  // full stars
  while (scoreTMP > 1) {
    stars.push(["fa-solid", "fa-star"]);
    scoreTMP--;
  }
  // half star
  if (scoreTMP > 0) stars.push(["fa-solid", "fa-star-half-stroke"]);
  // void stars
  while (stars.length < 5) stars.push(["fa-regular", "fa-star"]);

  return (
    <a href="/" className={styles.courseCard}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{author}</p>
      <span className={styles.rating}>
        <span className={styles.score}>{score}</span>
        {stars.map((star) => (
          <i className={star.join(" ")} key={stars.indexOf(star)}></i>
        ))}
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
    </a>
  );
};

export default CourseCard;
