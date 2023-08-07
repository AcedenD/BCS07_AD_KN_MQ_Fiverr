import React from "react";
import Banner from "../../Components/Banner/Banner";
import Trusted from "../../Components/Trusted/Trusted";
import CarouselServices from "../../Components/CarouselServices/CarouselServices";
import SellingPro from "../../Components/HomePageComponents/SellingPro.jsx";
import Testimonial from "../../Components/HomePageComponents/Testimonial.jsx";
import MainCategories from "../../Components/HomePageComponents/MainCategories.jsx";

const HomePage = () => {
  return (
    <div className="flex justify-center flex-col">
      <Banner />
      <Trusted />
      <CarouselServices />
      <SellingPro />
      <Testimonial />
      <MainCategories />
    </div>
  );
};

export default HomePage;
