import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { RootState } from '../redux/rootReducer';
import { checkToken } from '../redux/thunk';

export const useAuth = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
      dispatch(checkToken());
  }, []);

  const isAuth = useSelector((state: RootState) => state.service.isTokenValid);
  
  return isAuth;
};
