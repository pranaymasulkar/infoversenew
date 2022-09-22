import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import AiServiceCard from "./AiDevService/AiServiceCard";

const AiServiceContainer = ({ Classes, Title, SubTitle }) => {
  return (
    <>
      <section className="mainbg py-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={7} className={Classes}>
              <h2 className="text-white fw-bold display-6 mb-3">{Title}</h2>
              <p className="fs-16 fw-medium mb-3 text-white">{SubTitle}</p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center">
            <AiServiceCard/>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AiServiceContainer;
