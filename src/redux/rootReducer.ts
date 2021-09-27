import { combineReducers } from 'redux'
import serviceReducer from './reducers/service'
import goodsReducer from './reducers/goods'

  export const rootReducer = combineReducers({
    service: serviceReducer,
    goods: goodsReducer
  });
  
  export type RootState = ReturnType<typeof rootReducer>