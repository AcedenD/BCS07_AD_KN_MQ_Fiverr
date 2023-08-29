import { Button, Modal, Radio, message } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { getAllUser, setDuLieuHoTen } from "../../redux/slices/nguoiDungSlice";
import { useFormik } from "formik";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { luuXuongLocal } from "../../utils/localStore";

const FormUserProfileEdit = (props) => {
  const { title, setOpen, open } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();

  const handleOk = async () => {
    setConfirmLoading(true);
    const request = {
      ...values,
      gender: values.gender === "male",
    };
    console.log("request: ", request);
    try {
      if (props.userDetail) {
        await nguoiDungServ
          .updateUser(props.userDetail?.id, request)
          .then((res) => {
            messageApi.success("Cập nhật thành Công!");
            dispatch(getAllUser());
            luuXuongLocal("user", res.data.content);

            setTimeout(() => {
              formik.resetForm();
              setOpen(false);
              setConfirmLoading(false);
            }, 2000);
          });
      }
    } catch (error) {
      messageApi.error("Oops! Có lỗi xảy ra rồi!");
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
      ...props.userDetail,
      email: props.userDetail?.email ?? "",
      name: props.userDetail?.name ?? "",
      phone: props.userDetail?.phone ?? "",
      birthday: props.userDetail?.birthday ?? "",
      gender: props.userDetail
        ? props.userDetail?.gender
          ? "male"
          : "female"
        : "female",
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
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              name="email"
              type="text"
              required
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
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
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
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
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.phone.length &&
          formik.errors.phone &&
          formik.touched.phone ? (
            <p className=" text-red-600">{formik.errors.phone}</p>
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
              Birthday
            </label>
          </div>
          <div className="mt-2">
            <input
              value={values.birthday}
              onChange={handleChange}
              onBlur={handleBlur}
              id="birthday"
              name="birthday"
              type="text"
              autoComplete="current-password"
              required
              className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.birthday.length &&
          formik.errors.birthday &&
          formik.touched.birthday ? (
            <p className=" text-red-600">{formik.errors.birthday}</p>
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

export default FormUserProfileEdit;
