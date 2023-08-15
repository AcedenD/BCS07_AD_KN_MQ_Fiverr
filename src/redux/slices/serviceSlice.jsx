import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { layDuLieuLocal } from "../../utils/localStore";
import { serviceServ } from "../../services/serviceServices";

export const getAllService = createAsyncThunk("service/getAllService", async () => {
  const res = await serviceServ.getAllService();
  return res.data.content;
});

const initialState = {
  hoTen: layDuLieuLocal("user"),
  serviceData: [],
};

export const serviceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
  },
extraReducers: (builder) => {
    builder
    .addCase(getAllService.fulfilled, (state, action) => {
    //   const index = state.serviceData.findIndex(
    //     (service) => service.taiKhoan === action.payload.taiKhoan
    //   );
      state.users = action.payload;
    });
  },
});

export const {} = serviceSlice.actions;

export default serviceSlice.reducer;
