import { createSlice } from "@reduxjs/toolkit";
import { getkeyword } from "./action";

const initialState = {
  status: "idle",
  error: null,
  data: [],
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getkeyword.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getkeyword.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeed";
      })

      .addCase(getkeyword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default createReducer;
