import { https } from "./config";

export const binhLuanServ = {
  getBinhLuan: (id) => {
    return https.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${id}`);
  },
};
