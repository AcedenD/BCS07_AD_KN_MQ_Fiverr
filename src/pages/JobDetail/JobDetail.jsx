import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { congViecServ } from "../../services/congViecServices";
import "./JobDetail.scss";

const JobDetail = () => {
  const { id } = useParams();
  const [congViec, setCongViec] = useState({});
  const [avatar, setAvatar] = useState("");
  const [tenNguoiTao, setTenNguoiTao] = useState("");
  const [tenLoaiCongViec, setTenLoaiCongViec] = useState("");
  const [tenChiTietLoai, setTenChiTietLoai] = useState("");
  const [tenNhomChiTietLoai, setTenNhomChiTietLoai] = useState("");

  useEffect(() => {
    console.log(id);
    congViecServ
      .layCongViecChiTiet(id)
      .then((res) => {
        console.log(res.data.content[0]);
        setCongViec(res.data.content[0].congViec);
        setAvatar(res.data.content[0].avatar);
        setTenNguoiTao(res.data.content[0].tenNguoiTao);
        setTenLoaiCongViec(res.data.content[0].tenLoaiCongViec);
        setTenChiTietLoai(res.data.content[0].tenChiTietLoai);
        setTenNhomChiTietLoai(res.data.content[0].tenNhomChiTietLoai);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="max-w-screen-xl mx-5 lg:mx-auto mt-32 py-2 grid grid-cols-3 gap-5 ">
      <div className="jobDetail_left border border-red-400 col-span-2 min-h-screen p-10 ">
        <Breadcrumb
          separator=">"
          items={[
            {
              title: <a href="/">Home</a>,
            },
            {
              title: <a href="/">{tenNhomChiTietLoai}</a>,
            },
            {
              title: <a href="/">{tenChiTietLoai}</a>,
            },
          ]}
        />
        <div className="flex flex-col">
          <h1 className="jobTitle text-3xl font-bold ">
            {congViec.tenCongViec}
          </h1>
          <div className="seller_overview flex flex-row items-center gap-5 py-2">
            <div className="seller_avatar w-[36px] h-[36px]">
              <img className="rounded-full" src={avatar} alt="" />
            </div>
            <div className="seller_name ">
              <p className="text-md font-semibold">
                {tenNguoiTao.charAt(0).toUpperCase() + tenNguoiTao.slice(1)}
              </p>
            </div>
            <div className="seller_level">
              <p className="text-md text-gray-500">
                Level {congViec.saoCongViec} Seller
              </p>
            </div>
            <div className="seller_star_rating flex ">
              <div className="stars">
                <i className="fa-solid fa-star text-yellow-400 "></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-yellow-400"></i>
                <i className="fa-solid fa-star text-gray-300"></i>
                <i className="fa-solid fa-star text-gray-300"></i>
                <span className="mx-3 text-yellow-500">
                  {congViec.saoCongViec}
                </span>
                <span className="text-gray-500">({congViec.danhGia})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jobDetail_right border border-blue-400 col-span-1 max-h-96 p-5">
        testing
      </div>
    </div>
  );
};

export default JobDetail;
