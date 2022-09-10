import React from "react";
import { useContext } from "react";
import { Container, Nav, Tab } from "react-bootstrap";
import { CoursesContext } from "../../../contexts/CoursesContext";
import FilteredCoursesContext from "../../../contexts/FilteredCoursesContext";
import CoursesTab from "./CoursesTab";
import styles from "./CoursesWrapper.module.css";
import Placeholder from "./Placeholder";

const CoursesWrapper = () => {
  const courses = useContext(FilteredCoursesContext);
  const { loading, error } = useContext(CoursesContext);
  return (
    <section>
      <Container>
        <div className={`mt-3 ${styles.courseSelection}`}>
          <h1>A broad selection of courses</h1>
          <p>
            Choose from 204,000 online video courses with new additions
            published every month
          </p>
        </div>
        {loading && <Placeholder />}
        {!loading && courses && (
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey={Object.keys(courses)[0]}
            className={styles.tab}
          >
            <Nav className={styles.tabNav}>
              {Object.keys(courses).map((key) => (
                <Nav.Item key={key}>
                  <Nav.Link
                    className={`ps-0 text-capitalize fw-bold fs-6 ${styles.tabLink}`}
                    eventKey={key}
                  >
                    {courses[key].name}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content>
              {Object.keys(courses).map((key) => (
                <CoursesTab key={key} tabName={key} data={courses[key]} />
              ))}
            </Tab.Content>
          </Tab.Container>
        )}
        {!loading && !courses && (
          <div>
            <h1>No courses could be fetched...</h1>
            <p>
              <strong>Error message: </strong>
              {error}
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default CoursesWrapper;
