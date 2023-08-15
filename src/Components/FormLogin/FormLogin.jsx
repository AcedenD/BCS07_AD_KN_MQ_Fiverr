import React, { useState } from "react";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { luuXuongLocal } from "../../utils/localStore";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Input, message } from "antd";
import { setDuLieuHoTen } from "../../redux/slices/nguoiDungSlice";

const FormLogin = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginAcc, setLoginAcc] = useState({
    email: "",
    password: "",
  });
  console.log(loginAcc);
  const handleClickLogin = () => {
    nguoiDungServ
      .dangNhap(loginAcc)
      .then((res) => {
        // if login sucess, save data to local
        messageApi.success("Đăng nhập thành công!");
        // khi lay du lieu thanh cong, gui len redux
        dispatch(setDuLieuHoTen(res.data.content));
        luuXuongLocal("user", res.data.content);
        setTimeout(() => {
          navigate("/");
        }, [800]);
      })
      .catch((err) => {
        console.log(err);
        messageApi.error(err.response.data.content);
      });
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      {contextHolder}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#1dbf73]">
          Sign in to your fiverr account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(event) => {
                  setLoginAcc({ ...loginAcc, email: event.target.value });
                }}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
              />
            </div>
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
                onChange={(event) => {
                  setLoginAcc({ ...loginAcc, password: event.target.value });
                }}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={handleClickLogin}
              className={`flex w-full justify-center rounded-md bg-[#1dbf73] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#1dbf73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1dbf73] ${
                !(loginAcc.email.lenght && loginAcc.password.length)
                  ? ""
                  : "disabled"
              }`}
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="..."
            className="ml-3 font-semibold leading-6 text-[#1dbf73] hover:text-[#1dbf73]"
          >
            Register now ?
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
