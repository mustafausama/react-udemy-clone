import React from "react";
import { toast, ToastContainer } from "react-toastify";
import NavbarComponent from "../../components/Common/Navbar";
import "react-toastify/dist/ReactToastify.css";
import CoursesWrapper from "../../components/Homepage/Courses/CoursesWrapper";
import { useSearchParams } from "react-router-dom";
import FilteredCoursesContext from "../../contexts/FilteredCoursesContext";
import { useContext } from "react";
import { CoursesContext } from "../../contexts/CoursesContext";
import { filterCourses } from "../../utils/filterCourses";
import { useRef } from "react";
import IntroSlide from "../../components/Homepage/Header/IntroSlide";
import CategoriesGrid from "../../components/Homepage/Categories/CategoriesGrid";
import Footer from "../../components/Common/Footer";
import useScrollToTop from "../../hooks/useScrollToTop";

const Homepage = () => {
  useScrollToTop();
  const [searchParams] = useSearchParams();
  let { courses, loading } = useContext(CoursesContext);
  // automatically filter courses if search query found
  if (searchParams.get("q") && courses) {
    courses = filterCourses(courses, searchParams.get("q"));
  }
  const toastRef = useRef(null);

  // Show toast
  if (loading) toastRef.current = toast.loading("Loading courses");
  else if (courses)
    toast.update(toastRef.current, {
      render: "Courses loaded successfully",
      type: "success",
      isLoading: false,
      autoClose: 1000
    });
  else
    toast.update(toastRef.current, {
      render: "Courses failed to load",
      type: "error",
      isLoading: false,
      autoClose: true
    });

  return (
    <>
      <FilteredCoursesContext.Provider value={courses}>
        <NavbarComponent />
        <IntroSlide />
        <CoursesWrapper />
      </FilteredCoursesContext.Provider>
      <CategoriesGrid />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Homepage;
