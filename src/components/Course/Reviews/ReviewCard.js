import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import RatingStars from "../../Common/RatingStars";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ review: { user, stars, date, content } }) => {
  const userName = user.split(" ");
  const initials =
    userName.length === 1 ? userName[0][0] : userName[0][0] + userName[1][0];

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const like = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
  };
  const dislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
  };
  return (
    <div className="mt-4 mb-2">
      <header className="d-flex align-items-center align-content-center border-1 border-top pt-4 pb-4">
        <span
          className={`me-4 bg-dark text-white d-flex justify-content-center align-items-center fs-6 rounded-circle ${styles.initials}`}
        >
          {initials}
        </span>
        <span className="fs-6 d-flex flex-column justify-content-between align-content-center">
          <div className="fw-bolder">{user}</div>
          <div>
            <RatingStars score={stars} />{" "}
            <span className={`fw-bold ${styles.date}`}>{date}</span>
          </div>
        </span>
        <span className="ms-auto">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              className={`bg-transparent text-dark border-0 ${styles.threeDots}`}
            >
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu align="end">
              <Dropdown.Item href="#/action-1">Report</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </header>
      <p className={styles.content}>{content}</p>
      <footer
        className={`d-flex justify-content-start align-items-center gap-3 ${styles.feedback}`}
      >
        <span>Helpful?</span>
        <i
          onClick={like}
          className={`fa-${liked ? "solid" : "regular"} fa-thumbs-up fs-3 me-2`}
        ></i>
        <i
          onClick={dislike}
          className={`fa-${
            disliked ? "solid" : "regular"
          } fa-thumbs-down fs-3 ${styles.mirror}`}
        ></i>
      </footer>
    </div>
  );
};

export default ReviewCard;
