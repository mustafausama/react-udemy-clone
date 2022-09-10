import React from "react";
import { Button, Tab } from "react-bootstrap";
import styles from "../../../styles/Homepage/Courses/CoursesTab.module.css";
import CardSlider from "./Slider/CardSlider";

const CoursesTab = ({
  tabName,
  data: { name, title, description, courses }
}) => {
  return (
    <Tab.Pane eventKey={tabName} className="border p-4 font-default">
      <h2 className="fs-4 fw-bold">{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button
        className={`bg-transparent text-dark border border-1 border-dark rounded-0 px-3 py-2 fw-bold fs-6 ${styles.exploreBtn}`}
      >
        Explore {name}
      </Button>
      {courses && courses.length > 0 && <CardSlider courses={courses} />}
    </Tab.Pane>
  );
};

export default CoursesTab;
