import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import userRequest, {publicRequest} from '../api/requestMethods';
import {User} from '../interfaces/interface';
import {
  getHatRecicleFailure,
  getHatRecicleStart,
  getHatRecicleSuccess,
} from './hatRecicleRedux';
import {getHatFailure, getHatStart, getHatSuccess} from './hatRedux';
import {
  loginFailure,
  loginStart,
  loginSuccess,
  singupFailure,
  singupStart,
  singupSuccess,
} from './userRedux';

export const login = async (dispatch: Dispatch<AnyAction>, user: User) => {
  dispatch(loginStart());
  console.log('dispatch(loginStart())');
  try {
    console.log('dispatch(loginSuccess())');
    console.log('user', user);
    const res = await publicRequest.post('/api/auth/login', user);
    console.log(res.data);
    dispatch(loginSuccess(res.data));
  } catch (err: any) {
    dispatch(loginFailure());
    console.log(err);
  }
};

export const register = async (dispatch: Dispatch<AnyAction>, user: User) => {
  dispatch(singupStart());
  try {
    const res = await publicRequest.post('/api/auth/register', user);
    dispatch(singupSuccess(res.data));
  } catch (err) {
    dispatch(singupFailure());
  }
};

export const getHats = async (dispatch: Dispatch<AnyAction>) => {
  dispatch(getHatStart());
  try {
    const res = await userRequest.get('/api/hat');
    dispatch(getHatSuccess(res.data));
  } catch (err) {
    dispatch(getHatFailure());
  }
};

export const getHatsRecicle = async (dispatch: Dispatch<AnyAction>) => {
  dispatch(getHatRecicleStart());
  try {
    const res = await userRequest.get('/api/hatRecicle');
    dispatch(getHatRecicleSuccess(res.data));
  } catch (err) {
    dispatch(getHatRecicleFailure());
  }
};
