import {
  SET_PATH,
  REGISTER_CALL,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_CALL,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CHECK_TOKEN_CALL,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_ERROR,
  SET_AVATAR,
} from '../types';

export const setPath = (path: string) => {
  return {
    type: SET_PATH,
    payload: path,
  };
};

export const registerUserCall = () => {
  return {
    type: REGISTER_CALL,
  };
};

export const registerUserSuccess = (data: any) => {
  return {
    type: REGISTER_SUCCESS,
    payload: data,
  };
};

export const registerUserError = (data: any) => {
  return {
    type: REGISTER_ERROR,
    payload: data,
  };
};

export const loginUserCall = () => {
  return {
    type: LOGIN_CALL,
  };
};

export const loginUserSuccess = (data: any) => {
  localStorage.setItem('customToken', data.token);

  return {
    type: LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginUserError = (data: any) => {
  return {
    type: LOGIN_ERROR,
    payload: data,
  };
};

export const checkTokenCall = () => {
  return {
    type: CHECK_TOKEN_CALL,
  }
}

export const checkTokenSuccess = (data: any) => {
  return {
    type: CHECK_TOKEN_SUCCESS,
    payload: data,
  };
};

export const checkTokenError = (data: any) => {
  return {
    type: CHECK_TOKEN_ERROR,
    payload: data,
  };
}

export const setAvatar = (data: any) => {
  return {
    type: SET_AVATAR,
    payload: data
  }
}