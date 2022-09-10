import React from "react";
import { Container } from "react-bootstrap";
import styles from "../../../styles/Homepage/Header/IntroSlide.module.css";
const IntroSlide = () => {
  return (
    <Container className="position-relative">
      <img
        src="https://img-c.udemycdn.com/notices/home_banner/image_udlite/1fcf7705-1eb3-47cc-ba37-eacd45afd397.jpg"
        alt="intro"
        style={{
          maxWidth: "100%"
        }}
      />
      <div
        className={`position-absolute bg-white mt-3 mt-lg-0 p-0 p-lg-4 pe-lg-5 ${styles.introBox}`}
      >
        <h2 className="fw-bolder">Sale ends today</h2>
        <p className="fs-5">
          Invest in yourself. Log in now for special savings on courses.
        </p>
      </div>
    </Container>
  );
};

export default IntroSlide;
