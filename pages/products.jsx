import dynamic from "next/dynamic";
import { Col, Container, Row, Image } from "react-bootstrap";
import Footer from "../layout/Footer/Footer";
const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Products = () => {
  return (
    <>
      <Header />
      <section className="mainbg py-5">
        <Container>
          <Row className="py-5">
            <Col xs={12} className="text-center p-5">
              <h1 className="main-Heading-white fw-bold display-6">Coming Soon</h1>
              
            </Col>
          </Row>
        </Container>
      </section>
      
      <Footer />
    </>
  );
};

export default Products;
