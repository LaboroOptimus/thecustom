import axios from 'axios';
import { RegisterData, LoginData } from '../utils/types';

const jsonStringify = (data: Object) => {
  return JSON.stringify(data);
};

export const registerUserAPI = (data: RegisterData) =>
  axios.post('/api/auth/register', jsonStringify(data), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

export const loginUserAPI = (data: LoginData) =>
  axios.post('/api/auth/login', jsonStringify(data), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  export const checkTokenAPI = (data:any) =>
  axios.post('/api/service/check/token', data.payload, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      "Authentication" : data.headers.token,
    },
  });
