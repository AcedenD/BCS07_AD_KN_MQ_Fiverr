import { configureStore } from "@reduxjs/toolkit";
import nguoiDungSlice from "./slices/nguoiDungSlice";
import loadingSlice from "./slices/loadingSlice";
import jobTypeSlice from "./slices/jobTypeSlice";
import serviceSlice from "./slices/serviceSlice";

export const store = configureStore({
  reducer: {
    nguoiDung: nguoiDungSlice,
    loading: loadingSlice,
    jobTypes: jobTypeSlice,
    services: serviceSlice 
  },
});
