import React from "react";
import { Card, Image, Col } from "react-bootstrap";

const MissionCard = ({ ClassCol = 4, data }) => {
  return (
    <>
      {data &&
        data.map((item, key) => (
          <Col xs={12} md={ClassCol} key={key} className="d-flex align-items-stretch justify-content-center mt-3 mt-md-4">
            <Card className="iabout-mission-cards text-center ">
              <Card.Body className="py-5">
                <Image src={item.CardImg.src} className="img-fluid" alt=""/>
                <Card.Title className="text-white fw-semibold mt-4 mb-3">{item.Cardtitle}</Card.Title>
                <Card.Text className="text-white fs-16">{item.CardText}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </>
  );
};

export default MissionCard;
