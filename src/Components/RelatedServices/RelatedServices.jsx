import React from "react";
import "./RelatedServices.scss";

const RelatedServices = (props) => {
  const { tenLoaiCongViec } = props;

  return (
    <div className="flex flex-col justify-center py-8">
      <h1 className="font-bold text-3xl mb-3 text-gray-700 text-center">
        Related Services to {tenLoaiCongViec}
      </h1>
      <div class="tags flex flex-row flex-wrap justify-center font-semibold ">
        <span>Minimalist logo design</span>
        <span>Signature logo design</span>
        <span>Mascot logo design</span>
        <span>3d logo design</span>
        <span>Hand drawn logo design</span>
        <span>Vintage logo design</span>
        <span>Remove background</span>
        <span>Photo restoration</span>
        <span>Photo retouching</span>
        <span>Image resize</span>
        <span>Product label design</span>
        <span>Custom twitch overlay</span>
        <span>Custom twitch emotes</span>
        <span>Gaming logo</span>
        <span>Children book illustration</span>
      </div>
    </div>
  );
};

export default RelatedServices;
