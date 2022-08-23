import React, { createContext, useEffect, useState } from "react";
import coursesJSON from "../shared/courses.json";

export const CoursesContext = createContext();

const CoursesContextProvider = ({ children }) => {
  const [courses, setCourses] = useState({
    name: "",
    title: "",
    body: "",
    courses: []
  });
  useEffect(() => {
    setCourses(coursesJSON);
  }, []);
  return (
    <CoursesContext.Provider value={courses}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
