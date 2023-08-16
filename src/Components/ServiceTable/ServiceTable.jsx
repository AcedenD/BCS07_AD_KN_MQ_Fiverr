import React, { useRef, useState } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { serviceServ } from "../../services/serviceServices";
import { getAllService } from "../../redux/slices/serviceSlice";

const ServiceTable = () => {
  const { serviceData } = useSelector((state) => state.services);
  const dispatch = useDispatch();
  const ref = useRef();

  //   const shortenText = (text, maxLength) => {
  //     if (text.split(' ').length > maxLength) {
  //       const words = text.split(' ');
  //       return words.slice(0, maxLength).join(' ') + '...';
  //     }
  //     return text;
  //   };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: "Job ID",
      dataIndex: "maCongViec",
      key: "maCongViec",
    },
    {
      title: "Hirer ID",
      dataIndex: "maNguoiThue",
      key: "maNguoiThue",
    },
    {
      title: "Hire Day",
      dataIndex: "ngayThue",
      key: "ngayThue",
    },
    {
      title: "Condition",
      dataIndex: "hoanThanh",
      key: "hoanThanh",
      render: (maHoanThanh) => (maHoanThanh ? "Completed" : "Not Completed"),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <button
            className="py-2 px-5 bg-red-600 text-white rounded-lg hover:bg-red-700 suration-500"
            title="Xóa"
            onClick={() => {
              console.log(record);
              const userConfirmed = window.confirm(
                `Do you really want to delete?}`
              );
              if (userConfirmed) {
                serviceServ
                  .deleteService(record.id)
                  .then((res) => {
                    alert("delete successful");
                    dispatch(getAllService());
                  })
                  .catch((err) => {
                    console.log(err);
                    alert("There is a problem deleting");
                  });
              }
            }}
          >
            <i class="fa-solid fa-trash-can"></i>
          </button>
          {/* <NavLink
            to={`/admin/service/edit?serviceId=${record.service}`} 
            className='py-2 px-5 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 suration-500'
            title="Sửa"
          >
             <i class="fa-solid fa-pen-to-square"></i>
          </NavLink> */}
        </Space>
      ),
    },
  ];


  return (
    <Table columns={columns} dataSource={serviceData} />
  )
}


export default ServiceTable;
