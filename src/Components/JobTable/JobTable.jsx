import React, { useState } from "react";
import { Table, Space } from "antd";
import { useDispatch } from "react-redux";
import FormJobManage from "../FormJobManage/FormJobManage";
import { getAllJob } from "../../redux/slices/congViecSlice";
import { congViecServ } from "../../services/congViecServices";

const JobTable = (props) => {
  const [open, setOpen] = useState(false);
  const [selectedRowId, setSelectedRowId] = useState("");
  const dispatch = useDispatch();

  // render header of table
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "tenCongViec",
      key: "tenCongViec",
    },
    {
      title: "Creator",
      dataIndex: "nguoiTao",
      key: "nguoiTao",
    },
    {
      title: "Prices",
      dataIndex: "giaTien",
      key: "giaTien",
    },
    {
      title: "Describe",
      dataIndex: "moTaNgan",
      key: "moTaNgan",
      render: (Describe) => (
        <p className="textOverflow" style={{ width: "200px" }}>
          {Describe}
        </p>
      ),
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
              const jobConfirmed = window.confirm(
                `Do you really want to delete?`
              );
              if (jobConfirmed) {
                congViecServ
                  .deleteJob(record.id)
                  .then((res) => {
                    alert("delete successful");
                    dispatch(getAllJob());
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
          <button
            className="py-2 px-5 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 suration-500"
            title="Sửa"
            onClick={() => showModal(record.id)}
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        </Space>
      ),
    },
  ];

  const showModal = (id) => {
    setSelectedRowId(id ?? "");
    setOpen(true);
  };

  return (
    <>
      <Table columns={columns} dataSource={props.currentJobs} />
      {open && (
        <FormJobManage
          selectedRowId={selectedRowId}
          title="EDIT JOB"
          setOpen={setOpen}
          open={open}
        />
      )}
    </>
  );
};

export default JobTable;
