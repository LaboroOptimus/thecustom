import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import Navbar from '../components/menu/Navbar';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import { getItem, getItemUserInfo, addItemView } from '../redux/thunk';
import { clearItem, clearItemUserInfo, } from '../redux/actions/creators/goods';
import { RootState } from '../redux/rootReducer';
import ItemDetails from '../components/goods-item/ItemDetails';
import './pages.scss';

const Item = () => {
  const dispatch = useDispatch();
  const { Content } = Layout;
  const { id }: any = useParams();

  const item = useSelector((state: RootState) => state.goods.item);
  const user = useSelector((state: RootState) => state.goods.itemUserInfo)
  const { userId } = item;

  useEffect(() => {
    dispatch(addItemView( { id }))
  },[]);
  useEffect(() => {
    dispatch(getItem({ id }));
    return () => {
      dispatch(clearItem());
    };
  }, [id]);

  useEffect(() => {
    if (userId) {
      console.log(userId)
      dispatch(getItemUserInfo({ id: userId}));
      return () => {
        dispatch(clearItemUserInfo())
      }
    }
  }, [userId]);

  return (
    <>
      <Row>
        <Col span={24}>
          <Navbar />
          <Content className='navbar-margin'>
            {item.name && <Breadcrumbs name={`${item.name}`} />}
            <ItemDetails item={item} user={user}/>
          </Content>
        </Col>
      </Row>
    </>
  );
};

export default Item;
