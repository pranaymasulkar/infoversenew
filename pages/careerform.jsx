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

const CareerForm = () => {
  return (
    <>
      <Header />
      <section className="mainbg py-5">
        <Container>
          <Row className="py-5">
            <Col xs={12} className="text-center">
              <h1 className="main-Heading-white fw-bold display-6">Application Form</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <CureerForm/>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default CareerForm;
