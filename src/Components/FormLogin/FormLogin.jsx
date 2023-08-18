import React, { useState } from "react";
import * as yup from "yup";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { luuXuongLocal } from "../../utils/localStore";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { setDuLieuHoTen } from "../../redux/slices/nguoiDungSlice";
import { useFormik } from "formik";

const FormLogin = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // use to post values to server
      nguoiDungServ
        .dangNhap(values)
        .then((res) => {
          console.log(res);
          messageApi.success("Đăng nhập thành công!");
          dispatch(setDuLieuHoTen(res.data.content));
          luuXuongLocal("user", res.data.content);
          luuXuongLocal("token", res.data.content.token);
          luuXuongLocal("role", res.data.content.user.role);
          luuXuongLocal("userId", res.data.content.user.id);
          setTimeout(() => {
            navigate("/");
          }, [800]);
        })
        .catch((err) => {
          console.log(err);
          messageApi.error("Mật khẩu không đúng!");
        });
    },
    validationSchema: yup.object({
      email: yup.string().required("Vui lòng nhập email!"),
      password: yup
        .string()
        .required("Vui lòng nhập mật khẩu!")
        .min(3, "enter in more than 3 "),
    }),
  });
  const { handleChange, handleSubmit, handleBlur } = formik;
  return (
    <div>
      {contextHolder}
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#1dbf73]">
            Sign in to your fiverr account!
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
                />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <p className=" text-red-600">{formik.errors.email}</p>
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
                <div className="text-sm">
                  <a
                    href="..."
                    className="font-semibold text-[#1dbf73] hover:text-[#1dbf73]"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
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
              {formik.errors.password && formik.touched.password ? (
                <p className=" text-red-600">{formik.errors.password}</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1dbf73] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1dbf73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1dbf73] "
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <NavLink
              to={"/signup"}
              className="ml-3 font-semibold leading-6 text-[#1dbf73] hover:text-[#1dbf73]"
            >
              Register now ?
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
