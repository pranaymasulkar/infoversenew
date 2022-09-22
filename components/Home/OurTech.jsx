import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  MobileAppDevelopment,
  SoftwareDevelopment,
  uiuxDesigning,
  WebDevelopment,
} from "../../utils/allImgs";

const OurTech = () => {
  const Techs = [
    {
      Id: "",
      Title: "Web Development",
      SubTitle:
        "I believe in lifelong learning and Learn. is a great place to learn from experts. Ive learned a lot and recommend it to all my friends and familys.",
      Link: "",
      Img: WebDevelopment,
    },
    {
      Id: "",
      Title: "Mobile App Development",
      SubTitle:
        "I believe in lifelong learning and Learn. is a great place to learn from experts. Ive learned a lot and recommend it to all my friends and familys.",
      Link: "",
      Img: MobileAppDevelopment,
    },
    {
      Id: "",
      Title: "Software Development",
      SubTitle:
        "I believe in lifelong learning and Learn. is a great place to learn from experts. Ive learned a lot and recommend it to all my friends and familys.",
      Link: "",
      Img: SoftwareDevelopment,
    },
    {
      Id: "",
      Title: "UI/UX Designing",
      SubTitle:
        "I believe in lifelong learning and Learn. is a great place to learn from experts. Ive learned a lot and recommend it to all my friends and familys.",
      Link: "",
      Img: uiuxDesigning,
    },
  ];
  return (
    <>
      {Techs.map((Items) => (
        <Col md={6}>
          <div className="ourtechcard p-4 p-md-5 mt-4" key={Items.Id}>
            <div className="imgboxe">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/shapes/testimonial-shape.svg"
                alt="shape"
              />
            </div>
            <Row className="d-flex justify-content-center">
              <Col md={3}>
                <img
                  src={Items.Img.src}
                  className="img-fluid mb-4 mb-md-0"
                  alt="author"
                />
              </Col>
              <Col md={9} className="text-white">
                <h3 className="text-white fw-semibold mb-2 mb-md-3">
                  {Items.Title}
                </h3>
                <p className="text-white mb-0 fs-16">{Items.SubTitle}</p>
              </Col>
            </Row>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurTech;
