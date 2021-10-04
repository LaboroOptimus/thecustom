import {
  SET_PATH,
  REGISTER_ERROR,
  REGISTER_CALL,
  REGISTER_SUCCESS,
  LOGIN_CALL,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CHECK_TOKEN_SUCCESS,
  CHECK_TOKEN_CALL,
  CHECK_TOKEN_ERROR,
} from '../actions/types';
import { LoadingStatus } from '../../utils/types';

const initialState = {
  currentPath: '/',
  token: '',
  registerStatus: LoadingStatus.None,
  registerError: '',
  loginStatus: LoadingStatus.None,
  loginError: '',
  isTokenValid: true,
  userId: ''
};

const serviceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_PATH: {
      return { ...state, currentPath: action.payload };
    }
    case REGISTER_CALL:
      return {
        ...state,
        registerStatus: LoadingStatus.Pending,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerStatus: LoadingStatus.Success,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerStatus: LoadingStatus.Error,
        registerError: action.payload,
      };

    case LOGIN_CALL:
      return {
        ...state,
        loginStatus: LoadingStatus.Pending,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        isTokenValid: true,
        loginStatus: LoadingStatus.Success,
        userId: action.payload.userId,
      };

    case LOGIN_ERROR: {
      return {
        ...state,
        loginStatus: LoadingStatus.Error,
        loginError: action.payload,
      };
    }
    case CHECK_TOKEN_CALL:
      return { ...state };

    case CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        isTokenValid: true,
        token: action.payload.token
      };
    case CHECK_TOKEN_ERROR:
      return {
        ...state,
        isTokenValid: false,
      };

    default:
      return state;
  }
};

export default serviceReducer;