import { https } from "./config";

export const jobTypeServ = {
    getAllJobType: () => {
        return https.get("api/loai-cong-viec");
    },
    getJobTypeDetail: (maCongViec) => {
        return https.get(`/api/cong-viec/lay-cong-viec-chi-tiet/${maCongViec}`);
    },
    deleteJobType: (id) => {
        return https.delete(`api/loai-cong-viec/${id}`);
    },
    addJobType: (data) => {
        return https.post("/api/loai-cong-viec", data);
    },
    updateJobType: (id) => {
        return https.post(`/api/loai-cong-viec/${id}`);
    },

};
