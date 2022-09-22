import dynamic from "next/dynamic";
import {
  Slider1,
  artificial,
  MobileAppDevelopment,
  SoftwareDevelopment,
  uiuxDesigning,
  WebDevelopment,
  BlackchanGif,
  tecspace1,
  tecspace2,
  tecspace3,
} from "../utils/allImgs";
import { Container, Row, Col, Image, Card, Carousel } from "react-bootstrap";
import Footer from "../layout/Footer/Footer";
import HeroContainerOne from "../containers/HeroContainers/HeroContainerOne";
import HeroContainerTwo from "../containers/HeroContainers/HeroContainerTwo";
import HeroContainerThree from "../containers/HeroContainers/HeroContainerThree";
import SpaceTech from "../components/Home/SpaceTech";
import Blog from "../containers/Blog";
import Faq from "../components/Faqs/Faq";
import OurTech from "../components/Home/OurTech";
import ClientSlider from "../containers/Sliders/ClientSlider";

const Header = dynamic(
  () => {
    return import("../layout/Header/Header");
  },
  { ssr: false }
);

const Home = () => {
  return (
    <div className="homepagebg">
      <Header />

      <section id="home" className="mainslider">
        <Carousel interval={2000} controls={false}>
          <Carousel.Item>
            <Carousel.Caption>
              <HeroContainerOne
                Title="Embrace Web 3. Embrace Transformation."
                SubTitle="Unearth the blockchain potential to overhaul enterprise &
                        institutional processes."
                BtnTitle="Learn More"
                BtnLink="#"
                Heroimg={Slider1}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <HeroContainerOne
                Title="MULTICHAIN DEFI WEB 3.0 ECOSYSTEM"
                SubTitle="Unearth the blockchain potential to overhaul enterprise &
                        institutional processes."
                BtnTitle="Learn More"
                BtnLink="#"
                Heroimg={Slider1}
              />
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption>
              <HeroContainerOne
                Title="The Next Generation Web 3.0 IGO Launchpad"
                SubTitle="Unearth the blockchain potential to overhaul enterprise &
                        institutional processes."
                BtnTitle="Learn More"
                BtnLink="#"
                Heroimg={Slider1}
              />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="maincontain"></div>
        <img
          src="https://crypto-tailwind.preview.uideck.com/images/shapes/hero-shape-1.svg"
          alt=""
          className="mainimgleft"
        />
        <img
          src="https://crypto-tailwind.preview.uideck.com/images/shapes/hero-shape-2.svg"
          alt=""
          className="mainimgright"
        />
      </section>

      <section className="info-home-about p-3 p-md-5">
        <section className="aboutbackg mt-5">
          <div className="tm-countdown-wrap tm-style1 py-5">
            <div className="tm-countdown-bg"></div>
            <Container>
              <Row className="d-flex justify-content-center align-items-center">
                <Col xs={12} md={6}>
                  <h2 className="text-white fw-bold display-5 text-center text-md-start mb-3 mb-md-0">
                    About us and our love for our work and job.
                  </h2>
                </Col>
                <Col xs={12} md={6}>
                  <p className="white fs-16 fw-regular text-center text-md-end">
                    We at InfoVerse provide complete blockchain development
                    services to accelerate your business journey with end-to-end
                    24/7 support to ensure your project's easy launch, priority
                    maintenance, and sustainable growth, with customized
                    management to increase your efficiency.
                  </p>
                  <div className="text-center text-md-end">
                    <a
                      href="#"
                      className="text-decoration-none text-capitalize white fw-bold"
                    >
                      read more
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
      </section>

      <section className="prelative">
        <div className="infobloc-sideimg">
          <img
            src="https://crypto-tailwind.preview.uideck.com/images/shapes/timeline.svg"
            alt="shape"
          />
        </div>
        <section className="py-5 bg-transparent text-end">
          <HeroContainerThree
            TextColor="white"
            TitleClass="text-white fw-bold display-6 mb-4 text-end"
            Title="Blockchain Development"
            SubTitle="Are you struggling to meet your Blockchain Development needs?"
            Discription="Our blockchain app development services make your business highly secure. We are a reputed blockchain development company with profound knowledge and experience in developing and managing decentralized solutions. By crafting over the potential while addressing each and every demand of our clients, we build efficient Blockchain services that help firms grow and stand out from the crowd. From Smart Contract development to Blockchain app development, our expertise lies everywhere. Right from analyzing the processes before they go live on the unaltered system to helping startups and enterprises raise to enhance their platforms, we have done it all.

            We at InfoVerse, have proven to be one of the best blockchain development firms that serve you with a whole package of Blockchain developers who know this technology inside out and employ prerequisite tools to develop a decentralized ecosystem for your brand.
            "
            BtnTitle="Learn More"
            BtnLink="#"
            BtnClass="btn-flip"
            Heroimg={BlackchanGif}
          />
        </section>
        <HeroContainerTwo
          TitleClass="text-white fw-bold display-6 mb-4"
          TextColor="white"
          SubTitleClass="fs-20 fw-medium my-3"
          Title="Artificial Intelligence Development"
          SubTitle="Are you struggling to meet your AI Development needs?"
          Discription="Artificial Intelligence(AI) is now taking the world by storm, and Finding the right talent to meet this increasing demand can be a challenge for companies, and that's where InfoVerse comes in. Leverage Our Expert, Artificial Intelligence Development Services, to Accelerate a Project or Create AI Solutions. Our highly skilled developers have excelled in their skills at working with multiple platforms and thus give you a ton of options and solutions while planning to step into this world."
          DiscriptionClass="text-white fs-16 fw-medium text-justify"
          BtnTitle="Learn More"
          BtnLink="#"
          BtnClass="btn-flip"
          Heroimg={artificial}
        />
      </section>

      {/* <section className="techspace2">
        <img src={tecspace1.src} className="textspaceim1" alt="banner icon" />
        <img src={tecspace2.src} className="textspaceim2" alt="banner icon" />
        <img src={tecspace3.src} className="textspaceim3" alt="banner icon" />
        <div className="container py-5 my-5">
          <div className="banner-content text-center">
            <h1 className="main-Heading-white fw-bold display-5 mb-4">
              Metaverse Web 3.0 <br /> Gaming Launcepad &amp; IGO
            </h1>
            <div className="text-white">
              The next generation gaming ecosystem for IGOs and NFT
            </div>
          </div>
        </div>
      </section>
      <SpaceTech /> */}

      <section className="py-5 ">
        <Container>
          <Row className="d-flex justify-content-center align-items-center">
            <Col xs={12} md={5} className="text-center pb-4">
              <h2 className="text-white fw-bold display-6">
                We can help you in every digital way possible
              </h2>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center align-items-center pb-5">
            <OurTech />
          </Row>
        </Container>
      </section>
      <section className="home-client-slider">
        <Container>
          <Row>
            <Col>
              <div className="ourtechcard py-5">
                <div className="imgboxe">
                  <img
                    src="https://crypto-tailwind.preview.uideck.com/images/shapes/newsletter-shape.svg"
                    alt="shape"
                  />
                </div>
                <ClientSlider />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-5 prelative bg-litedark">
        <div className="infobloc-sideimg2">
          <img
            src="https://crypto-tailwind.preview.uideck.com/images/shapes/faq-shape-2.svg"
            alt="shape"
          />
        </div>
        <div className="py-5 mt-5">
          {/* <div className="p-4"></div> */}
          {/* <Faq /> */}
        </div>
      </section>
      {/* <Blog /> */}
      <Footer />
    </div>
  );
};

export default Home;
