import React from "react";
import { Dropdown, Space, Typography } from "antd";

const CategoriesTopBar = () => {
  const items = [
    {
      label: <span className="font-bold text-[#1dbf73]">All Categories </span>,
      key: "0",
      disabled: true,
      style: {
        cursor: "default",
      },
    },
    {
      label: (
        <div className="group/label flex justify-between">
          <span className="font-bold group-hover/label:text-[#1dbf73] transition-all duration-200">
            Web Programming
          </span>
          <span className="ml-3">(20,566)</span>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="group/label flex justify-between">
          <span className="font-bold group-hover/label:text-[#1dbf73] transition-all duration-200">
            Data Entry
          </span>
          <span>(12,566)</span>
        </div>
      ),
      key: "2",
    },
  ];
  return (
    <div className="flex lg:justify-between flex-col items-center lg:flex-row">
      <div className="flex gap-3 ">
        <Dropdown
          className="border border-gray-300 rounded-md px-2 py-1"
          menu={{
            items,
          }}
          placement="bottomLeft"
          trigger={["click"]}
        >
          <a
            className="font-semibold text-gray-700 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Space>
              <span className="text-lg">Category</span>
              <i class="fa-solid fa-chevron-down"></i>
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          className="border border-gray-300 rounded-md px-2 py-1"
          menu={{
            items,
          }}
          placement="bottomLeft"
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
              <span className="text-lg">Services Options</span>
              <i class="fa-solid fa-chevron-down"></i>
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          className="border border-gray-300 rounded-md px-2 py-1"
          menu={{
            items,
          }}
          placement="bottomLeft"
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
              <span className="text-lg">Seller Details</span>
              <i class="fa-solid fa-chevron-down"></i>
            </Space>
          </a>
        </Dropdown>
        <Dropdown
          className="border border-gray-300 rounded-md px-2 py-1"
          menu={{
            items,
          }}
          placement="bottomLeft"
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
              <span className="text-lg">Delivery Time</span>
              <i class="fa-solid fa-chevron-down"></i>
            </Space>
          </a>
        </Dropdown>
      </div>
      <div className="flex items-center gap-10 md:mt-3">
        <label className="relative inline-flex items-center cursor-pointer h-full">
          <input type="checkbox" defaultValue className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-400  rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute sm:after:top-[4px] after:top-[16px] after:left-[2px] after:bg-white  after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:bg-[#1dbf73]" />
          <span className="ml-3 font-semibold text-gray-500 ">
            Pro services
          </span>
        </label>
        <label className="relative inline-flex items-center cursor-pointer h-full">
          <input type="checkbox" defaultValue className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-400  rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute sm:after:top-[4px] after:top-[16px] after:left-[2px] after:bg-white  after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:bg-[#1dbf73]" />
          <span className="ml-3 font-semibold text-gray-500 ">
            Local sellers
          </span>
        </label>
        <label className="relative inline-flex items-center cursor-pointer h-full">
          <input type="checkbox" defaultValue className="sr-only peer" />
          <div className="w-9 h-5 bg-gray-400  rounded-full peer  peer-checked:after:translate-x-full  after:content-[''] after:absolute sm:after:top-[4px] after:top-[16px] after:left-[2px] after:bg-white  after:rounded-full after:h-4 after:w-4 after:transition-all after:duration-300 peer-checked:bg-[#1dbf73]" />
          <span className="ml-3 font-semibold text-gray-500 ">
            Online sellers
          </span>
        </label>
      </div>
    </div>
  );
};

export default CategoriesTopBar;
