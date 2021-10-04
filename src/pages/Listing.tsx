import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Layout, Typography } from 'antd';
import Navbar from '../components/menu/Navbar';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Goods from '../components/goods/Goods';
import './pages.scss';
import { checkToken } from '../redux/thunk';
import { useAuth } from '../utils/hooks';

const Listing = () => {
  const { Content } = Layout;
  const dispatch = useDispatch();

  return (
    <>
      <Row>
        <Col span={24}>
          <Navbar />
          <Content className='navbar-margin'>
            <Breadcrumbs />
            <Goods />
          </Content>
        </Col>
      </Row>
    </>
  );
};

export default Listing;
