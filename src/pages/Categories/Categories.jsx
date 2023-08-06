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
import { Dropdown, Space, Typography } from "antd";
import CategoriesTopBar from "../../Components/CategoriesTopBar/CategoriesTopBar";

const Categories = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  // console.log(id);
  const [avaCongViec, setAvaCongViec] = useState([]);
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
        console.log(res.data.content);
        // dispatch({
        //   type: "GET_LOAI_CONG_VIEC",
        //   payload: res.data,
        // });
        setAvaCongViec(res.data.content);

        setTimeout(() => {
          dispatch(set_loading_ended());
          // console.log(loaiCongViec);
          // console.log(nhomChiTietLoai);
          // console.log(chiTietLoai);
        }, 150);
      })
      .catch((err) => {
        console.log(err);
        dispatch(set_loading_ended());
      });
  }, []);

  return (
    <div className="max-w-screen-xl mx-5 lg:mx-auto py-2">
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
