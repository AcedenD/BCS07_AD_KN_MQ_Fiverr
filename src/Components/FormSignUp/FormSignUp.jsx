import React from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { useFormik } from "formik";
import { nguoiDungServ } from "../../services/nguoiDungServices";
import { getAllUser } from "../../redux/slices/nguoiDungSlice";
import { addUserSchema } from "../../utils/addUserSchema";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const FormSignUp = () => {
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: [],
      certification: [],
    },
    onSubmit: async (values) => {
      const request = {
        ...values,
        ...{
          id: Math.ceil(Math.random(0, 1000)),
          gender: values.gender === "male",
          confirmPassword: undefined,
        },
      };
      console.log(values);

      try {
        console.log("trying to dang ky");
        const res = await nguoiDungServ.dangKy(request);
        console.log(res);
        // dispatch(getAllUser());
        messageApi.success("Đăng ký thành công!");
        formik.resetForm();
        navigate("../login");
      } catch (error) {
        console.log(error);
        messageApi.error("Oops! Đăng ký thất bại!");
      }
    },

    // add validation using yup from yup library
    validationSchema: addUserSchema,
  });
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    isSubmitting,
  } = formik;
  //   const userTester = {
  //     name: "tester01",
  //     email: "tester01@gmail.com",
  //     password: "tester01",
  //     confirmPassword: "tester01",
  //     phone: "1234567899",
  //     gender: "male",
  //   };

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {contextHolder}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu
        overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#1dbf73] sm:text-4xl">
          REGISTER
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Please fill in this form to create an account!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="name"
                id="name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
                value={values.name}
              />
            </div>
            {errors.name && touched.name ? (
              <p className=" text-red-600">{formik.errors.name}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
                value={values.email}
              />
            </div>
            {errors.email && touched.email ? (
              <p className=" text-red-600">{formik.errors.email}</p>
            ) : (
              ""
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="relative mt-2.5">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="password"
                id="password"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
                value={values.password}
              />
              <span
                onClick={() => {
                  if (document.getElementById("password").type == "password") {
                    document.getElementById("password").type = "text";
                    document
                      .getElementById("eye")
                      .classList.remove("fa-eye-slash");
                    document.getElementById("eye").classList.add("fa-eye");
                  } else {
                    document.getElementById("password").type = "password";
                    document.getElementById("eye").classList.remove("fa-eye");
                    document
                      .getElementById("eye")
                      .classList.add("fa-eye-slash");
                  }
                }}
                className="absolute right-0 top-0 mt-3 mr-4 text-gray-500 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-600 transition-colors duration-400"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-regular fa-eye" id="eye"></i>
              </span>
            </div>
            {errors.password && touched.password ? (
              <p className=" text-red-600">{formik.errors.password}</p>
            ) : (
              ""
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="relative mt-2.5">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
                value={values.confirmPassword}
              />
              <span
                onClick={() => {
                  if (
                    document.getElementById("confirmPassword").type ==
                    "password"
                  ) {
                    document.getElementById("confirmPassword").type = "text";
                    document
                      .getElementById("eye1")
                      .classList.remove("fa-eye-slash");
                    document.getElementById("eye1").classList.add("fa-eye");
                  } else {
                    document.getElementById("confirmPassword").type =
                      "password";
                    document.getElementById("eye1").classList.remove("fa-eye");
                    document
                      .getElementById("eye1")
                      .classList.add("fa-eye-slash");
                  }
                }}
                className="absolute right-0 top-0 mt-3 mr-4 text-gray-500 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-600 transition-colors duration-400"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-regular fa-eye" id="eye1"></i>
              </span>
            </div>
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className=" text-red-600">{formik.errors.confirmPassword}</p>
            ) : (
              ""
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="tel"
                name="phone"
                id="phone"
                // autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
                value={values.phone}
              />
            </div>
            {errors.phone && touched.phone ? (
              <p className=" text-red-600">{formik.errors.phone}</p>
            ) : (
              ""
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="birthday"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Date of birth
            </label>
            <div className="mt-2.5">
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                type="date"
                name="birthday"
                id="birthday"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-[#1dbf73] sm:text-sm sm:leading-6"
                defaultValue={""}
                value={values.birthday}
              />
            </div>
            {errors.birthday && touched.birthday ? (
              <p className=" text-red-600">{formik.errors.birthday}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <label
              htmlFor="gender"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Gender
            </label>
            <div className="relative mt-2.5">
              <label>
                <input
                  onChange={handleChange}
                  type="radio"
                  name="gender"
                  id="female"
                  className="absolute block w-full rounded-md border-0 px-3.5 py-2 text-[#1dbf73] placeholder:text-[#1dbf73] sm:text-sm sm:leading-6"
                  value="female"
                  checked
                />
                Female
              </label>
            </div>
            <div className="relative mt-2.5">
              <input
                onChange={handleChange}
                type="radio"
                name="gender"
                id="male"
                className="absolute block w-full rounded-md border-0 px-3.5 py-2 text-[#1dbf73] placeholder:text-[#1dbf73] sm:text-sm sm:leading-6"
                value="male"
              />
              <label htmlFor="gender" className="radio-label">
                Male
              </label>
            </div>
          </div>
          <div className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              {/* Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" */}
              <button
                type="button"
                className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1dbf73]"
                role="switch"
                aria-checked="false"
                aria-labelledby="switch-1-label"
              >
                <span className="sr-only">Agree to policies</span>
                {/* Enabled: "translate-x-3.5", Not Enabled: "translate-x-0" */}
                <span
                  aria-hidden="true"
                  className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                />
              </button>
            </div>

            <label
              className="text-sm leading-6 text-gray-600"
              id="switch-1-label"
            >
              By joining, you agree to the Fiverr
              <a href="..." className="ml-1 mr-1 font-semibold text-[#1dbf73]">
                Term of Service
              </a>
              and to occasionally receive emails from us. Please read our
              <a href="..." className="ml-1 mr-1 font-semibold text-[#1dbf73]">
                Privacy Policy
              </a>
              to learn how we use your personal data.
            </label>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-[#1dbf73] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1dbf73] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1dbf73]"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSignUp;
