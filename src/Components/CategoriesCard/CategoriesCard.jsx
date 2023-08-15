import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesCard = (props) => {
  const { congViecInfo } = props;
  console.log(congViecInfo);
  const { tenNguoiTao, avatar, congViec } = congViecInfo;

  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
      <img
        class="rounded-t-lg object-cover w-full h-56"
        src={congViec.hinhAnh}
        alt=""
      />
      <div class="p-3 h-48 ">
        <div className="seller-info flex items-center gap-3  pr-3">
          <div className="avatar">
            <img
              width={27}
              height={27}
              className="rounded-full"
              src={avatar}
              alt="avatar"
            />
          </div>
          <div className="name">
            <h2 className="font-bold text-lg ">
              {tenNguoiTao.charAt(0).toUpperCase() + tenNguoiTao.slice(1)}
            </h2>
            <p className="font-semibold text-gray-500">
              Level {congViec.saoCongViec} Seller
            </p>
          </div>
        </div>

        <NavLink to={`/jobDetail/${congViec.id}`}>
          <h5 class="mt-5 mb-2 text-lg tracking-tight text-gray-600 font-semibold hover:text-[#1dbf73] transition duration-200 ease-in-out h-[60px]">
            {congViec.tenCongViec}
          </h5>
        </NavLink>
        <div>
          <i class="fa-solid fa-star text-yellow-500 text-sm">
            {congViec.saoCongViec}
          </i>
          <span className="text-gray-400 text-sm"> ({congViec.danhGia})</span>
        </div>
      </div>
      <div className="p-2 border-t-2 flex justify-between items-center">
        <i class="fa-solid fa-heart text-gray-400 hover:text-red-300 transition ease-in-out duration-200"></i>
        <p className="text-gray-500 font-semibold text-sm">
          STARTING AT
          <span className="text-gray-700 font-bold text-lg ml-1">
            US${congViec.giaTien}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CategoriesCard;
