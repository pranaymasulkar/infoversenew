import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const HeroContainerFour = ({ Title, TitleClass, TextColor, SubTitle, SubTitleClass, Heroimg }) => {
  return (
    <>
      <section className="inabout-hero mainbg py-5">
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center py-5 text-center">
            <Col xs={12} md={7} className={TextColor}>
              <h1 className={TitleClass}>{Title}</h1>
              <p className="fs-16 fw-medium mb-3 text-white">
              {SubTitle}
              </p>
            </Col>
            <Col xs={12} md={12}>
            <Image src={Heroimg.src} className="img-fluid" alt={Title} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroContainerFour;
