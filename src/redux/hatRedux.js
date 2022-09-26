import { createSlice } from "@reduxjs/toolkit";

export const hatSlice = createSlice({
  name: "hat",
  initialState: {
    hats: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHatStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHatSuccess: (state, action) => {
      state.isFetching = false;
      state.hats = action.payload;
    },
    getHatFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    clearHats: (state) => {
      state.hats = [];
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { getHatStart, getHatSuccess, getHatFailure, clearHats } =
  hatSlice.actions;

export default hatSlice.reducer;
