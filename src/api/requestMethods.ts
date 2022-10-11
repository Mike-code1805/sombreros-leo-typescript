import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://10.10.28.108:5000';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

axios.defaults.baseURL = BASE_URL;

const userRequest = axios.create();

userRequest.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    if (token && config.headers !== undefined) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default userRequest;
