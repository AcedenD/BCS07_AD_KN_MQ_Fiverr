import { https } from "./config";

export const congViecServ = {
  layChiTietLoaiCongViec: (id) => {
    // console.log(id);
    return https.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
  },

  layCongViecTheoChiTietLoai: (id) => {
    return https.get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
  },
};