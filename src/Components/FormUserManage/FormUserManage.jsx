import { message } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { getAllUser } from "../../redux/slices/nguoiDungSlice";
import { useFormik } from "formik";
import { nguoiDungServ } from "../../services/nguoiDungServices";

const FormUserManage = (props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { users } = useSelector((state) => state.nguoiDung);
  const dispatch = useDispatch();

  // lấy chi tiết người dùng dựa vào selectedRowId
  const userDetail = users.find(({ id }) => id === props.selectedRowId);

  const formik = useFormik({
    initialValues: userDetail
      ? {
          email: userDetail.email ?? "",
          name: userDetail.name ?? "",
          password: userDetail.password ?? "",
          phone: userDetail.phone ?? "",
        }
      : {
          email: "",
          name: "",
          password: "",
          phone: "",
        },
    onSubmit: async (values) => {
      console.log(values);
      try {
        // Nếu userDetail !== undefined thì API update được gọi, ngược lại API add sẽ được gọi
        if (userDetail) {
          await nguoiDungServ.updateUser(values);
          messageApi.success("Update User Thành Công");
        } else {
          await nguoiDungServ.addUser(values);
          messageApi.success("Thêm User Thành Công");
        }
        dispatch(getAllUser());
        formik.resetForm();
      } catch (error) {
        messageApi.error(
          error.response.data.content
            ? error.response.data.content
            : "Không hợp lệ"
        );
        formik.resetForm();
      }
    },
    // use to post values to server
    validationSchema: yup.object({
      email: yup.string().required("Vui lòng nhập email!"),
      name: yup.string().required("Vui lòng nhập tên!"),
      password: yup
        .string()
        .required("Vui lòng nhập mật khẩu!")
        .min(3, "Mật khẩu ít nhất 3 kí tự!"),
      phone: yup.string().required("Vui lòng nhập số điện thoại!"),
    }),
  });
  const { handleChange, handleSubmit, handleBlur, values, handleReset } =
    formik;

  return (
    <div>
      {contextHolder}
      <form className="space-y-6" onSubmit={handleSubmit} onReset={handleReset}>
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
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
            />
          </div>
          {values.password.length &&
          formik.errors.password &&
          formik.touched.password ? (
            <p className=" text-red-600">{formik.errors.password}</p>
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
        </div>
      </form>
    </div>
  );
};

export default FormUserManage;
