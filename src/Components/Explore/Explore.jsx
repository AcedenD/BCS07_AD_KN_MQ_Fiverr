import React from "react";
import TitleCard from "../TitleCard/TitleCard";

const Explore = (props) => {
  const { nhomChiTietLoai } = props;
  console.log(nhomChiTietLoai);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1">
      {nhomChiTietLoai.map((item, index) => {
        return (
          <TitleCard
            key={index}
            category={item}
            // loaiCongViec={loaiCongViec}
          />
        );
      })}
    </div>
  );
};

export default Explore;
