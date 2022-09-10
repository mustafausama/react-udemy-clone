import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import CourseHeader from "../../components/Course/Header/CourseHeader";
import LoadingSpinner from "../../components/Common/LoadingSpinner";
import NavbarComponent from "../../components/Common/Navbar";
import { CoursesContext } from "../../contexts/CoursesContext";
import CourseCurriculm from "../../components/Course/Content/CourseCurriculum";
import Reviews from "../../components/Course/Reviews/Reviews";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Footer from "../../components/Common/Footer";
import { useRef } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";

const CourseDetails = () => {
  useScrollToTop();

  const { id: courseID } = useParams();
  const { courses, selectedCourse, setSelectedCourse, loading } =
    useContext(CoursesContext);

  const footerRef = useRef(null);
  useEffect(() => {
    if (!loading)
      setSelectedCourse(
        Object.keys(courses)
          .map((category) => {
            const filtered = courses[category].courses.filter(
              (course) => course.id === courseID
            )[0];
            if (filtered) {
              return filtered;
            } else return null;
          })
          .filter((elem) => elem != null)[0]
      );
  }, [loading, courseID, courses, setSelectedCourse]);

  return (
    <>
      <NavbarComponent />
      {selectedCourse && (
        <>
          <CourseHeader ref={footerRef} />
          <CourseCurriculm />
          <Reviews />
          <Footer ref={footerRef} />
          <ToastContainer />
        </>
      )}
      {(loading || !selectedCourse) && <LoadingSpinner full={true} />}
    </>
  );
};

export default CourseDetails;
