import React from "react";
import useScrollPosition from "../../../hooks/useScroll";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../../../styles/Course/Header/CourseSideCard.module.css";
import { useContext } from "react";
import { CoursesContext } from "../../../contexts/CoursesContext";
import { useState } from "react";
import LoadingSpinner from "../../Common/LoadingSpinner";
import { useRef } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";

const CourseSideCard = React.forwardRef((_, footerRef) => {
  const scrollPosition = useScrollPosition();

  const [heartLoading, setHeartLoading] = useState(false);
  const [heartSuccess, setHeartSuccess] = useState(false);
  const toastRef = useRef(null);
  const handleHeart = () => {
    if (!heartSuccess) {
      toastRef.current = toast.loading("Adding to wishlist");
      setHeartLoading(true);
      setTimeout(() => {
        setHeartLoading(false);
        setHeartSuccess(true);
        toast.update(toastRef.current, {
          render: "Added to wishlist",
          type: "success",
          isLoading: false,
          autoClose: 1000
        });
      }, 1000);
    } else {
      toastRef.current = toast.loading("Removing from wishlist");
      setHeartLoading(true);
      setHeartSuccess(false);
      setTimeout(() => {
        setHeartLoading(false);
        toast.update(toastRef.current, {
          render: "Removed from wishlist",
          type: "info",
          isLoading: false,
          autoClose: 1000
        });
      }, 1000);
    }
  };

  const {
    selectedCourse: {
      image,
      price,
      includes: { video, articles, download }
    }
  } = useContext(CoursesContext);

  const cardRef = useRef(null);
  useEffect(() => {
    if (
      scrollPosition + cardRef.current.clientHeight + 160 >
      footerRef.current.offsetTop
    )
      cardRef.current.style.top =
        footerRef.current.offsetTop -
        80 -
        scrollPosition -
        cardRef.current.clientHeight +
        "px";
    else cardRef.current.style.top = "80px";
  }, [scrollPosition, footerRef]);

  return (
    <div
      ref={cardRef}
      className={`d-none d-lg-block position-fixed ${styles.courseSideCard}`}
      style={{ top: scrollPosition > 60 ? "80px" : "" }}
    >
      <img
        src={image}
        alt="img"
        width="100%"
        className={scrollPosition > 60 ? "d-none" : ""}
      ></img>
      <div className={`p-3 ${styles.info}`}>
        <h2 className="mb-4">
          E£
          {price.toLocaleString("en-US", {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
          })}
        </h2>
        <Row className="gx-2 mb-2">
          <Col>
            <Button
              className={`w-100 h-100 rounded-0 py-3 fs-5 fw-bold mb-2 border-0 ${styles.addCartBtn}`}
            >
              Add to Cart
            </Button>
          </Col>
          <Col xs="auto">
            <Button
              onClick={handleHeart}
              className={`w-100 h-100 rounded-0 py-3 px-4 fs-5 fw-bold bg-white text-body border-dark ${styles.buyBtn}`}
            >
              {!heartLoading && !heartSuccess && (
                <i className="fa-solid fa-heart"></i>
              )}
              {heartLoading && <LoadingSpinner full={false} />}
              {heartSuccess && <i className="fa-solid fa-check"></i>}
            </Button>
          </Col>
        </Row>
        <Button
          className={`w-100 h-100 rounded-0 py-3 fs-5 fw-bold bg-white text-body border-dark ${styles.buyBtn}`}
        >
          Buy now
        </Button>
        <p className="text-center mt-3">30-Day Money-Back Guarantee</p>
        <div>
          <p className="fw-bold">This course includes</p>
          {video > 0 && (
            <Row>
              <Col xs={{ span: 1 }}>
                <i className="fa-regular fa-file-video"></i>
              </Col>
              <Col>{video} hours on-demand video</Col>
            </Row>
          )}
          {articles > 0 && (
            <Row>
              <Col xs={{ span: 1 }}>
                <i className="fa-regular fa-file"></i>
              </Col>
              <Col>
                {articles} article{articles > 1 ? "s" : ""}
              </Col>
            </Row>
          )}
          {download > 0 && (
            <Row>
              <Col xs={{ span: 1 }}>
                <i className="fa-solid fa-download"></i>
              </Col>
              <Col>
                {download} downloadable resource{download > 1 ? "s" : ""}
              </Col>
            </Row>
          )}
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-solid fa-infinity"></i>
            </Col>
            <Col>Full lifetime access</Col>
          </Row>
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-solid fa-mobile-screen"></i>
            </Col>
            <Col>Access on mobile and TV</Col>
          </Row>
          <Row>
            <Col xs={{ span: 1 }}>
              <i className="fa-solid fa-trophy"></i>
            </Col>
            <Col>Certificate of completion</Col>
          </Row>
        </div>
        <div
          className={`d-flex justify-content-around mt-3 mb-3 ${styles.share}`}
        >
          <a href="/">Share</a>
          <a href="/">Gift this course</a>
          <a href="/">Apply Coupon</a>
        </div>
      </div>
    </div>
  );
});

export default CourseSideCard;
