import { https } from "./config";

export const serviceServ = {
  getAllService: () => {
    return https.get("/api/thue-cong-viec");
  },
  deleteService: (id) => {
    return https.delete(`/api/thue-cong-viec/{id}`, id);
  },
  addService: (data) => {
    return https.post("/api/thue-cong-viec", data);
  },
  updateService: (id) => {
    return https.post("/api/thue-cong-viec/{id}", id);
  },
};
