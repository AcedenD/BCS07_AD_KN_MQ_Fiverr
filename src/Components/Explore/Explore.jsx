import React from "react";
import TitleCard from "../TitleCard/TitleCard";

const Explore = (props) => {
  const { nhomChiTietLoai } = props;
  console.log(nhomChiTietLoai);
  return (
    <div className="grid md:grid-cols-3 gap-5 grid-cols-2">
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
