import React from "react";
import Slider from "react-slick";

import "./CarouselServices.scss";

const CarouselServices = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [
    "https://themesflat.co/html/hnk/images/projects/1.jpg",
    "https://themesflat.co/html/hnk/images/projects/2.jpg",
    "https://themesflat.co/html/hnk/images/projects/3.jpg",
    "https://themesflat.co/html/hnk/images/projects/4.jpg",
    "https://themesflat.co/html/hnk/images/projects/5.jpg",
    "https://themesflat.co/html/hnk/images/projects/6.jpg",
    "https://themesflat.co/html/hnk/images/projects/7.jpg",
    "https://themesflat.co/html/hnk/images/projects/8.jpg",
  ];

  return (
    <div className="wrapper-services mb-5 pb-3">
      <div className="container mx-auto">
        <h1>Popular services</h1>
        <div className="row">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="px-3">
                <div className="card">
                  <div className="layout-img">
                    <img className="w-full h-full" src={img} alt="service" />
                  </div>
                  <div className="card-body">
                    <div className="title fw-bold text-fs-16">
                      Unclock growth online
                    </div>
                    <div className="name text-fs-10 textLinesOverflow">SEO</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default CarouselServices;
