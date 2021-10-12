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

export const checkTokenAPI = async (data: any) =>
  axios.post('/api/service/check/token', data.payload, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authentication: data.headers.token,
    },
  });

export const addItemAPI = (data: any, token:string) =>
  axios.post('/api/goods/add', jsonStringify(data), {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authentication: token,
    },
  });

  export const getAllItemsAPI = async (data: any) => {
    return axios.post('/api/goods/get', data)
  }

  export const getItemAPI = async (data: any) => {
    return axios.post('/api/goods/get-item', data)
  }

  export const getItemUserInfoAPI = async (data: any) => {
    return axios.post('/api/goods/get-item-user-info', data)
  }

  export const addItemViewAPI = async (data: any) => {
    return axios.post('/api/goods/add-view', data)
  }