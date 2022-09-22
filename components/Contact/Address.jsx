import React from "react";
import { Card } from "react-bootstrap";
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Address = () => {
  return (
    <>
      <Card className="bgbunting border-0 mb-4">
        <Card.Body className="py-4">
          <h3 className="white fs-24 fw-semibold">Send us a message</h3>
          <Card.Text className="white d-flex justify-content-start">
          <FaLocationArrow size={18} className="me-2"/> 
            <span> Flat No 202, ShriKrishna Enclave Near Jaynti Nagri III, Beltarodi, Somalwada, Nagpur, Maharashtra 441108</span>
          </Card.Text>
          <Card.Text className="white">
            <a href="#" className="white text-decoration-none">
              <AiOutlineMail size={15} className="me-1"/> info@infoverse.com
            </a>
          </Card.Text>
          <Card.Text className="white">
            <FiPhoneCall size={15} className="me-1"/> +91 72497 55000
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Address;
