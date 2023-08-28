import React from 'react'
import { message } from 'antd';
import { useFormik } from 'formik';
import { jobTypeServ } from '../../services/jobTypeServices';
import { getAllJobType } from '../../redux/slices/jobTypeSlice';
import { useDispatch } from 'react-redux';

const FormAddMJobType = () => {

  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: "0",
      tenLoaiCongViec: "",
    },

    onSubmit: async (values) => {
      try {
        const res = await jobTypeServ.addJobType(values);
        messageApi.success("Thêm Công Việc Thành Công");
        dispatch(getAllJobType());
        formik.resetForm();
      }
      catch (error) {
        messageApi.error(
          error.response.data.content
            ? error.response.data.content
            : "Không hợp lệ"
        );
        formik.resetForm();
      }
    },
  });

  const { handleSubmit, handleChange, values } = formik

  return <>
    {contextHolder}
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="w-full">
          <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 ">ID</label>
          <input value={values.id}
            onChange={handleChange}
            type="text"
            name="id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            readOnly />
        </div>
        <div className="w-full">
          <label htmlFor="tenLoaiCongViec" className="block mb-2 text-sm font-medium text-gray-900">Job Type</label>
          <input
            value={values.tenLoaiCongViec}
            onChange={handleChange}
            type="text"
            name="tenLoaiCongViec"
            id="tenLoaiCongViec"
            placeholder="Xin Nhập Tên Công Việc"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" />
        </div>
      </div>
      <button type="submit" className="bg-green-600 px-5 py-2 text-white rounded-lg mt-4 mb-5 hover:bg-green-800">
        Add Job Type
      </button>
    </form></>

}

export default FormAddMJobType
