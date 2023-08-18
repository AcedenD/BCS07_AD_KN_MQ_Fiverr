import React, { useEffect, useState } from "react";
import { layDuLieuLocal } from "../../utils/localStore";
import moment from "moment";
import { serviceServ } from "../../services/serviceServices";
import { message } from "antd";

const CheckoutContent = (props) => {
  const { tab } = props;
  const [messageApi, contextHolder] = message.useMessage();

  const congViec = layDuLieuLocal("congViec");
  const user = layDuLieuLocal("user");
  const currentUser = user.user;
  const [congViecThue, setCongViecThue] = useState({
    maCongViec: congViec.id,
    maNguoiThue: currentUser.id,
    ngayThue: moment(new Date()).format("DD/MM/YYYY"),
    hoanThanh: false,
  });

  const addThueCongViec = (congViecThue) => {
    serviceServ
      .addService(congViecThue)
      .then((res) => {
        messageApi.success("Thêm Công Việc Thành Công");
      })
      .catch((err) => {
        messageApi.error(
          err.response.data.content ? err.response.data.content : "Không hợp lệ"
        );
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full h-full flex flex-col">
      {contextHolder}
      <div className="flex flex-row justify-between text-2xl font-semibold mt-2 mb-8">
        <div>{tab.charAt(0).toUpperCase() + tab.slice(1)}</div>
        <div>US${congViec.giaTien}</div>
      </div>
      <div className="w-full flex flex-col">
        <p className="text-sm text-gray-400 mb-4">{congViec.moTaNgan}</p>
        <div className="flex flex-row text-sm text-gray-500 mb-4">
          <div className="w-1/2">
            <span className="font-semibold">
              <i className="fa-regular fa-clock mr-2 "></i>
              14 Days Delivery
            </span>
          </div>
          <div className="w-1/2">
            <span className="font-semibold">
              <i class="fa-solid fa-arrows-rotate mr-2"></i>
              Unlimited Revisions
            </span>
          </div>
        </div>
        <div className="flex flex-col text-gray-400 mb-4">
          <div>
            <span className="font-semibold">
              <i class="fa-solid fa-check text-[#1dbf73] mr-2"></i>
              High-Quality Visuals
            </span>
          </div>
          <div>
            <span className="font-semibold">
              <i class="fa-solid fa-check text-[#1dbf73] mr-2"></i>
              Great Communication
            </span>
          </div>
          <div>
            <span className="font-semibold">
              <i class="fa-solid fa-check text-[#1dbf73] mr-2"></i>
              Money-Back Guarantee
            </span>
          </div>
        </div>
        <div className="flex flex-col font-semibold text-lg mb-4">
          <button
            className="bg-[#1dbf73] text-white  rounded-md p-3 mb-4"
            onClick={() => {
              addThueCongViec(congViecThue);
            }}
          >
            Book Service ${congViec.giaTien}
          </button>
          <span className="inline-block text-center text-[#1dbf73]">
            Compare Packages
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
