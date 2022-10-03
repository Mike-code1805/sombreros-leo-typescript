import { createSlice } from "@reduxjs/toolkit";
import { Hat } from '../interfaces/state';

export const hatRecicleSlice = createSlice({
  name: "hatRecicle",
  initialState: {
    hatsRecicle: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHatRecicleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getHatRecicleSuccess: (state, action) => {
      state.isFetching = false;
      state.hatsRecicle = action.payload;
    },
    getHatRecicleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteHatRecicleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteHatRecicleSuccess: (state, action) => {
      state.isFetching = false;
      state.hatsRecicle.splice(
        state.hatsRecicle.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteHatRecicleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateHatRecicleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateHatRecicleSuccess: (state, action) => {
      state.isFetching = false;
      state.hatsRecicle[
        state.hats.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.Hat;
    },
    updateHatRecicleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //CREATE
    addHatRecicleStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addHatRecicleSuccess: (state, action) => {
      state.isFetching = false;
      state.hatsRecicle.push(action.payload);
    },
    addHatRecicleFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    clearHatsRecicle: (state) => {
      state.hatsRecicle = [];
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  getHatRecicleStart,
  getHatRecicleSuccess,
  getHatRecicleFailure,
  clearHatsRecicle,
} = hatRecicleSlice.actions;

export default hatRecicleSlice.reducer;
