import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ClientCard from "../ClientProfile/ClientCard";

const ClientProfile = ({ Classes, Title, SubTitle }) => {
  return (
    <section className="info-clinetsec mainbg py-5">
      <Container>
        <Row>
          <Col className={Classes}>
            <h2 className="text-white fw-bold display-6 mb-3">{Title}</h2>
            <p className="fs-16 fw-medium mb-3 text-white">{SubTitle}</p>
          </Col>
        </Row>
        <Row className="mb-5 pb-5">
          <ClientCard />
        </Row>
        <Row className="mb-5"></Row>
      </Container>
    </section>
  );
};

export default ClientProfile;
