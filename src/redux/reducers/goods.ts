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
} from '../actions/types';
import { LoadingStatus } from '../../utils/types';

interface InitialState {
  filter: string;
  photos: any[];
  addStatus: LoadingStatus;
  fetchStatus: LoadingStatus;
  items: any[];
  sortType: string;
}

const initialState: InitialState = {
  filter: 'футболки',
  photos: [],
  addStatus: LoadingStatus.None,
  fetchStatus: LoadingStatus.None,
  items: [],
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
    default:
      return state;
  }
};

export default goodsReducer;
