import {
  SET_FILTER,
  SET_ITEM_PHOTO,
  ADD_ITEM_CALL,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_ERROR,
  GET_ITEMS_CALL,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_ERROR,
  SET_SORT_TYPE
} from '../types';

export const setGoodsFilter = (id: string) => {
  return {
    type: SET_FILTER,
    payload: id,
  };
};

export const setItemPhoto = (data: any) => {
  return {
    type: SET_ITEM_PHOTO,
    payload: data,
  };
};

export const addItemCall = () => {
  return {
    type: ADD_ITEM_CALL,
  };
};

export const addItemSuccess = (data: any) => {
  return {
    type: ADD_ITEM_SUCCESS,
    payload: data,
  };
};

export const addItemError = (data: any) => {
  return {
    type: ADD_ITEM_ERROR,
    payload: data,
  };
};


export const getItemsCall = () => {
  return {
    type: GET_ITEMS_CALL,
  }
}

export const getItemsSuccess = (data: any) => {
  return {
    type: GET_ITEMS_SUCCESS,
    payload: data
  }
}

export const getItemsError = (data: any) => {
  return {
    type: GET_ITEMS_ERROR,
    payload: data
  }
}

export const setSortType = (data:string) => {
  return {
    type: SET_SORT_TYPE,
    payload: data
  }
}