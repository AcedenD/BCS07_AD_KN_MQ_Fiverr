import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { congViecServ } from "../../services/congViecServices";
import { useParams } from "react-router-dom";

export const layCongViecChiTiet = createAsyncThunk(
  "congViec/layCongViecChiTiet",
  async (id) => {
    const res = await congViecServ.layCongViecChiTiet(id);
    return res.data.content;
  }
);

const initialState = {
  congViecData: {},
};

export const congViecSlice = createSlice({
  name: "congViec",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(layCongViecChiTiet.fulfilled, (state, action) => {
      state.congViecData = action.payload;
    });
  },
});

export const {} = congViecSlice.actions;

export default congViecSlice.reducer;
