import { Modal, Radio, message } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { getAllUser } from "../../redux/slices/nguoiDungSlice";
import { useFormik } from "formik";
import { nguoiDungServ } from "../../services/nguoiDungServices";

const FormUserManage = (props) => {
  const { title, setOpen, open } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const { users } = useSelector((state) => state.nguoiDung);
  const dispatch = useDispatch();

  // lấy chi tiết người dùng dựa vào selectedRowId
  const userDetail = users.find(({ id }) => id === props.selectedRowId);

  const handleOk = async () => {
    setConfirmLoading(true);
    const request = {
      ...values,
      ...{
        id: userDetail?.id ?? Math.ceil(Math.random(1, 1000)),
        gender: values.gender === "male",
        birthday: "",
        skill: [],
        certification: [],
      },
    };
    console.log("request: ", request);
    try {
      // Nếu userDetail !== undefined thì API update được gọi, ngược lại API add sẽ được gọi

      if (userDetail) {
        await nguoiDungServ.updateUser(userDetail?.id, request);
        messageApi.success("Update User Thành Công");
      } else {
        await nguoiDungServ.addUser(request);
        messageApi.success("Thêm User Thành Công");
      }
      dispatch(getAllUser());
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
      email: userDetail?.email ?? "",
      name: userDetail?.name ?? "",
      phone: userDetail?.phone ?? "",
      gender: userDetail ? (userDetail?.gender ? "male" : "female") : "female",
    },
    // use to post values to server
    validationSchema: yup.object({
      email: yup.string().required("Vui lòng nhập email!"),
      name: yup.string().required("Vui lòng nhập tên!"),
      phone: yup.string().required("Vui lòng nhập số điện thoại!"),
    }),
  });
  const { handleChange, handleBlur, values, isValid, dirty } = formik;
  console.log("values: ", values);
  return (
    <Modal
      title={title}
      open={open}
      confirmLoading={confirmLoading}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{
        type: "default",
        htmlType: "submit",
        disabled: !(dirty && isValid),
      }}
      cancelButtonProps={{ htmlType: "reset" }}
    >
      {contextHolder}
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              readOnly={!!userDetail}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              name="email"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.email.length &&
          formik.errors.email &&
          formik.touched.email ? (
            <p className=" text-red-600">{formik.errors.email}</p>
          ) : (
            ""
          )}
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
          </div>
          <div className="mt-2">
            <input
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              id="name"
              name="name"
              type="text"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.name.length && formik.errors.name && formik.touched.name ? (
            <p className=" text-red-600">{formik.errors.name}</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
          </div>
          <div className="mt-2">
            <input
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              id="phone"
              name="phone"
              type="text"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.phone.length &&
          formik.errors.phone &&
          formik.touched.phone ? (
            <p className=" text-red-600">{formik.errors.phone}</p>
          ) : (
            ""
          )}
          <Radio.Group
            className="mt-3"
            name="gender"
            defaultValue={values.gender}
          >
            <Radio onChange={handleChange} value="male">
              Male
            </Radio>
            <Radio onChange={handleChange} value="female">
              Female
            </Radio>
          </Radio.Group>
        </div>
      </form>
    </Modal>
  );
};

export default FormUserManage;
