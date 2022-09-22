import React from "react";
import Slider from "react-slick";

const ClientSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="cliendslider p-5">
      <div>
        <Slider {...settings}>
          <div>
            <div className="text-center">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/brands/uideck-white.svg"
                className="img-fluid d-inline-block"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/brands/uideck-white.svg"
                className="img-fluid d-inline-block"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/brands/uideck-white.svg"
                className="img-fluid d-inline-block"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/brands/uideck-white.svg"
                className="img-fluid d-inline-block"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/brands/uideck-white.svg"
                className="img-fluid d-inline-block"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/brands/uideck-white.svg"
                className="img-fluid d-inline-block"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/brands/uideck-white.svg"
                className="img-fluid d-inline-block"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="text-center">
              <img
                src="https://crypto-tailwind.preview.uideck.com/images/brands/uideck-white.svg"
                className="img-fluid d-inline-block"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default ClientSlider;
