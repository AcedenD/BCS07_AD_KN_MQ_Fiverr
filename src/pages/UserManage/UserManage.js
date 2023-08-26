import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTable from "../../Components/UserTable/UserTable";
import FormUserManage from "../../Components/FormUserManage/FormUserManage";
import { getAllUser } from "../../redux/slices/nguoiDungSlice";
import Search from "antd/es/input/Search";

const UserManage = () => {
  const [open, setOpen] = useState(false);
  const [currentUsers, setCurrentUsers] = useState([]); // Dữ liệu state thay đổi theo giá trị tìm kiếm trong input

  const { users } = useSelector((state) => state.nguoiDung); // Lấy mảng user từ redux nguoiDungSlice
  const dispatch = useDispatch();

  const showModal = () => {
    setOpen(true);
  };
  const onSearch = (value) => {
    // Tìm kiếm theo name
    const tempCurrentUsers = users.filter(({ name }) =>
      name.toLowerCase().includes(value.trim().toLowerCase())
    );
    setCurrentUsers([...tempCurrentUsers]);
  };

  useEffect(() => {
    dispatch(getAllUser()); // Gọi API /users và lưu vào biến users trên redux bằng dispatch()
  }, [dispatch]);

  useEffect(() => {
    if (users) {
      setCurrentUsers([...users]);
    }
  }, [users]);

  return (
    <div>
      <button
        className="bg-green-600 px-5 py-2 text-white rounded-lg mb-5 "
        onClick={showModal}
      >
        <i className="fa-solid fa-plus"></i> ADD NEW
      </button>
      {/* <AdminSearch onSearch={handleSearch} /> */}
      <Search
        placeholder="Tìm kiếm theo tên..."
        onSearch={onSearch}
        allowClear
        className="mb-3"
      />
      <UserTable currentUsers={currentUsers} />
      {/* Modal */}
      {open && (
        <FormUserManage title="ADD NEW USER" setOpen={setOpen} open={open} />
      )}
    </div>
  );
};

export default UserManage;
