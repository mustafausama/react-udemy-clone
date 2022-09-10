import React from "react";
import styles from "./CourseHeader.module.css";
import {
  Breadcrumb,
  Col,
  Container,
  Row,
  Button,
  Navbar,
  Nav
} from "react-bootstrap";
import CourseSideCard from "./CourseSideCard";
import useScrollPosition from "../../../hooks/useScroll";
import { useRef } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CoursesContext } from "../../../contexts/CoursesContext";
import RatingStars from "../../Common/RatingStars";

const CourseHeader = React.forwardRef((_, footerRef) => {
  const scrollPosition = useScrollPosition();
  const fixedNavRef = useRef(null);
  const botNavRef = useRef(null);
  const botNavOriginalPosition = useRef(-1);
  useEffect(() => {
    if (botNavOriginalPosition.current === -1)
      botNavOriginalPosition.current = botNavRef.current.offsetTop;
    else return () => {};
  }, [botNavRef]);
  useEffect(() => {
    if (
      scrollPosition >
      botNavOriginalPosition.current - fixedNavRef.current.clientHeight
    ) {
      botNavRef.current.classList.add("position-fixed");
      botNavRef.current.classList.add(styles.botNavFiexd);
    } else {
      botNavRef.current.classList.remove("position-fixed");
      botNavRef.current.classList.remove(styles.botNavFiexd);
    }
  }, [scrollPosition]);

  const {
    selectedCourse: {
      title,
      rating: { score, reviews },
      students,
      image,
      shortDescription,
      author,
      lastUpdate,
      locale,
      caption,
      price
    }
  } = useContext(CoursesContext);
  return (
    <header>
      <Navbar
        ref={fixedNavRef}
        className={`position-fixed d-block py-2 px-4 top-0 w-100 ${styles.fixedNav}`}
      >
        <h6 className="mb-1">{title}</h6>
        <div className={styles.rating}>
          <RatingStars score={score} />
          <a href="/" className={`ms-1 ${styles.reviews}`}>
            ({reviews.toLocaleString("en-US")})
          </a>
          <span className="ms-2">
            {students.toLocaleString("en-US")} students
          </span>
        </div>
      </Navbar>
      <div className={`py-3 ${styles.courseHeader}`}>
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item className={styles.breadcrumbItem} href="#">
              Development
            </Breadcrumb.Item>
            <Breadcrumb.Item className={styles.breadcrumbItem} href="#">
              Programming Languages
            </Breadcrumb.Item>
            <Breadcrumb.Item className={styles.breadcrumbItem} href="#">
              Python
            </Breadcrumb.Item>
          </Breadcrumb>
          <Row>
            <Col
              xs={{ order: 2, span: 12 }}
              lg={{ order: 1, span: 8 }}
              className="pe-lg-3"
            >
              <img
                src={image}
                alt="img"
                width="100%"
                className="mb-3 d-block d-lg-none"
              ></img>
              <h3>{title}</h3>
              <p>{shortDescription}</p>
              <div className={styles.rating}>
                <RatingStars score={3.5} />
                <a href="/" className={`ms-1 ${styles.reviews}`}>
                  ({reviews.toLocaleString("en-US")})
                </a>
                <span className="ms-2">
                  {students.toLocaleString("en-US")} students
                </span>
              </div>
              <div className={`mt-2 ${styles.author}`}>
                Created by {<a href="/">{author}</a>}
              </div>
              <div className={`mt-2 ${styles.info}`}>
                <div className="d-block d-lg-inline">
                  <i className="fa-solid fa-circle-info me-2"></i>Last updated
                  {lastUpdate}
                </div>
                <div className="d-block d-lg-inline">
                  <i className="fa-solid fa-globe ms-lg-3 me-2"></i>
                  {locale}
                </div>
                <div className="d-block d-lg-inline">
                  <i className="fa-solid fa-closed-captioning ms-lg-3 me-2"></i>
                  {caption}
                </div>
              </div>
              <div className="d-block d-lg-none mt-3">
                <h1>
                  E£
                  {price.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })}
                </h1>
                <Button
                  className={`w-100 rounded-0 border-0 mt-1 py-2 ${styles.addCartBtn}`}
                >
                  Add to cart
                </Button>
                <div
                  className={`d-flex flex-column align-items-center mt-4 ${styles.guarantee}`}
                >
                  <p>30-Day Money-Back Guarantee</p>
                  <p>Full Lifetime Access</p>
                </div>
                <div
                  className={`d-flex justify-content-around mt-3 mb-3 ${styles.share}`}
                >
                  <a href="/">Share</a>
                  <a href="/">Gift this course</a>
                  <a href="/">Apply Coupon</a>
                </div>
              </div>
            </Col>
            <Col
              xs={{ order: 1, span: 12 }}
              lg={{ order: 2, span: 2 }}
              className="position-relative"
            >
              <CourseSideCard ref={footerRef} />
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        ref={botNavRef}
        bg="light"
        className={`border-bottom border-1 p-0 ${styles.botNav}`}
      >
        <Container>
          <Row style={{ width: "100%" }}>
            <Col lg={{ span: 8 }}>
              <Nav className="justify-content-around text-nowrap">
                <Nav.Item
                  className={`w-100 text-center py-2 ${styles.botNavLink}`}
                >
                  <a href="/" className="text-decoration-none">
                    Overview
                  </a>
                </Nav.Item>
                <Nav.Item
                  className={`w-100 text-center py-2 ${styles.botNavLink}`}
                >
                  <a href="/" className="text-decoration-none">
                    Curriculum
                  </a>
                </Nav.Item>
                <Nav.Item
                  className={`w-100 text-center py-2 ${styles.botNavLink}`}
                >
                  <a href="/" className="text-decoration-none">
                    Instructor
                  </a>
                </Nav.Item>
                <Nav.Item
                  className={`w-100 text-center py-2 ${styles.botNavLink}`}
                >
                  <a href="/" className="text-decoration-none">
                    Reviews
                  </a>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
});

export default CourseHeader;
