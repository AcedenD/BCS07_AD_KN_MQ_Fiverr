import React, { useEffect, useState } from "react";
import { layDuLieuLocal } from "../../utils/localStore";
import moment from "moment";
import { serviceServ } from "../../services/serviceServices";
import { Table, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { layCongViecChiTiet } from "../../redux/slices/congViecSlice";
import { useParams } from "react-router-dom";

const CheckoutContent = (props) => {
  const { tab, congViec } = props;
  const { id } = useParams();
  const [messageApi, contextHolder] = message.useMessage();
  const [hide, setHide] = useState(true);

  const userId = layDuLieuLocal("userId");
  const [congViecThue, setCongViecThue] = useState({
    maCongViec: id,
    maNguoiThue: userId,
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
        if (userId) {
          messageApi.error(
            err.response.data.content
              ? err.response.data.content
              : "Không hợp lệ"
          );
        } else {
          messageApi.error("Vui lòng hãy đăng nhập");
        }
      });
  };

  useEffect(() => {}, []);

  const giaTienTheoTab = (tab) => {
    switch (tab) {
      case "basic":
        return congViec?.giaTien;
      case "standard":
        return congViec?.giaTien + 5;
      case "premium":
        return congViec?.giaTien + 10;
      default:
        return congViec?.giaTien;
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {contextHolder}
      <div className="flex flex-row justify-between text-2xl font-semibold mt-2 mb-8">
        <div>{tab.charAt(0).toUpperCase() + tab.slice(1)}</div>
        <div>US${giaTienTheoTab(tab)}</div>
      </div>
      <div className="w-full flex flex-col">
        <p className="text-sm text-gray-400 mb-4">{congViec?.moTaNgan}</p>
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
            className="bg-[#1dbf73] text-white  rounded-md p-3 mb-4 hover:bg-[#10a367]"
            onClick={() => {
              addThueCongViec(congViecThue);
            }}
          >
            Book Service ${giaTienTheoTab(tab)}
          </button>
          <span
            className="inline-block text-center text-[#1dbf73] hover:text-[#10a367] hover:cursor-pointer "
            onClick={() => {
              let compare_ele = document.querySelector(".compare_package");
              if (hide) {
                setHide(false);
                compare_ele.classList.remove("hidden");
              } else {
                setHide(true);
                compare_ele.classList.add("hidden");
              }
            }}
          >
            Compare Packages
          </span>

          <div className="compare_package" hidden={hide}>
            <div className="flex flex-row text-sm  mt-4 border border-gray-200 justify-center items-center ">
              <table class="w-full text-sm text-center  ">
                <thead class="text-xs text-gray-700 uppercase ">
                  <tr>
                    <th scope="col" class="px-3 py-3   ">
                      Package
                    </th>
                    <th scope="col" class="px-3 py-3 text-white bg-[#1dbf73]">
                      Basic
                    </th>
                    <th scope="col" class="px-3 py-3   ">
                      Standard
                    </th>
                    <th scope="col" class="px-3 py-3 text-white bg-[#1dbf73]">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-700 font-semibold">
                  <tr>
                    <th scope="row" class="px-2 py-3   ">
                      Price
                    </th>
                    <td class="px-2 py-3 text-white bg-[#1dbf73]">
                      ${congViec?.giaTien}
                    </td>
                    <td class="px-2 py-3  ">${congViec?.giaTien + 5}</td>
                    <td class="px-2 py-3 bg-[#1dbf73] text-white">
                      ${congViec?.giaTien + 10}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" class="px-2 py-3  ">
                      Number of pages
                    </th>
                    <td class="px-2 py-3 text-white bg-[#1dbf73]">1</td>
                    <td class="px-2 py-3  ">2</td>
                    <td class="px-2 py-3  bg-[#1dbf73] text-white">3</td>
                  </tr>
                  <tr>
                    <th scope="row" class="px-2 py-3   whitespace-nowrap ">
                      Delivery Time
                    </th>
                    <td class="px-2 py-3 text-white bg-[#1dbf73]">14 Days</td>
                    <td class="px-2 py-3  ">10 Days</td>
                    <td class="px-2 py-3 bg-[#1dbf73] text-white">7 Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutContent;
