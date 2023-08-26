import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/es/input/Search";
import FormJobManage from "../../Components/FormJobManage/FormJobManage";
import { getAllJob } from "../../redux/slices/congViecSlice";
import JobTable from "../../Components/JobTable/JobTable";

const JobManage = () => {
  const [open, setOpen] = useState(false);
  const [currentJobs, setCurrentJobs] = useState([]); // Dữ liệu state thay đổi theo giá trị tìm kiếm trong input

  const { congViecData } = useSelector((state) => state.congViec); // Lấy mảng user từ redux nguoiDungSlice
  const dispatch = useDispatch();

  const showModal = () => {
    setOpen(true);
  };
  const onSearch = (value) => {
    // Tìm kiếm theo tenCongViec
    const tempCurrentUsers = congViecData.filter(({ tenCongViec }) =>
      tenCongViec.toLowerCase().includes(value.trim().toLowerCase())
    );
    setCurrentJobs([...tempCurrentUsers]);
  };

  useEffect(() => {
    dispatch(getAllJob()); // Gọi API /cong-viec và lưu vào biến congViecData trên redux bằng dispatch()
  }, [dispatch]);

  useEffect(() => {
    if (congViecData) {
      setCurrentJobs([...congViecData]);
    }
  }, [congViecData]);

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
      <JobTable currentJobs={currentJobs} />
      {/* Modal */}
      {open && (
        <FormJobManage title="ADD NEW JOB" setOpen={setOpen} open={open} />
      )}
    </div>
  );
};

export default JobManage;
