import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import SliderButton from "./SliderButton";
import CourseCard from "./CourseCard";
import { useRef } from "react";
import useMediaQuery from "../../../../hooks/useMediaQuery";

const CardSlider = ({ courses }) => {
  const swiperRef = useRef(null);
  const [XS, SM, MD, LG, XL] = [
    useMediaQuery("(max-width: 575.98px)"),
    useMediaQuery("(max-width: 767.98px)"),
    useMediaQuery("(max-width: 991.98px)"),
    useMediaQuery("(max-width: 1199.98px)"),
    useMediaQuery("(max-width: 1399.98px)")
  ];
  const numSlides = (() => {
    if (XS) return 1;
    if (SM) return 2;
    if (MD) return 3;
    if (LG) return 4;
    if (XL) return 5;
    return 5;
  })();
  return (
    <div className="position-relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={numSlides}
        pagination={{ clickable: true }}
        className="mt-4"
        ref={swiperRef}
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <CourseCard course={course} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButton swiperRef={swiperRef} action="Next" />
      <SliderButton swiperRef={swiperRef} action="Prev" />
    </div>
  );
};

export default CardSlider;
