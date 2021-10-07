import { RegisterData, ServerResponseStatus, LoginData } from '../utils/types';
import {
  registerUserCall,
  registerUserSuccess,
  registerUserError,
  loginUserCall,
  loginUserSuccess,
  loginUserError,
  checkTokenCall,
  checkTokenError,
  checkTokenSuccess,
} from './actions/creators/service';

import {
  addItemCall,
  addItemSuccess,
  addItemError,
  getItemsCall,
  getItemsSuccess,
  getItemsError,
} from './actions/creators/goods';
import {
  registerUserAPI,
  loginUserAPI,
  checkTokenAPI,
  addItemAPI,
  getAllItemsAPI,
  getAllItemsByPriceAPI,
} from './api';

export const registerUser = (data: RegisterData) => {
  return async (dispatch: any) => {
    dispatch(registerUserCall());
    try {
      const response = await registerUserAPI(data);
      if (response.data.status === ServerResponseStatus.Success) {
        dispatch(registerUserSuccess(response.data));
      } else {
        throw new Error(response.data.message || 'Что-то пошло не так');
      }
    } catch (error) {
      dispatch(registerUserError(error.message));
    }
  };
};

export const loginUser = (data: LoginData) => {
  return async (dispatch: any) => {
    dispatch(loginUserCall());
    try {
      const response = await loginUserAPI(data);
      if (response.data.status === ServerResponseStatus.Success) {
        dispatch(loginUserSuccess(response.data));
      } else {
        throw new Error(response.data.message || 'Что-то пошло не так');
      }
    } catch (error) {
      dispatch(loginUserError(error.message));
    }
  };
};

export const checkToken = () => {
  return async (dispatch: any) => {
    dispatch(checkTokenCall());
    try {
      let token = localStorage.getItem('customToken');

      const data = {
        payload: {},
        headers: {
          token: `Bearer ${token}`,
        },
      };
      const response = await checkTokenAPI(data);
      if (response.data.status === ServerResponseStatus.Success) {
        dispatch(checkTokenSuccess({ ...response.data, token }));
      } else {
        dispatch(checkTokenError('Что-то пошло не так'));
      }
    } catch (error) {
      dispatch(checkTokenError(error.message));
    }
  };
};

export const addItem = (data: any, token: string) => {
  return async (dispatch: any) => {
    dispatch(addItemCall());
    try {
      const response = await addItemAPI(data, token);
      if (response.data.status === ServerResponseStatus.Success) {
        dispatch(addItemSuccess(response.data));
      } else {
        throw new Error(response.data.message || 'Что-то пошло не так');
      }
    } catch (error) {
      dispatch(addItemError(error.message));
    }
  };
};

export const getItems = (data: any) => {
  return async (dispatch: any) => {
    dispatch(getItemsCall());
    try {
      const response = await getAllItemsAPI(data);
      if (response.data.status === ServerResponseStatus.Success) {
        dispatch(getItemsSuccess(response.data.items));
      } else {
        throw new Error(response.data.message || 'Что-то пошло не так');
      }
    } catch (error) {
      dispatch(getItemsError(error.message));
    }
  };
};

export const getItemsByPrice = (data: any) => {
  return async (dispatch: any) => {
    dispatch(getItemsCall());
    try {
      const response = await getAllItemsByPriceAPI(data);
      console.log('RESPONSE', response);
      if (response.data.status === ServerResponseStatus.Success) {
        dispatch(getItemsSuccess(response.data.items));
      } else {
        throw new Error(response.data.message || 'Что-то пошло не так');
      }
    } catch (error) {
      dispatch(getItemsError(error.message));
    }
  };
};
