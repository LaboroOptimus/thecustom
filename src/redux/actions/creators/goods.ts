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
  GET_ITEM_ERROR,
  GET_ITEM_SUCCESS,
  CLEAR_ITEM,
  GET_ITEM_USER_INFO_CALL,
  GET_ITEM_USER_INFO_SUCCESS,
  GET_ITEM_USER_INFO_ERROR,
  CLEAR_ITEM_USER_INFO,
  ADD_ITEM_VIEW,
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

export const getItemCall = () => {
  return {
    type: GET_ITEM_CALL,
  }
}

export const getItemSuccess = (data: any) => {
  return {
    type: GET_ITEM_SUCCESS,
    payload: data
  }
}

export const clearItem = () => {
  return {
    type: CLEAR_ITEM
  }
}

export const getItemError = (data: any) => {
  return {
    type: GET_ITEM_ERROR,
    payload: data
  }
}

export const setSortType = (data:string) => {
  return {
    type: SET_SORT_TYPE,
    payload: data
  }
}

export const getItemUserInfoCall = () => {
  return {
    type: GET_ITEM_USER_INFO_CALL
  }
}

export const getItemUserInfoSuccess = (data:any) => {
  return {
    type: GET_ITEM_USER_INFO_SUCCESS,
    payload: data
  }
}

export const getItemUserInfoError = (data:any) => {
  return {
    type: GET_ITEM_USER_INFO_ERROR,
    payload: data
  }
}

export const clearItemUserInfo = () => {
  return {
    type: CLEAR_ITEM_USER_INFO
  }
}

export const addItemView = () => {
  return {
    type: ADD_ITEM_VIEW
  }
}