import { https } from "./config";

export const nguoiDungServ = {
  // group: "GP03",

  dangNhap: (data) => {
    return https.post("/api/auth/signin", data);
  },

  dangKy: (data) => {
    console.log(data);
    return https.post("api/auth/signup", data);
  },

  getAllUser: () => {
    return https.get("/api/users");
  },

  deleteUser: (id) => {
    return https.delete(`/api/users?id=${id}`);
  },

  addUser: (data) => {
    return https.post("/api/users", data);
  },

  updateUser: (id, data) => {
    return https.put(`/api/users/${id}`, data);
  },
};
