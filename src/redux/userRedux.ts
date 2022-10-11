import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      data: null,
      state: 0,
    },
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: state => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    singupStart: state => {
      state.isFetching = true;
    },
    singupSuccess: (state, action) => {
      state.error = false;
      state.currentUser = action.payload;
      state.isFetching = false;
    },
    singupFailure: state => {
      state.isFetching = false;
      state.error = true;
    },
    logout: state => {
      state.currentUser = {
        data: null,
        state: 0,
      };
      state.isFetching = false;
      state.error = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  singupStart,
  singupSuccess,
  singupFailure,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
