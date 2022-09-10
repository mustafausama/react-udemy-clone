import React, { createContext } from "react";
import { useState } from "react";
import useFetch from "../hooks/useFetch";

export const CoursesContext = createContext();

const URL = "https://api.jsonbin.it/bins/d6b2Fjeb";
const CoursesContextProvider = ({ children }) => {
  const { data: courses, loading, error } = useFetch(URL);

  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <CoursesContext.Provider
      value={{ courses, loading, error, selectedCourse, setSelectedCourse }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
