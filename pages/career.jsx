import dynamic from "next/dynamic";
import React from "react";
import Footer from "../layout/Footer/Footer";
import { Col, Container, Row, Image } from "react-bootstrap";
import CureerForm from "../components/Career/CureerForm";
import Address from "../components/Contact/Address";
import ContactLocation from "../components/Contact/ContactLocation";
import JobAccordian from "../components/Career/JobAccordian";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Career = () => {
  return (
    <>
      <Header />
      <section className="mainbg py-5">
        <Container>
          <Row className="py-5">
            <Col xs={12} className="text-center p-5">
              <h1 className="text-white fw-bold display-6 mb-3">CAREER IN INFOVERSE</h1>
              <h5 className="fs-16 fw-medium mb-3 text-white">
              At InfoVerse, work is fun, with scope to experiment, learn, make mistakes, fall flat, yet in the end, produce results. We are a well-structured organization that believes in collaborative efforts more than just titles. Our culture is not just about the informal attire that we wear, nor about the fun that goes unnoticed. Instead, it is an interesting mash-up of passion and drives that are difficult to define, but easy to spot. Above all, it is intellectual stimulation combined with enthusiasm that flows across our organization.
              </h5>
            </Col>
          </Row>
          <Row>
            {/* <Col md={6}>
              <Address/>
              <ContactLocation/>
            </Col> */}
            <Col xs={12} className="">
                <h3 className="text-white fw-bold mb-4 text-center">We are currently recruiting for the following positions</h3>
            </Col>
            <Col xs={12} className="px-3 px-md-5 mx-md-5 mx-0 pb-5">
                <JobAccordian/>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Career;
