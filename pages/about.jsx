import dynamic from "next/dynamic";
import { Col, Container, Row, Image } from "react-bootstrap";
import MissionCard from "../components/About/MissionCard";
import {
  AbouHero,
  OurMision,
  BuildingPlatform,
  SecurUserData,
  MostCreadibility,
  BigDataInsights,
} from "../utils/allImgs";
import MissionData from "../data/data-components/missioncard-data";
import Counters from "../components/About/Counters";
import OurTeam from "../components/About/OurTeam";
import Footer from "../layout/Footer/Footer";
import HeroContainerFour from "../containers/HeroContainers/HeroContainerFour";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const About = () => {
  return (
    <>
      <Header />
      <HeroContainerFour
        TextColor="white text-center py-5 mb-5"
        Title="About InfoVerse"
        TitleClass="text-white fw-bold display-6 mb-3"
        SubTitle="We believe in transforming businesses with technological innovation!"
        Heroimg= {AbouHero}
      />
      <section className="pt-5">
        <Container>
          <Row className="d-flex justify-content-center align-items-center py-5">
            <Col>
              <h2 className="text-white fw-bold display-6 mb-3">OUR MISSION</h2>
              <h6 className="fs-20 fw-semibold mb-3 text-white">InfoVerse aim to change and improve businesses with our progressive and innovative technical solutions.</h6>
              <p className="fs-16 fw-medium mb-3 text-white text-justify">We have been working in the development space for 3+ years. We help companies and individuals in adapting as well as adopting digital transformation. Our team starts by listening to the issues, requirements, challenges, and objectives. The process continues with an effort to understand the business, market sector, and competitors to develop information combined with our technical knowledge, expertise, and research to provide the best solution at the lowest cost.</p>
              <p className="fs-16 fw-medium mb-3 text-white text-justify">We at InfoVerse have been fortunate to work across various dimensions and industrial sectors and have gained experience in the most complex business environments. We always strive to build scalable technology solutions that fulfill our customer's requirements in the most remarkable and superficial ways. InfoVerse has been a trustworthy company with a solid and result-oriented global delivery network focused on your success.</p>
            </Col>
            <Col className="text-end">
              <Image src={OurMision.src} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pb-5 mb-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <MissionCard data={MissionData} />
          </Row>
        </Container>
      </section>
      <section className="mainbg py-5">
        <Container>
          <Row className="py-5 d-flex justify-content-center align-items-center">
            <Col md={6}>
              <Image src={OurMision.src} className="img-fluid" alt="" />
            </Col>  
            <Col md={6}>
              <h2 className="text-white fw-bold display-6 mb-3">OUR VISIONS</h2>
              <h6 className="fs-20 fw-semibold mb-3 text-white">We at InfoVerse aim to power up transformation with blockchain for businesses globally to build, scale and launch great projects!</h6>
              <p className="fs-16 fw-medium mb-3 text-white text-justify">We have acquired expertise and a deep understanding of business models and processes across various industries in Web3.0. we have the vision to deliver highly secure, innovative, and independent blockchain development solutions leveraging real-time-driven technologies to assist our customers in making a long-lasting business impression and revenue growth. </p>
              <p className="fs-16 fw-medium mb-3 text-white text-justify">We believe in extending our capabilities to offer more customized Blockchain development services for creating next-generation solutions for your unique business needs and holistic development in the near future to stay competitive.</p>
            </Col>
          </Row>
          {/* <Row className="d-flex justify-content-center align-items-center bgbunting pt-3">
            <Counters />
          </Row> */}
          <Row className="d-flex justify-content-center align-items-center py-5">
            <Col md={6}>
              <h2 className="text-white fw-bold display-6 mb-3">Why InfoVerse?</h2>
              <p className="fs-16 fw-medium mb-3 text-white text-justify">InfoVerse bridges the development gap between your business idea and Web3. We simplify the integration of NFTs, tokens, Defi, and other blockchain data into any project.</p>
              <p className="fs-16 fw-medium mb-3 text-white text-justify">At InfoVerse, we offer top-notch blockchain development services. Drawing on our broad experience in the blockchain domain, we can deliver a distinctly tailored service to our clients.</p>
              <p className="fs-16 fw-medium mb-3 text-white text-justify">No matter which industry you operate in, from finance, e-commerce, fintech to healthcare, or even supply chain management, we at InfoVerse have the perfect blockchain development recipe to meet your needs.</p>
              <p className="fs-16 fw-medium mb-3 text-white text-justify">If you want to discuss more about how InfoVerse can transform your blockchain operations, please get in touch with us today.</p>
              {/* <Row className="mt-5">
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-5"
                >
                  <Image src={SecurUserData.src} className="img-fluid" alt="" />
                  <div className="ms-5">
                    <h5 className="fs-22 fw-semibold text-capitalize white">24/7 Fast-paced Support</h5>
                    <p className="fs-16 fw-medium white mb-0">
                    Customer-centric services to build feasible business solutions. We work as the bridge between our clients and their vision to expand their revenues and capabilities.
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-5"
                >
                  <Image
                    src={MostCreadibility.src}
                    className="img-fluid pe-3"
                    alt=""
                  />
                  <div className="ms-5">
                    <h5 className="fs-22 fw-semibold text-capitalize white">Build Fast and Smart</h5>
                    <p className="fs-16 fw-medium white mb-0">
                    We are a leading service company with excellent development capabilities that accelerates your business journey with Web3 solutions.
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-5"
                >
                  <Image
                    src={BigDataInsights.src}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="ms-5">
                    <h5 className="fs-22 fw-semibold text-capitalize white">Customized Management</h5>
                    <p className="fs-16 fw-medium white mb-0">
                    Enable trusted data exchange and workflow automation beyond the boundaries with distributed ledger technology and blockchain as we keep you covered from strategy to rolling out of your project to meet your business goals.
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-5"
                >
                  <Image
                    src={BigDataInsights.src}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="ms-5">
                    <h5 className="fs-22 fw-semibold text-capitalize white">Reduced costs</h5>
                    <p className="fs-16 fw-medium white mb-0">
                    We enhance clients' IT security, improve traceability, and increase efficiency with reduced costs. Open new revenue opportunities with a new era of collaboration and innovation through web3 to get the lead in the business world.
                    </p>
                  </div>
                </Col>
                <Col
                  xs={12}
                  className="d-flex justify-content-center align-items-center mb-5"
                >
                  <Image
                    src={BigDataInsights.src}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="ms-5">
                    <h5 className="fs-22 fw-semibold text-capitalize white">Worldwide services</h5>
                    <p className="fs-16 fw-medium white mb-0">
                    We provide integrated development services tailored to global, fast-paced, changing market trends that adapt to the ever-changing new normal web3.
                    </p>
                  </div>
                </Col>
              </Row> */}
            </Col>
            <Col md={6} className="text-center text-md-end">
              <Image src={BuildingPlatform.src} className="img-fluid" alt="" />
            </Col>
            {/* <Col>
              <p className="fs-16 fw-medium white">At InfoVerse, we offer top-notch blockchain development services. Drawing on our broad experience in the blockchain domain, we can deliver a distinctly tailored service to our clients.
              No matter which industry you operate in, from finance, e-commerce, fintech to healthcare, or even supply chain management, we at InfoVerse have the perfect blockchain development recipe to meet your needs.
              If you want to discuss more about how InfoVerse can transform your blockchain operations, please get in touch with us today.</p>
            </Col> */}
          </Row>
        </Container>
      </section>
      {/* <OurTeam/> */}
      <Footer />
    </>
  );
};

export default About;
