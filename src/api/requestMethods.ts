import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PORT_DATA} from '@env';

const BASE_URL = PORT_DATA;

console.log(BASE_URL);

export const publicRequest = axios.create({
  baseURL: `${PORT_DATA}`,
});

axios.defaults.baseURL = PORT_DATA;

const userRequest = axios.create();

userRequest.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers!.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default userRequest;
