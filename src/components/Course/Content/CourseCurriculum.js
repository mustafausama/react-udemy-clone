import React from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CoursesContext } from "../../../contexts/CoursesContext";
import ContentDetails from "./ContentDetails";
import styles from "../../../styles/Course/Content/CourseCurriculum.module.css";
import SeeMore from "./SeeMore";
const CourseCurriculum = () => {
  const {
    selectedCourse: {
      whatYouWillLearn,
      requirements,
      descriptionHTML,
      instructors
    }
  } = useContext(CoursesContext);
  return (
    <Container>
      <Row>
        <Col lg="8">
          <div className="mt-4 p-4 border border-1">
            <h2 className="mb-4 fs-4 fw-bold">What you'll learn</h2>
            <Row>
              {whatYouWillLearn.map((item, index) => (
                <Col xs="12" lg="6" key={index}>
                  <Row>
                    <Col xs="1">
                      <i className="fa-solid fa-check"></i>
                    </Col>
                    <Col xs="11">
                      <p>{item}</p>
                    </Col>
                  </Row>
                </Col>
              ))}
            </Row>
          </div>
          <div>
            <h2 className="mt-4 mb-4 fs-4 fw-bold">Course content</h2>
            <ContentDetails />
          </div>
          <section className="mt-4">
            <h2 className="mb-3 fs-4 fw-bold">Requirements</h2>
            <ul className="ms-3 p-0">
              {requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
            <h2 className="mb-3 fs-4 fw-bold">Description</h2>
            <SeeMore contentHTML={descriptionHTML} />

            <h2 className="mt-4 mb-3 fs-4 fw-bold">Instructors</h2>
            {instructors.map(
              ({ name, title, img, stats, description }, index) => (
                <div className="mb-4" key={index}>
                  <a
                    href="/"
                    className={`fw-bold text-decoration-none border-2 border-bottom fs-5 ${styles.instructorName}`}
                  >
                    {name}
                  </a>
                  <p className={styles.instructorTitle}>{title}</p>
                  <Row>
                    <Col
                      xs="2"
                      className="d-flex flex-column justify-content-center"
                    >
                      <img
                        src={img}
                        alt={name}
                        className="rounded-circle mw-100"
                      />
                    </Col>
                    <Col>
                      <Row>
                        <Col xs="1">
                          <i className="fa-solid fa-star"></i>
                        </Col>
                        <Col>
                          <p>{stats[0]}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1">
                          <i className="fa-solid fa-certificate"></i>
                        </Col>
                        <Col>
                          <p>{stats[1]}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1">
                          <i className="fa-solid fa-users"></i>
                        </Col>
                        <Col>
                          <p>{stats[2]}</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="1">
                          <i className="fa-solid fa-circle-play"></i>
                        </Col>
                        <Col>
                          <p>{stats[3]}</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <SeeMore contentHTML={description} />
                </div>
              )
            )}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseCurriculum;
