import React from "react";
import { Col, Form, Button, Row } from "react-bootstrap";

const CureerForm = () => {
  return (
    <>
    <div className="px-5 mx-5">
      <Form>
        <Row className="bgbunting p-5 rounded">
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">First name</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Last name</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Email Id</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Mobile No.</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Applied For</Form.Label>
              <Form.Control size="lg" type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Upload resume</Form.Label>
              <Form.Control size="lg" type="file" />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="white fs-14 fw-regular text-capitalize">Description</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
          </Col>
          <Col xs={12} className="text-center">
            <Button variant="outline-light" size="lg" className="mt-2 px-5 py-3">Submit</Button>{" "}
          </Col>
        </Row>
      </Form>
    </div>
    </>
  );
};

export default CureerForm;
