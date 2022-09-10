import React, { useState } from "react";
import { useContext } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { CoursesContext } from "../../../contexts/CoursesContext";
import RatingHeader from "./RatingHeader";
import RatingStats from "./RatingStats";
import ReviewCard from "./ReviewCard";

const ReviewsModal = () => {
  const {
    selectedCourse: { reviews }
  } = useContext(CoursesContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [shown, setShown] = useState(Math.min(10, reviews.length));
  const handleShowAll = () => {
    setShown(reviews.length);
  };
  return (
    <>
      <Button
        className="w-100 mt-3 border-1 rounded-0 border-dark bg-transparent text-dark fw-bold"
        onClick={handleShow}
      >
        Show all reviews
      </Button>
      <Modal show={show} onHide={handleClose} dialogClassName="modal-xl">
        <Modal.Header closeButton className="border-0 mt-2">
          <RatingHeader />
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col xs="12" lg="4">
                <RatingStats />
              </Col>
              <Col>
                {reviews.slice(0, shown).map((review, index) => (
                  <ReviewCard review={review} key={index} />
                ))}
                {shown < reviews.length && (
                  <Button
                    className="w-100 mt-3 mb-4 border-1 rounded-0 border-dark bg-transparent text-dark fw-bold"
                    onClick={handleShowAll}
                  >
                    Show all reviews
                  </Button>
                )}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReviewsModal;
