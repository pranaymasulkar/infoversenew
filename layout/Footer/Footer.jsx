import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Image, Nav } from "react-bootstrap";
import { NavbarLogo } from "../../utils/allImgs";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";

const Footer = (props) => {
  return (
    <div className="footeroverlay">
    <footer className="py-5">
      <div>
        <div className="footimgbg1">
          <img
            src="https://crypto-tailwind.preview.uideck.com/images/shapes/footer-shape-2.svg"
            alt="shape"
          />
        </div>
        <div className="footimgbg2">
          <img
            src="https://crypto-tailwind.preview.uideck.com/images/shapes/footer-shape-1.svg"
            alt="shape"
          />
        </div>
      </div>
      <Container>
        <Row className="border-bottom pt-5">
          <Col md={4}>
            <Image src={NavbarLogo.src} className="img-fluid" alt="" />
            <p className="text-white my-3 my-md-4">
              We at InfoVerse provide complete blockchain development services
              to accelerate your business journey with end-to-end 24/7 support
              to ensure your project's easy launch, priority maintenance, and
              sustainable growth, with customized management to increase your
              efficiency.
            </p>
          </Col>
          <Col md={4} className="ps-3 ps-md-5">
            <div className="ps-0 ps-md-5">

              <h5 className="pt-4 pt-md-0">Quick Links</h5>
              <Nav className="flex-column fs-18 fw-regular">
                <Nav.Link className="fw-semibold">About Us</Nav.Link>
                <Nav.Link className="fw-semibold">Contact us</Nav.Link>
                <Nav.Link className="fw-semibold">Our Work</Nav.Link>
              </Nav>
            </div>
          </Col>
          <Col md={4}>
              <h5 className="pt-4 pt-md-0">Office</h5>
              <Nav className="flex-column fs-16 fw-regular">
                <Nav.Link disabled>
                  Flat No 202, ShriKrishna Enclave Near Jaynti Nagri III,
                  Beltarodi, Somalwada, Nagpur, Maharashtra 441108
                </Nav.Link>
                <Nav.Link disabled>hello@stukram.com</Nav.Link>
                <Nav.Link disabled> +91 72497 55000</Nav.Link>
              </Nav>
          </Col>
          <Col xs={12} className="py-5">
            <Nav className="justify-content-center socialico">
                <Nav.Link
                  className="mx-3"
                  href="https://twitter.com/InfoverseS"
                  target="blank"
                >
                  <BsTwitter />
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  href="https://www.facebook.com/infoversetech"
                  target="blank"
                >
                  <FaFacebookF />
                </Nav.Link>
                <Nav.Link
                  className="mx-3"
                  href="https://www.linkedin.com/company/infoversetech/"
                  target="blank"
                >
                  <FaLinkedinIn />
                </Nav.Link>
                {/* <Nav.Link href="#"><ImYoutube/></Nav.Link> */}
            </Nav>
          </Col>
        </Row>
        <Row className="pt-5 text-center">
          <Col>
            <h6 className="white m-0">
              Copyright © 2021, InfoVerse. All Rights Reserved.{" "}
            </h6>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
