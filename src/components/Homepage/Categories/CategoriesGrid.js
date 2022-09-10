import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import BusinessImage from "../../../static/images/category-business.jpg";
import DesignImage from "../../../static/images/category-design.jpg";
import DevelopmentImage from "../../../static/images/category-development.jpg";
import ITSoftwareImage from "../../../static/images/category-it-and-software.jpg";
import MarketingImage from "../../../static/images/category-marketing.jpg";
import MusicImage from "../../../static/images/category-music.jpg";
import PersonalDevelopmentImage from "../../../static/images/category-personal-development.jpg";
import PhotographyImage from "../../../static/images/category-photography.jpg";
import styles from "./CategoriesGrid.module.css";

const CategoriesGrid = () => {
  return (
    <Container className={`mt-4 ${styles.topCategories}`}>
      <h3>Top categories</h3>
      <Row>
        <Col xs="12" sm="6" md="4" lg="3">
          <div>
            <img src={DesignImage} className="mb-2" alt="Design" />
          </div>
          <p>Design</p>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <div>
            <img src={DevelopmentImage} className="mb-2" alt="Development" />
          </div>
          <p>Development</p>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <div>
            <img src={MarketingImage} className="mb-2" alt="Marketing" />
          </div>
          <p>Marketing</p>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <div>
            <img src={ITSoftwareImage} className="mb-2" alt="IT and Software" />
          </div>
          <p>IT and Software</p>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <div>
            <img
              src={PersonalDevelopmentImage}
              className="mb-2"
              alt="Personal Development"
            />
          </div>
          <p>Personal Development</p>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <div>
            <img src={BusinessImage} className="mb-2" alt="Business" />
          </div>
          <p>Business</p>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <div>
            <img src={PhotographyImage} className="mb-2" alt="Photography" />
          </div>
          <p>Photography</p>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <div>
            <img src={MusicImage} className="mb-2" alt="Music" />
          </div>
          <p>Music</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesGrid;
