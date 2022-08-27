import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";

export const CoursesContext = createContext();

const URL = "https://api.jsonbin.io/v3/b/incorrect";
const CoursesContextProvider = ({ children }) => {
  const { data: courses, loading, error } = useFetch(URL);
  return (
    <CoursesContext.Provider value={{ ...courses, loading, error }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;
