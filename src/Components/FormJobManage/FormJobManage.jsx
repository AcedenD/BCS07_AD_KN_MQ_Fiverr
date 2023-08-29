import { Button, Modal, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { useFormik } from "formik";
import { getAllJob } from "../../redux/slices/congViecSlice";
import { congViecServ } from "../../services/congViecServices";

const FormJobManage = (props) => {
  const { title, setOpen, open } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { congViecData } = useSelector((state) => state.congViec);
  const dispatch = useDispatch();

  // lấy chi tiết job dựa vào selectedRowId
  const jobDetail = congViecData.find(({ id }) => id === props.selectedRowId);

  const handleOk = async () => {
    setConfirmLoading(true);
    const request = {
      ...values,
      ...{
        id: jobDetail?.id ?? Math.ceil(Math.random(1, 1000)),
        // danhGia: 0,
        // hinhAnh: "",
        // moTa: "",
        // maChiTietLoaiCongViec: 0,
        // saoCongViec: 0,
      },
    };
    console.log("request: ", request);
    try {
      // Nếu jobDetail !== undefined thì API update được gọi, ngược lại API add sẽ được gọi
      // {
      //   "id": 0,
      //   "tenCongViec": "string",
      //   "danhGia": 0,
      //   "giaTien": 0,
      //   "nguoiTao": 0,
      //   "hinhAnh": "string",
      //   "moTa": "string",
      //   "maChiTietLoaiCongViec": 0,
      //   "moTaNgan": "string",
      //   "saoCongViec": 0
      // }
      if (jobDetail) {
        await congViecServ.updateJob(jobDetail?.id, request);
        messageApi.success("Update Job Thành Công");
      } else {
        await congViecServ.addJob(request);
        messageApi.success("Thêm Job Thành Công");
      }
      dispatch(getAllJob());
      setTimeout(() => {
        formik.resetForm();
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    } catch (error) {
      messageApi.error(
        error.response.data.content
          ? error.response.data.content
          : "Không hợp lệ"
      );
      setTimeout(() => {
        formik.resetForm();
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      tenCongViec: jobDetail?.tenCongViec ?? "",
      nguoiTao: jobDetail?.nguoiTao ?? 0,
      giaTien: jobDetail?.giaTien ?? 0,
      moTaNgan: jobDetail?.moTaNgan ?? "",
    },
    // use to post values to server
    validationSchema: yup.object({
      nguoiTao: yup.string().required("Vui lòng nhập nguoiTao!"),
      tenCongViec: yup.string().required("Vui lòng nhập tên!"),
      giaTien: yup.string().required("Vui lòng nhập số điện thoại!"),
      moTaNgan: yup.string().required("Vui lòng nhập mô tả!"),
    }),
  });
  const { handleChange, handleBlur, values, isValid, dirty } = formik;
  console.log("values: ", values);
  return (
    <Modal
      title={title}
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{
        type: "default",
        htmlType: "submit",
      }}
      cancelButtonProps={{ htmlType: "reset" }}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button
          key="submit"
          loading={confirmLoading}
          onClick={handleOk}
          disabled={!(dirty && isValid)}
        >
          Save
        </Button>,
      ]}
    >
      {contextHolder}
      <form className="space-y-6">
        <div>
          <label
            htmlFor="nguoiTao"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Creator
          </label>
          <div className="mt-2">
            <input
              readOnly={!!jobDetail}
              value={values.nguoiTao}
              onChange={handleChange}
              onBlur={handleBlur}
              id="nguoiTao"
              name="nguoiTao"
              type="text"
              required
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.nguoiTao.length &&
          formik.errors.nguoiTao &&
          formik.touched.nguoiTao ? (
            <p className=" text-red-600">{formik.errors.nguoiTao}</p>
          ) : (
            ""
          )}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="tenCongViec"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
          </div>
          <div className="mt-2">
            <input
              value={values.tenCongViec}
              onChange={handleChange}
              onBlur={handleBlur}
              id="tenCongViec"
              name="tenCongViec"
              type="text"
              required
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.tenCongViec.length &&
          formik.errors.tenCongViec &&
          formik.touched.tenCongViec ? (
            <p className=" text-red-600">{formik.errors.tenCongViec}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="giaTien"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Prices
            </label>
          </div>
          <div className="mt-2">
            <input
              value={values.giaTien}
              onChange={handleChange}
              onBlur={handleBlur}
              id="giaTien"
              name="giaTien"
              type="text"
              autoComplete="current-password"
              required
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.giaTien.length &&
          formik.errors.giaTien &&
          formik.touched.giaTien ? (
            <p className=" text-red-600">{formik.errors.giaTien}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="moTaNgan"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Describe
            </label>
          </div>
          <div className="mt-2">
            <input
              value={values.moTaNgan}
              onChange={handleChange}
              onBlur={handleBlur}
              id="moTaNgan"
              name="moTaNgan"
              type="text"
              autoComplete="current-password"
              required
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.moTaNgan.length &&
          formik.errors.moTaNgan &&
          formik.touched.moTaNgan ? (
            <p className=" text-red-600">{formik.errors.moTaNgan}</p>
          ) : (
            ""
          )}
        </div>
      </form>
    </Modal>
  );
};

export default FormJobManage;
