import React from "react";
import { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CoursesContext } from "../../../contexts/CoursesContext";
import RatingHeader from "./RatingHeader";
import ReviewCard from "./ReviewCard";
import ReviewsModal from "./ReviewsModal";

const Reviews = () => {
  const {
    selectedCourse: { reviews }
  } = useContext(CoursesContext);
  return (
    <section className="mt-2">
      <Container>
        <Row>
          <Col lg="8">
            <RatingHeader />
            <div>
              <Row className="gx-5">
                {reviews.slice(0, 4).map((review, index) => (
                  <Col xs="12" md="6" key={index}>
                    <ReviewCard review={review} />
                  </Col>
                ))}
              </Row>
            </div>
            <ReviewsModal />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
