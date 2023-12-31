import React, { useEffect, useState } from "react";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {showTopBtn && (
        <div className="top-to-btm" onClick={goToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
