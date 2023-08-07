import React from "react";
import "./MainCategories.scss";
const MainCategories = () => {
  return (
    <div className="main-categories container">
      <h1 className="text-3xl font-semibold mb-10 text-gray-600">
        Explore the marketplace
      </h1>

      <div className="gap-12 justify-end grid grid-cols-3 lg:grid-cols-6 ">
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
        <div className="main-item">
          <a href="">
            <img
              className="main-item-img"
              src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
              alt="Graphics & Design"
            />
            Graphics & Design
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainCategories;
