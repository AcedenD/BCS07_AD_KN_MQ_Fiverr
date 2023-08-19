import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { congViecServ } from "../../services/congViecServices";
import {
  set_loading_ended,
  set_loading_started,
} from "../../redux/slices/loadingSlice";

import Explore from "../../Components/Explore/Explore";
import MostPopular from "../../Components/MostPopular/MostPopular";
import TitleBanner from "../../Components/TitleBanner/TitleBanner";
import RelatedServices from "../../Components/RelatedServices/RelatedServices";

const Title = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id);
  const [loaiCongViec, setLoaiCongViec] = useState({});
  const [nhomChiTietLoai, setNhomChiTietLoai] = useState([]);
  const [chiTietLoai, setChiTietLoai] = useState([]);

  useEffect(() => {
    dispatch(set_loading_started());
    console.log("getting loai cong viec id: " + id);
    congViecServ
      .layChiTietLoaiCongViec(id)
      .then((res) => {
        console.log(res.data.content[0]);
        // dispatch({
        //   type: "GET_LOAI_CONG_VIEC",
        //   payload: res.data,
        // });
        document.title = `Explore ${res.data.content[0].tenLoaiCongViec}`;
        console.log(res.data.content[0]);
        setLoaiCongViec(res.data.content[0]);
        console.log(res.data.content[0].dsNhomChiTietLoai);
        setNhomChiTietLoai(res.data.content[0].dsNhomChiTietLoai);

        setTimeout(() => {
          dispatch(set_loading_ended());
          // console.log(loaiCongViec);
          // console.log(nhomChiTietLoai);
          // console.log(chiTietLoai);
        }, 800);
      })
      .catch((err) => {
        console.log(err);
        dispatch(set_loading_ended());
      });
  }, []);

  return (
    <div className="max-w-full">
      <TitleBanner tenLoaiCongViec={loaiCongViec.tenLoaiCongViec} />
      <div className="max-w-screen-xl mx-10 lg:mx-auto   py-10 ">
        <MostPopular tenLoaiCongViec={loaiCongViec.tenLoaiCongViec} />
        <div>
          <h1 className="font-bold text-xl md:text-3xl mb-3 text-gray-700">
            {"Explore "}
            {loaiCongViec.tenLoaiCongViec}
          </h1>
        </div>
        <Explore nhomChiTietLoai={nhomChiTietLoai} />
        <RelatedServices tenLoaiCongViec={loaiCongViec.tenLoaiCongViec} />
      </div>
    </div>
  );
};

export default Title;
