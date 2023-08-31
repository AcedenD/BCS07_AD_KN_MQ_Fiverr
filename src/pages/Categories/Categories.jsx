import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { congViecServ } from "../../services/congViecServices";
import {
  set_loading_ended,
  set_loading_started,
} from "../../redux/slices/loadingSlice";
import CategoriesCard from "../../Components/CategoriesCard/CategoriesCard";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography, Breadcrumb } from "antd";
import CategoriesTopBar from "../../Components/CategoriesTopBar/CategoriesTopBar";

const Categories = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id);
  const [avaCongViec, setAvaCongViec] = useState([]);
  const [loaiCongViec, setLoaiCongViec] = useState("");
  const [tenLoaiCongViec, setTenLoaiCongViec] = useState("");
  const [sortBy, setSortBy] = useState("Relevance");
  const items = [
    {
      label: "Relevance",
      key: "0",
      style: {
        fontWeight: "bold",
      },
      onClick: () => {
        setSortBy("Relevance");
      },
    },
    {
      label: "Best Selling",
      key: "1",
      style: {
        fontWeight: "bold",
      },
      onClick: () => {
        setSortBy("Best Selling");
      },
    },
    {
      label: "New Arrivals",
      key: "2",
      style: {
        fontWeight: "bold",
      },
      onClick: () => {
        setSortBy("New Arrivals");
      },
    },
  ];

  useEffect(() => {
    dispatch(set_loading_started());
    console.log("getting loai cong viec id: " + id);
    congViecServ
      .layCongViecTheoChiTietLoai(id)
      .then((res) => {
        // console.log(res.data);
        console.log(res.data.content);
        setAvaCongViec(res.data.content);
        // console.log(res.data.content[0].tenChiTietLoai);
        setLoaiCongViec(res.data.content[0].tenChiTietLoai);
        setTenLoaiCongViec(res.data.content[0].tenLoaiCongViec);
        document.title = `${res.data.content[0].tenChiTietLoai}`;

        setTimeout(() => {
          dispatch(set_loading_ended());
        }, 150);
      })
      .catch((err) => {
        console.log(err);
        dispatch(set_loading_ended());
      });
  }, [id]);

  useEffect(() => {
    dispatch(set_loading_started());
    console.log("getting loai cong viec id: " + id);
    congViecServ
      .layCongViecTheoChiTietLoai(id)
      .then((res) => {
        // console.log(res.data);
        console.log(res.data.content);
        setAvaCongViec(res.data.content);
        // console.log(res.data.content[0].tenChiTietLoai);
        setLoaiCongViec(res.data.content[0].tenChiTietLoai);
        setTenLoaiCongViec(res.data.content[0].tenLoaiCongViec);
        document.title = `${res.data.content[0].tenChiTietLoai}`;

        setTimeout(() => {
          dispatch(set_loading_ended());
        }, 150);
      })
      .catch((err) => {
        console.log(err);
        dispatch(set_loading_ended());
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-5 lg:mx-auto py-24">
      <Breadcrumb
        separator=">"
        items={[
          {
            title: <a href="/">Home</a>,
          },
          {
            title: <a href="">{tenLoaiCongViec}</a>,
          },
        ]}
      />
      <h1 className="font-bold text-3xl my-3 text-gray-700">{loaiCongViec}</h1>
      <CategoriesTopBar />
      <div className="flex justify-between items-center">
        <h1 className="my-4 font-semibold text-gray-500">
          {avaCongViec.length} services avaliable
        </h1>

        <div>
          <span className="font-semibold text-gray-400 text-lg">Sort by </span>
          <Dropdown
            menu={{
              items,
              selectable: true,
              // defaultSelectedKeys: ["2"],
            }}
            trigger={["click"]}
          >
            <a
              className="font-semibold text-gray-700 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                console.log(e);
              }}
            >
              <Space>
                <span className="text-xl">{sortBy}</span>
                <i class="fa-solid fa-chevron-down"></i>
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-5 grid-cols-2">
        {avaCongViec.map((item, index) => {
          return <CategoriesCard key={index} congViecInfo={item} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
