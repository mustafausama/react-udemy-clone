import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/Homepage/Courses/Placeholder.module.css";

const Placeholder = () => {
  return (
    <Container>
      <Row>
        <Col sm="6" md="4" lg="3" xl="2">
          <div className={styles.placeholder}>
            <div className={styles.image}></div>
            <div className={styles.title}></div>
            <div className={styles.author}></div>
            <div className={styles.rating}></div>
            <div className={styles.price}></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Placeholder;
