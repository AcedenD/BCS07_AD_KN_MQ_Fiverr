import { Breadcrumb } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { congViecServ } from "../../services/congViecServices";
import "./JobDetail.scss";
import JobDetailCard from "../../Components/JobDetailCard/JobDetailCard";
import FAQ from "./FAQ";
import Reviews from "./Reviews";
import Comments from "./Comments";

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
          className={"breadcrumb text-lg font-semibold mb-5"}
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
        <JobDetailCard
          congViec={congViec}
          avatar={avatar}
          tenNguoiTao={tenNguoiTao}
          tenChiTietLoai={tenChiTietLoai}
        />
        <FAQ />
        <Reviews congViec={congViec} />

        <Comments id={id} avatar={avatar} tenNguoiTao={tenNguoiTao} />
      </div>
      <div className="jobDetail_right border border-blue-400 col-span-1 max-h-96 p-5">
        testing
      </div>
    </div>
  );
};

export default JobDetail;
