import {createSlice} from '@reduxjs/toolkit';
import {Hat} from '../interfaces/state';

export const hatRecicleSlice = createSlice({
  name: 'hatRecicle',
  initialState: {
    hatsRecicle: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getHatRecicleStart: state => {
      state.isFetching = true;
      state.error = false;
    },
    getHatRecicleSuccess: (state, action) => {
      state.isFetching = false;
      state.hatsRecicle = action.payload;
    },
    getHatRecicleFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    clearHatsRecicle: state => {
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
