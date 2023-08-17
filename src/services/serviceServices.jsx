import { https } from "./config";

export const serviceServ = {

    getAllService: () => {
        return https.get("/api/thue-cong-viec");
    },
    deleteService: (id) => {
        return https.delete(`/api/thue-cong-viec/${id}`);
    },
    addService: (data) => {
        return https.post("/api/thue-cong-viec", data);
    },
    updateService: (id, data) => {
        return https.put(`/api/thue-cong-viec/${id}`, data);
    },
    getServiceDetail: (id) => {
        return https.get(`/api/thue-cong-viec/${id}`);
    },
};
