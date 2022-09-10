import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Navbar.module.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavbarComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) navigate(`/search?q=${searchQuery}`);
  };
  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <Navbar expand="lg" className={`px-4 py-2 ${styles.navbar}`}>
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            <img
              width={80}
              alt="udemy logo"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link className={styles.navlink} href="#home">
              Categories
            </Nav.Link>
          </Nav>

          <Form className="w-100 mx-2" onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                className={`ps-3 py-2  ${styles.searchbar}`}
                placeholder="Search for anything"
                aria-label="Search for anything"
                value={searchQuery}
                onChange={onSearchChange}
              />
              <Button type="submit" className={styles.searchbtn}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </InputGroup>
          </Form>

          <Nav>
            <Nav.Link className={`text-nowrap ${styles.navlink}`} href="#home">
              Udemy Business
            </Nav.Link>
            <Nav.Link className={`text-nowrap ${styles.navlink}`} href="#home">
              Teach on Udemy
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link className={`text-nowrap mx-1 ${styles.navlink}`}>
              <i className="fa-solid fa-cart-shopping"></i>
            </Nav.Link>
            <Nav.Link
              className={`text-nowrap mx-1 px-3 ${styles.navlink} ${styles.auth}`}
            >
              Log in
            </Nav.Link>
            <Nav.Link
              className={`text-nowrap mx-1 px-3 ${styles.navlink} ${styles.auth}`}
            >
              Sign up
            </Nav.Link>
            <Nav.Link
              className={`text-nowrap mx-1 px-2 ${styles.navlink} ${styles.auth}`}
            >
              <i className="fa-solid fa-globe"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
