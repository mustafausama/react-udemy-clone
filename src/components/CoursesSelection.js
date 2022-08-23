import React, { useContext } from "react";
import styles from "./CoursesSelection.module.css";
import CoursesDetails from "./CoursesDetails";

import { CoursesContext } from "../contexts/CoursesContext";

const CoursesSelection = () => {
  const coursesContent = useContext(CoursesContext);
  // TODO: add tabs for multiple course details
  return (
    <section className={styles.courses}>
      <CoursesDetails {...coursesContent} />
    </section>
  );
};

export default CoursesSelection;
