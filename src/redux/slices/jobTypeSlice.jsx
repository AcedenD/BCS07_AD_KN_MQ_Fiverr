import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { layDuLieuLocal } from "../../utils/localStore";
import { jobTypeServ } from "../../services/jobTypeServices";

export const getAllJobType = createAsyncThunk(
  "jobType/getAllJobType",
  async () => {
    const res = await jobTypeServ.getAllJobType();
    return res.data.content;
  }
);

const initialState = {
  hoTen: layDuLieuLocal("user"),
  jobTypeData: [],
};

export const jobTypeSlice = createSlice({
  name: "jobTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllJobType.fulfilled, (state, action) => {
      //   const index = state.jobTypeData.findIndex(
      //     (jobType) => jobType.taiKhoan === action.payload.taiKhoan
      //   );
      state.users = action.payload;
    });
  },
});

export const {} = jobTypeSlice.actions;

export default jobTypeSlice.reducer;
