import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { layDuLieuLocal } from "../../utils/localStore";
import moment from "moment";
import StarRating from "./StarRating";
import { binhLuanServ } from "../../services/binhLuanServices";
import { message } from "antd";

const AddComment = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const congViec = layDuLieuLocal("congViec");
  const user = layDuLieuLocal("user");
  const formik = useFormik({
    initialValues: {
      id: "0",
      maCongViec: congViec.id,
      maNguoiBinhLuan: user.user.id,
      noiDung: "",
      ngayBinhLuan: moment(new Date()).format("DD/MM/YYYY"),
      saoBinhLuan: "0",
    },

    onSubmit: async (values) => {
      console.log(values);
      try {
        // const res = await binhLuanServ.addBinhLuan(values);
        messageApi.success("Thêm Công Việc Thành Công");
        // console.log(res);
        // formik.resetForm();
      } catch (error) {
        messageApi.error(
          error.response.data.content
            ? error.response.data.content
            : "Không hợp lệ"
        );
        // formik.resetForm();
      }
    },
  });

  const { handleSubmit, handleChange, values } = formik;

  return (
    <div>
      {contextHolder}
      <div className="flex flex-row my-4 items-center justify-between">
        <h2 className="text-xl font-bold text-gray-700">Leave some comments</h2>
        <StarRating handleChange={handleChange} />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid ">
          <div className="w-full">
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-gray-900 "
            ></label>
            <textarea
              value={values.noiDung}
              onChange={handleChange}
              type="text"
              name="noiDung"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-3 h-24"
            />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4"></div>
        <button
          type="submit"
          className="bg-green-600 px-5 py-2 text-white rounded-lg mt-4 mb-5 hover:bg-green-800"
        >
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddComment;