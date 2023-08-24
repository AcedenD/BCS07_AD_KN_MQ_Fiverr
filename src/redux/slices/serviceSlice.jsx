import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { layDuLieuLocal } from "../../utils/localStore";
import { serviceServ } from "../../services/serviceServices";

export const getAllService = createAsyncThunk(
  "service/getAllService",
  async () => {
    const res = await serviceServ.getAllService();
    return res.data.content;
  }
);
export const layDanhSachDaThue = createAsyncThunk(
  "service/layDanhSachDaThue",
  async () => {
    const res = await serviceServ.layDanhSachDaThue();
    return res.data.content;
  }
);
const initialState = {
  hoTen: layDuLieuLocal("user"),
  serviceData: [],
  danhSachDaThueData: [],
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllService.fulfilled, (state, action) => {
      state.serviceData = action.payload;
    });
    builder.addCase(layDanhSachDaThue.fulfilled, (state, action) => {
      state.danhSachDaThueData = action.payload;
    });
  },
});

export const {} = serviceSlice.actions;

export default serviceSlice.reducer;
