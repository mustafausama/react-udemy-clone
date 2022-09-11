import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import RatingStars from "../../../Common/RatingStars";
import styles from "../../../../styles/Homepage/Courses/Slider/CourseCard.module.css";
import { Button, Overlay } from "react-bootstrap";

const CourseCard = ({
  course: {
    id,
    image,
    title,
    author,
    rating: { score, reviews },
    price,
    lastUpdate,
    content,
    shortDescription,
    whatYouWillLearn
  }
}) => {
  const [wishlist, setWishlist] = useState(false);
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const destination = useRef(null);

  const isLeft = () =>
    target.current &&
    document.body.clientWidth -
      (target.current.getBoundingClientRect().left +
        target.current.getBoundingClientRect().width) <
      400;

  return (
    <>
      <Link
        ref={target}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        to={`/course/${id}`}
        className={styles.courseCard}
      >
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
      {content && (
        <Overlay
          ref={destination}
          target={target.current}
          show={show}
          placement={isLeft() ? "left" : "right"}
        >
          <div
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={`p-4 ${styles.popup} ${
              isLeft() ? styles.popupLeft : styles.popupRight
            }`}
          >
            <h3 className="fs-5">{title}</h3>
            <p className={styles.updated}>
              Updated <span className="fw-bold">{lastUpdate}</span>
            </p>
            <p className={styles.videos}>
              {content.total} total • All Levels • Subtitles
            </p>
            <p>{shortDescription}</p>
            <ul>
              {whatYouWillLearn
                .slice(0, Math.min(whatYouWillLearn.length, 3))
                .map((w) => (
                  <li>
                    <i className="fa-solid fa-check me-2 fs-6"></i> {w}
                  </li>
                ))}
            </ul>
            <div className="d-flex gap-2 mt-3">
              <Button
                className={`border-0 rounded-0 flex-grow-1 ${styles.addToCart}`}
              >
                Add to cart
              </Button>
              <Button
                className={`border-1 border-dark py-2 rounded-circle bg-transparent text-dark ms-auto ${styles.heart}`}
                onClick={() => setWishlist(!wishlist)}
              >
                <i
                  className={`${wishlist ? "fa-solid" : "fa-regular"} fa-heart`}
                ></i>
              </Button>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default CourseCard;
