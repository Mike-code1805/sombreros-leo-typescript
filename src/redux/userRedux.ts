import { createSlice } from "@reduxjs/toolkit";
import { User } from "../interfaces/interface";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    singupStart: (state) => {
      state.isFetching = true;
    },
    singupSuccess: (state, action) => {
      state.isFetching = false;
      state.error = false;
    },
    singupFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, singupStart, singupSuccess, singupFailure, logout } = userSlice.actions;
export default userSlice.reducer;
