import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";

const HeroContainerThree = ({
  Title,
  TitleClass,
  TextColor,
  SubTitle,
  SubTitleClass,
  Discription,
  DiscriptionClass,
  BtnTitle,
  BtnLink,
  BtnClass,
  Heroimg,
}) => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row>
            <Col xs={12} md={6} className="pe-3 pe-md-4">
              <Image src={Heroimg.src} className="img-fluid" alt={Title} />
            </Col>
            <Col xs={12} md={6} className={TextColor}>
              <h2 className={TitleClass}>{Title}</h2>
              <h5 className="fs-20 fw-medium my-3">{SubTitle}</h5>
              <p className="fs-16 fw-medium mb-3 text-justify">{Discription}</p>
              <a href={BtnLink} className={BtnClass} data-back={BtnTitle} data-front={BtnTitle}></a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HeroContainerThree;
