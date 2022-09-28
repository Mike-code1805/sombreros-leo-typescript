import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://192.168.43.56:5000';

console.log(BASE_URL);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

axios.defaults.baseURL = BASE_URL;

const userRequest = axios.create();

userRequest.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    console.log(token);
    if (token) {
      console.log('token if->', token);
      config.headers!.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default userRequest;
