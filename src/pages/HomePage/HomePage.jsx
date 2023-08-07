import React from "react";
import SellingPro from "../../Components/HomePageComponents/SellingPro.jsx";
import Testimonial from "../../Components/HomePageComponents/Testimonial.jsx";
import MainCategories from "../../Components/HomePageComponents/MainCategories.jsx";

const HomePage = () => {
  return (
    <div className="flex justify-center flex-col">
      <SellingPro />
      <Testimonial />
      <MainCategories />
    </div>
  );
};

export default HomePage;
