import React, { useState } from "react";
import { Table, Space } from "antd";
import { useDispatch } from "react-redux";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { getAllUser } from "../../redux/slices/nguoiDungSlice";
import Modal from "antd/es/modal/Modal";
import FormUserManage from "../FormUserManage/FormUserManage";

const UserTable = (props) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
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
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Certification",
      dataIndex: "certification",
      key: "certification",
      render: (skill) => (
        <p className="textOverflow" style={{ width: "200px" }}>
          {skill}
        </p>
      ),
    },
    {
      title: "Skill",
      dataIndex: "skill",
      key: "skill",
      render: (skill) => (skill ? "Completed" : "Not Completed"),
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
                `Do you really want to delete?`
              );
              if (userConfirmed) {
                nguoiDungServ
                  .deleteUser(record.id)
                  .then((res) => {
                    alert("delete successful");
                    dispatch(getAllUser());
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

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setSelectedRowId("");
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
    setSelectedRowId("");
  };

  return (
    <>
      <Table columns={columns} dataSource={props.currentUsers} />
      {open && (
        <Modal
          title={"EDIT USER"}
          open={open}
          confirmLoading={confirmLoading}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ type: "default", htmlType: "submit" }}
          cancelButtonProps={{ htmlType: "reset" }}
        >
          <FormUserManage selectedRowId={selectedRowId} />
        </Modal>
      )}
    </>
  );
};

export default UserTable;
