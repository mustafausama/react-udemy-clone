import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Accordion, Button, Col, Row } from "react-bootstrap";
import { CoursesContext } from "../../../contexts/CoursesContext";
import styles from "../../../styles/Course/Content/ContentDetails.module.css";

const ContentDetails = () => {
  const {
    selectedCourse: {
      content: { sections, lectures, total, contentDetails }
    }
  } = useContext(CoursesContext);

  const [allExpanded, setAllExpanded] = useState(false);
  const [active, setActive] = useState([0]);
  const [allSections, setAllSections] = useState(contentDetails.length <= 10);

  const expandAll = () => {
    if (allExpanded) return;
    const actives = contentDetails.map((_, index) => index);
    setActive(actives);
    setAllExpanded(true);
  };

  const collapseAll = () => {
    if (!allExpanded) return;
    setActive([]);
    setAllExpanded(false);
  };

  return (
    <>
      <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start text-nowrap">
        <p>
          {sections} section{sections > 1 ? "s" : ""} • {lectures} lecture
          {lectures > 1 ? "s" : ""} • {total} total length
        </p>
        <Button
          onClick={allExpanded ? collapseAll : expandAll}
          className={`border-0 bg-transparent px-0 fw-bold ${styles.expandBtn}`}
        >
          {allExpanded ? "Collapse" : "Expand"} all sections
        </Button>
      </div>
      <div className="accordion-container">
        <Accordion
          key={active}
          defaultActiveKey={active}
          alwaysOpen
          className="border-0"
        >
          {active &&
            contentDetails.map(
              ({ title, lectures, duration, lecturesDetails }, index) => {
                return !allSections && index > 9 ? null : (
                  <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header className={styles.accordionHeader}>
                      <div className="ms-5 w-100 d-flex justify-content-between">
                        {title}
                        <span className="ms-3">
                          {lectures} lecture
                          {parseInt(lectures) > 1 ? "s" : ""} • {duration}
                        </span>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className={`mt-2 ${styles.lecturesList}`}>
                        {lecturesDetails.map(
                          ({ title, preview, duration }, index) => (
                            <li key={index}>
                              <Row>
                                <Col xs="1">
                                  {duration.includes(":") ? (
                                    <i className="fa-solid fa-circle-play"></i>
                                  ) : (
                                    <i className="fa-regular fa-file"></i>
                                  )}
                                </Col>
                                <Col>
                                  <p
                                    className={`${
                                      preview ? styles.lecturePreview : ""
                                    } ${styles.lectureTitle}`}
                                  >
                                    {title}
                                  </p>
                                </Col>
                                {preview && (
                                  <Col xs="2">
                                    <p className={styles.lecturePreview}>
                                      Preview
                                    </p>
                                  </Col>
                                )}
                                <Col
                                  xs="1"
                                  className="d-flex justify-content-end text-nowrap"
                                >
                                  <p
                                    className={`text-right ${styles.lectureDuration}`}
                                  >
                                    {duration}
                                  </p>
                                </Col>
                              </Row>
                            </li>
                          )
                        )}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              }
            )}
        </Accordion>

        {!allSections && sections > 10 && (
          <Button
            className="w-100 mt-3 border-1 rounded-0 border-dark bg-transparent text-dark fw-bold"
            onClick={() => setAllSections(true)}
          >
            Show {contentDetails.length - 10} more sections
          </Button>
        )}
      </div>
    </>
  );
};

export default ContentDetails;
