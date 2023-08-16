import React, { useState } from "react";
import { Dropdown, Space, Typography, Breadcrumb, Progress } from "antd";

const Reviews = (props) => {
  const [sortBy, setSortBy] = useState("Most Recent");
  const { congViec } = props;
  const { danhGia } = congViec;

  const items = [
    {
      label: "Most Recent",
      key: "0",
      style: {
        fontWeight: "bold",
      },
      onClick: () => {
        setSortBy("Most Recent");
      },
    },
    {
      label: "Most Relevent",
      key: "1",
      style: {
        fontWeight: "bold",
      },
      onClick: () => {
        setSortBy("Most Relevent");
      },
    },
  ];

  const ratingCount = [
    {
      count: danhGia - 1,
      percent: Math.round(((danhGia - 1) / danhGia) * 100),
    },
    { count: 0, percent: 0 },
    { count: 0, percent: 0 },
    { count: 1, percent: Math.round((1 / danhGia) * 100) },
    { count: 0, percent: 0 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-4 gap-4">
      <div className="flex flex-row items-center gap-4">
        <h2 className="text-xl font-bold text-gray-700">{danhGia} Reviews</h2>
        <div className="seller_star_rating flex ">
          <div className="stars">
            <i className="fa-solid fa-star text-[#ffb33e] "></i>
            <i className="fa-solid fa-star text-[#ffb33e]"></i>
            <i className="fa-solid fa-star text-[#ffb33e]"></i>
            <i className="fa-solid fa-star text-gray-300"></i>
            <i className="fa-solid fa-star text-gray-300"></i>
            <span className="mx-3 text-[#ffb33e]">{congViec.saoCongViec}</span>
          </div>
        </div>
      </div>
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

      <div className="mr-4">
        <div className="flex flex-col items-center">
          {ratingCount.map((item, index) => {
            return (
              <div className="flex flex-row items-center gap-2 w-full justify-between">
                <span className="w-4/12 text-lg font-semibold text-blue-500">
                  {ratingCount.length - index} stars
                </span>
                <Progress
                  percent={item.percent}
                  showInfo={false}
                  strokeColor={"#ffb33e"}
                />
                <span className="w-1/12 text-blue-500 font-semibold">
                  ({item.count})
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 ">
          <h2 className="text-lg font-semibold text-gray-600 mb-2">
            Rating Breakdown
          </h2>
          <div className="flex flex-row w-full justify-between">
            <span className="font-semibold text-gray-400">
              Seller communication level
            </span>
            <span className="font-semibold text-[#ffb33e]">
              {congViec.saoCongViec}{" "}
              <i className="fa-solid fa-star text-[#ffb33e] "></i>
            </span>
          </div>
          <div className="flex flex-row w-full justify-between">
            <span className="font-semibold text-gray-400">
              Recommend to a friend
            </span>
            <span className="font-semibold text-[#ffb33e]">
              {congViec.saoCongViec}{" "}
              <i className="fa-solid fa-star text-[#ffb33e] "></i>
            </span>
          </div>
          <div className="flex flex-row w-full justify-between">
            <span className="font-semibold text-gray-400">
              Service as described
            </span>
            <span className="font-semibold text-[#ffb33e]">
              {congViec.saoCongViec}{" "}
              <i className="fa-solid fa-star text-[#ffb33e] "></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
