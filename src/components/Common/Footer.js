import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "../../styles/Common/Footer.module.css";

const links = {
  Column1: {
    "Udemy Business":
      "https://www.udemy.com/udemy-business/?locale=en_US&mx_pg=home-page&path=%2F&ref=footer",
    "Teach on Udemy": "https://www.udemy.com/teaching/?ref=teach_footer",
    "Get the app": "https://www.udemy.com/mobile/",
    "About us": "https://about.udemy.com/?locale=en-us",
    "Contact us": "https://about.udemy.com/company?locale=en-us#offices"
  },
  Column2: {
    Careers: "https://about.udemy.com/careers?locale=en-us",
    Blog: "https://blog.udemy.com/?ref=footer",
    "Help and Support": "https://www.udemy.com/support/",
    Affiliate: "https://www.udemy.com/affiliate/",
    Investors: "https://investors.udemy.com/"
  },
  Column3: {
    Terms: "https://www.udemy.com/terms/",
    "Privacy policy": "https://www.udemy.com/terms/privacy/",
    "Cookie settings": "/",
    Sitemap: "https://www.udemy.com/sitemap/",
    "Accessibility statement":
      "https://about.udemy.com/accessibility-statement?locale=en-us"
  }
};

const Footer = React.forwardRef((_, footerRef) => {
  return (
    <footer ref={footerRef} className={`mt-4 text-white p-4 ${styles.footer}`}>
      <Container fluid className="d-flex flex-column flex-lg-row gap-lg-5">
        {Object.keys(links).map((column) => (
          <ul
            className={`order-1 order-lg-0 p-0 me-lg-4 ${styles.list}`}
            key={column}
          >
            {Object.keys(links[column]).map((link) => (
              <li key={link} className="mb-2">
                <a
                  className={`text-decoration-none text-white ${styles.link}`}
                  href={links[column][link]}
                >
                  <span>{link}</span>
                </a>
              </li>
            ))}
          </ul>
        ))}

        <Button className="align-self-start order-0 ms-lg-auto mb-4 mb-lg-auto border-2 border-white rounded-0 bg-transparent text-white">
          <i className="fa-solid fa-globe me-1"></i> English
        </Button>
      </Container>
      <Container
        fluid
        className="d-flex flex-column flex-lg-row justify-content-lg-between"
      >
        <Link to="/">
          <img
            width={100}
            alt="udemy logo"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
          />
        </Link>
        <p className="mt-2 mt-lg-auto">© 2022 Udemy, Inc.</p>
      </Container>
    </footer>
  );
});

export default Footer;
