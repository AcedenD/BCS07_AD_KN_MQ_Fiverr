import React from "react";

const StarRating = (props) => {
  const { setSaoBinhLuan } = props;
  const clickAreas = document.querySelectorAll(".stars_rating div");
  const stars = document.querySelectorAll(".stars_rating i");

  clickAreas.forEach((area, i) => {
    area.addEventListener("click", () => {
      const starCount = i + 1;
      console.log(starCount);
      setSaoBinhLuan(starCount);
      stars.forEach((star, i) => {
        if (i < starCount) {
          star.classList.add("active");
        } else {
          star.classList.remove("active");
        }
      });
    });
    area.addEventListener("mouseover", () => {
      const starCount = i + 1;
      stars.forEach((star, i) => {
        if (i < starCount) {
          star.classList.add("hover");
        } else {
          star.classList.remove("hover");
        }
      });
    });
  });

  return (
    <div>
      <div className="stars_rating flex flex-row items-center">
        <i className="fa-solid fa-star  ">
          <div></div>
        </i>
        <i className="fa-solid fa-star ">
          <div></div>
        </i>
        <i className="fa-solid fa-star ">
          <div></div>
        </i>
        <i className="fa-solid fa-star ">
          <div></div>
        </i>
        <i className="fa-solid fa-star ">
          <div></div>
        </i>
        <span className="text-lg font-semibold ml-3">Rating</span>
      </div>
    </div>
  );
};

export default StarRating;
