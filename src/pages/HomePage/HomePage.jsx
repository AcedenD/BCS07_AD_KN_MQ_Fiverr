import React, { useEffect } from "react";
import Banner from "../../Components/Banner/Banner";
import Trusted from "../../Components/Trusted/Trusted";
import CarouselServices from "../../Components/CarouselServices/CarouselServices";
import SellingPro from "../../Components/HomePageComponents/SellingPro.jsx";
import Testimonial from "../../Components/HomePageComponents/Testimonial.jsx";
import MainCategories from "../../Components/HomePageComponents/MainCategories.jsx";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
const HomePage = () => {
  useEffect(() => {
    document.title = "Fiverr - Group 3";
  }, []);

  return (
    <div>
      <Banner />
      <Trusted />
      <CarouselServices />
      <SellingPro />
      <Testimonial />
      <MainCategories />
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
