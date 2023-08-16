import { https } from "./config";

export const jobTypeServ = {
    getAllJobType: () => {
        return https.get("api/loai-cong-viec");
    },
    getJobTypeDetail: (id) => {
        return https.get(`api/loai-cong-viec/${id}`);
    },
    deleteJobType: (id) => {
        return https.delete(`api/loai-cong-viec/${id}`);
    },
    addJobType: (data) => {
        return https.post("/api/loai-cong-viec", data);
    },
    updateJobType: (id,data) => {
        return https.put(`/api/loai-cong-viec/${id}`,data);
    },

};
