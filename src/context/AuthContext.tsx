import React, {createContext, useEffect, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authReducer, AuthState} from './authReducer';
import {Token} from '../interfaces/interface';
import {LoginData, LoginResponse, RegisterData} from '../interfaces/user';
import userRequest from '../api/requestMethods';

type AuthContextProps = {
  errorMessage: string;
  token: Token | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signUp: (registerData: RegisterData) => void;
  signIn: (loginData: LoginData) => void;
  logOut: () => void;
  removeError: () => void;
};

const authInicialState: AuthState = {
  status: 'checking',
  token: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInicialState);

  useEffect(() => {
    checkToken();
    console.log(state.token);
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    // No token, no autenticado
    if (!token) return dispatch({type: 'notAuthenticated'});

    // Hay token
    const resp = await userRequest.get('/api/auth/validation');
    if (resp.status !== 200) {
      return dispatch({type: 'notAuthenticated'});
    }

    await AsyncStorage.setItem('token', resp.data.token.authToken);
    dispatch({
      type: 'signUp',
      payload: {
        token: resp.data.token,
      },
    });
  };

  const signUp = async ({
    username,
    password,
    passwordConfirmation,
  }: RegisterData) => {
    try {
      const {data} = await userRequest.post<LoginResponse>(
        '/api/auth/register',
        {
          username,
          password,
          passwordConfirmation,
        },
      );
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
        },
      });
      await AsyncStorage.setItem('token', data.token.authToken);
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Revise la información',
      });
    }
  };

  const signIn = async ({username, password}: LoginData) => {
    try {
      const {data} = await userRequest.post<LoginResponse>('/api/auth/login', {
        username,
        password,
      });
      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
        },
      });
      await AsyncStorage.setItem('token', data.token.authToken);
      console.log(data);
    } catch (error: any) {
      dispatch({
        type: 'addError',
        payload: error.response.data.message || 'Información incorrecta',
      });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type: 'logout'});
  };

  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signUp,
        signIn,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
