import React from "react";
import { Button } from "react-bootstrap";
import styles from "../../../../styles/Homepage/Courses/Slider/SliderButton.module.css";
const SliderButton = ({ action, swiperRef }) => {
  const handleClick = () => {
    if (!swiperRef.current) return;
    if (action === "Next") swiperRef.current.swiper.slideNext();
    if (action === "Prev") swiperRef.current.swiper.slidePrev();
  };
  return (
    <Button
      onClick={handleClick}
      className={`bg-transparent text-dark border-0 position-absolute p-0 m-0 fs-1 ${
        action === "Next" ? styles.next : styles.prev
      }`}
    >
      <i
        className={`fa-solid ${
          action === "Next"
            ? "fa-circle-chevron-right"
            : "fa-circle-chevron-left"
        }`}
      ></i>
    </Button>
  );
};

export default SliderButton;
