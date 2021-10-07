import React, { useEffect, useState } from 'react';
import { Input, Space, Row, Col, Layout, Typography, Button, Form, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import Navbar from '../components/menu/Navbar';
import { loginUser } from '../redux/thunk';
import { LoadingStatus } from '../utils/types';
import { RootState } from '../redux/rootReducer';

import './pages.scss';

const Login = () => {
  const { Title } = Typography;
  const { Content } = Layout;
  const { Password } = Input;
  const { Item } = Form;
  const dispatch = useDispatch()
  const history = useHistory()
  const loginStatus = useSelector((state: RootState) => state.service.loginStatus)
  const error = useSelector((state:RootState) => state.service.loginError)
  const [status, setStatus] = useState(LoadingStatus.None)


  useEffect(() => {
    setStatus(loginStatus)
  }, [loginStatus])

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: any) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    console.log(status)
    if (status == LoadingStatus.Success) {
      message.destroy();
      message.success('Успешно', 1.5);
      history.push('/');
    }
    if (status == LoadingStatus.Error) {
      message.destroy();
      message.error(`Ошибка: ${error}`, 2.5);
    }
    setStatus(LoadingStatus.None)
  }, [status]);


  const handleLogin = () => {
    dispatch(loginUser({...loginData}))
  }


  return (
    <Row>
      <Col span={24}>
        <Navbar />
        <Content className={cn('navbar-margin', 'auth-wrapper')}>
          <Space direction='vertical'>
            <Col xs={{ offset: 0 }} sm={{ offset: 0 }} md={{ offset: 4 }}>
              <Title className='auth-title'>Вход на сайт</Title>
            </Col>
            <Form
              name='basic'
              labelCol={{ xs: 24, sm: 8, md: 4 }}
              wrapperCol={{ xs: 24, sm: 16, md: 20 }}
              initialValues={{ remember: true }}
              onFinish={handleLogin}
              autoComplete='off'
            >
              <Item label='Email' name='email'>
                <Input name='email' onChange={handleChange} />
              </Item>

              <Item label='Пароль' name='password'>
                <Password name='password' onChange={handleChange} />
              </Item>
              <Col xs={{ offset: 0 }} sm={{ offset: 0 }} md={{ offset: 4 }}>
                <Item wrapperCol={{ xs: 24, sm: 16, md: 24 }}>
                  <Button type='primary' htmlType='submit'>
                    Войти
                  </Button>
                </Item>
              </Col>
            </Form>
          </Space>
        </Content>
      </Col>
    </Row>
  );
};

export default Login;
