import React, { useRef, useState } from "react";
import { Space, Table, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { jobTypeServ } from "../../services/jobTypeServices";
import { getAllJobType } from "../../redux/slices/jobTypeSlice";

const JobTypeTable = () => {
  const { jobTypeData } = useSelector((state) => state.jobTypes);
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
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Job Type",
      dataIndex: "jobType",
      key: "jobType",
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
              const userConfirmed = window.confirm(
                "Do you really want to delete?"
              );
              if (userConfirmed) {
                jobTypeServ
                  .deleteJobType(record.jobType)
                  .then((res) => {
                    alert("delete successful");
                    dispatch(getAllJobType());
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
            to={`/admin/jobType/edit?jobTypeId=${record.jobType}`} 
            className='py-2 px-5 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 suration-500'
            title="Sửa"
          >
             <i class="fa-solid fa-pen-to-square"></i>
          </NavLink> */}
        </Space>
      ),
    },
  ];

  const filteredAndMappedJobTypes = jobTypeData.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  return <Table columns={columns} dataSource={filteredAndMappedJobTypes} />;
};

export default JobTypeTable;
