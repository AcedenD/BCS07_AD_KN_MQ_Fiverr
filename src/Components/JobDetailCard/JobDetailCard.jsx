import React from "react";
import CheckOut from "../Checkout/CheckOut";

const JobDetailCard = (props) => {
  const { congViec, avatar, tenNguoiTao, tenChiTietLoai } = props;

  return (
    <div className="flex flex-col">
      <h1 className="jobTitle text-3xl font-bold ">{congViec.tenCongViec}</h1>
      <div className="seller_overview flex flex-row items-center gap-5 py-4">
        <div className="seller_avatar w-[36px] h-[36px]">
          <img className="rounded-full" src={avatar} alt="" />
        </div>
        <div className="seller_name ">
          <p className="text-md font-semibold">
            {tenNguoiTao.charAt(0).toUpperCase() + tenNguoiTao.slice(1)}
          </p>
        </div>
        <div className="seller_level">
          <p className="md:text-lg text-gray-500 text-sm">
            Level {congViec.saoCongViec} Seller
          </p>
        </div>
        <div className="seller_star_rating flex ">
          <div className="stars text-sm ">
            <i className="fa-solid fa-star text-[#ffb33e] "></i>
            <i className="fa-solid fa-star text-[#ffb33e]"></i>
            <i className="fa-solid fa-star text-[#ffb33e]"></i>
            <i className="fa-solid fa-star text-gray-300"></i>
            <i className="fa-solid fa-star text-gray-300"></i>
            <span className="mx-3 text-yellow-500">{congViec.saoCongViec}</span>
            <span className="text-gray-500">({congViec.danhGia})</span>
          </div>
        </div>
        <div>
          <p className="text-gray-500">2 Order in Queue</p>
        </div>
      </div>
      <div className="jobImg border overflow-hidden my-5">
        <img
          className="w-full object-cover hover:scale-110 transition-all duration-500 ease-in-out"
          src={congViec.hinhAnh}
          alt=""
        />
      </div>

      <div className="jobDetail_content py-6 border-b-[1px] border-gray-400 ">
        <div className="jobDescription ">
          <h2 className="text-xl font-bold text-gray-700 ">About this Gig</h2>
          <p className="text-gray-500 mt-5 text-lg">{congViec.moTa}</p>
        </div>
      </div>
      <div className="aboutSeller py-10">
        <h2 className="text-xl font-bold text-gray-700 mb-6">
          About the Seller
        </h2>
        <div className="sellerInfo flex flex-row items-center gap-5">
          <div className="seller_avatar w-[110px] h-[110px] ">
            <img className="rounded-full" src={avatar} alt="" />
          </div>
          <div className="seller_name ">
            <p className="text-lg font-semibold text-gray-600">
              {tenNguoiTao.charAt(0).toUpperCase() + tenNguoiTao.slice(1)}
            </p>
            <p className="text-md font-semibold text-gray-400 my-2">
              {tenChiTietLoai}
            </p>
            <div className="seller_star_rating flex ">
              <div className="stars">
                <i className="fa-solid fa-star text-[#ffb33e] "></i>
                <i className="fa-solid fa-star text-[#ffb33e]"></i>
                <i className="fa-solid fa-star text-[#ffb33e]"></i>
                <i className="fa-solid fa-star text-gray-300"></i>
                <i className="fa-solid fa-star text-gray-300"></i>
                <span className="mx-3 text-[#ffb33e]">
                  {congViec.saoCongViec}
                </span>
                <span className="text-gray-500">({congViec.danhGia})</span>
              </div>
            </div>
            <button className="py-2 px-4 border border-gray-500 rounded-md mt-5  font-semibold text-gray-500 hover:bg-gray-500 hover:text-white ">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailCard;
