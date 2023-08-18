import * as yup from "yup";

const passRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;

const phoneRegex = /^[0-9]{10}$/;

export const addUserSchema = yup.object().shape({
  name: yup
    .string()
    .min(4, "Vui lòng nhập ít nhất 4 ký tự!")
    .required("Vui lòng nhập tài khoản!"),
  password: yup
    .string()
    .matches(
      passRegex,
      "Mật khẩu phải có ít nhất 6 ký tự bao gồm 1 chữ hoa, một số và một ký tự đặc biệt"
    )
    .required("Vui lòng nhập mật khẩu!"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Mật khẩu xác nhận không chính xác!")
    .required("Vui lòng xác nhận lại mật khẩu!!"),

  email: yup
    .string()
    .email("Email phải đúng cú pháp: test@gmail.com)")
    .required("Vui lòng nhật email!"),
  phone: yup
    .string()
    .matches(phoneRegex, "Số điện phải bao gồm 10 số!")
    .required("Vui lòng nhập số điện thoại!"),
  birthday: yup.string().required("Vui lòng nhập ngày sinh!"),
});
