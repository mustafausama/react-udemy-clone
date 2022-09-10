import React from "react";
import styles from "./RatingStars.module.css";

const RatingStars = ({ score, hideScore }) => {
  // preparing stars class names
  let scoreTMP = score;
  const stars = [];
  // full stars
  while (scoreTMP >= 1) {
    stars.push(["fa-solid", "fa-star"]);
    scoreTMP--;
  }
  // half star
  if (scoreTMP > 0) stars.push(["fa-solid", "fa-star-half-stroke"]);
  // void stars
  while (stars.length < 5) stars.push(["fa-regular", "fa-star"]);

  return (
    <span>
      {!hideScore && <span className={`me-2 ${styles.score}`}>{score}</span>}
      {stars.map((star) => (
        <i
          className={`me-1 ${star.join(" ")} ${styles.star}`}
          key={stars.indexOf(star)}
        ></i>
      ))}
    </span>
  );
};

export default RatingStars;
