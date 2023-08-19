import { https } from "./config";

export const binhLuanServ = {
  getBinhLuan: (id) => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },

  addBinhLuan: (data) => {
    return https.post(`/api/binh-luan`, data);
  },

  deleteBinhLuan: (id) => {
    return https.delete(`/api/binh-luan/${id}`);
  },
};
