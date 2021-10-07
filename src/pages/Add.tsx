import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Layout, Typography } from 'antd';
import Navbar from '../components/menu/Navbar';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import AddItem from '../components/add/AddItem';
import { checkToken } from '../redux/thunk';
import './pages.scss';

const Add = () => {
  const { Content } = Layout;
  return (
    <>
      <Row>
        <Col span={24}>
          <Navbar />
          <Content className='navbar-margin'>
            <Breadcrumbs />
            <AddItem />
          </Content>
        </Col>
      </Row>
    </>
  );
};

export default Add;
