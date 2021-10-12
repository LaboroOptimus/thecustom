import {
  SET_FILTER,
  SET_ITEM_PHOTO,
  ADD_ITEM_CALL,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  GET_ITEMS_CALL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  SET_SORT_TYPE,
  GET_ITEM_CALL,
  GET_ITEM_SUCCESS,
  GET_ITEM_ERROR,
  CLEAR_ITEM,
  GET_ITEM_USER_INFO_CALL,
  GET_ITEM_USER_INFO_SUCCESS,
  GET_ITEM_USER_INFO_ERROR,
  CLEAR_ITEM_USER_INFO
} from '../actions/types';
import { LoadingStatus } from '../../utils/types';

interface InitialState {
  filter: string;
  photos: any[];
  addStatus: LoadingStatus;
  fetchStatus: LoadingStatus;
  fetchItemStatus: LoadingStatus;
  fetchItemUserInfoStatus: LoadingStatus;
  itemUserInfo: {},
  items: any[];
  item: {};
  sortType: string;
}

const initialState: InitialState = {
  filter: 'футболки',
  photos: [],
  addStatus: LoadingStatus.None,
  fetchStatus: LoadingStatus.None,
  fetchItemStatus: LoadingStatus.None,
  fetchItemUserInfoStatus: LoadingStatus.None,
  items: [],
  item: {},
  itemUserInfo: {},
  sortType: 'date',
};

const goodsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_FILTER: {
      return { ...state, filter: action.payload };
    }
    case SET_ITEM_PHOTO: {
      console.log();
      return { ...state, photos: [...action.payload] };
    }
    case ADD_ITEM_CALL: {
      return { ...state, addStatus: LoadingStatus.Pending };
    }
    case ADD_ITEM_SUCCESS: {
      return { ...state, addStatus: LoadingStatus.Success, photos: [] };
    }
    case ADD_ITEM_ERROR: {
      return { ...state, addStatus: LoadingStatus.Error };
    }
    case GET_ITEMS_CALL: {
      return { ...state, fetchStatus: LoadingStatus.Pending };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        fetchStatus: LoadingStatus.Success,
        items: [ ...action.payload],
      };
    }
    case GET_ITEMS_ERROR: {
      return { ...state, fetchStatus: LoadingStatus.Error };
    }
    case SET_SORT_TYPE: {
      return { ...state, sortType: action.payload };
    }
    case GET_ITEM_CALL: {
      return { ...state, fetchItemStatus: LoadingStatus.Pending}
    }
    case GET_ITEM_SUCCESS: {
      return {...state, fetchItemStatus: LoadingStatus.Success, item: action.payload}
    }
    case CLEAR_ITEM: {
      return {...state, item: [], fetchItemStatus: LoadingStatus.None}
    }
    case GET_ITEM_ERROR: {
      return {...state, fetchItemStatus: LoadingStatus.Error}
    }
    case GET_ITEM_USER_INFO_CALL: {
      return {...state, fetchItemUserInfoStatus: LoadingStatus.Pending }
    }
    case GET_ITEM_USER_INFO_SUCCESS: {
      return {...state, fetchItemUserInfoStatus: LoadingStatus.Success, itemUserInfo: action.payload }
    }
    case GET_ITEM_USER_INFO_ERROR: {
      return {...state, fetchItemUserInfoStatus: LoadingStatus.Error}
    }
    case CLEAR_ITEM_USER_INFO: {
      return { ...state, fetchItemUserInfoStatus: LoadingStatus.None, itemUserInfo: {}}
    }
    default:
      return state;
  }
};

export default goodsReducer;
