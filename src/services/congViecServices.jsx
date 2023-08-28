import { https } from "./config";

export const congViecServ = {
  getAllJob: () => {
    return https.get("/api/cong-viec");
  },

  deleteJob: (id) => {
    return https.delete(`/api/cong-viec/${id}`);
  },

  addJob: (data) => {
    return https.post("/api/cong-viec", data);
  },

  updateJob: (id, data) => {
    return https.put(`/api/cong-viec/${id}`, data);
  },

  layChiTietLoaiCongViec: (id) => {
    // console.log(id);
    return https.get(`/api/cong-viec/lay-chi-tiet-loai-cong-viec/${id}`);
  },

  layCongViecTheoChiTietLoai: (id) => {
    return https.get(`/api/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${id}`);
  },

  layCongViecChiTiet: (id) => {
    return https.get(`/api/cong-viec/lay-cong-viec-chi-tiet/${id}`);
  },

  layMenuLoaiCongViec: () => {
    return https.get("/api/cong-viec/lay-menu-loai-cong-viec");
  },

  layDanhSachCongViecTheoTen: (ten) => {
    return https.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${ten}`);
  },
};
