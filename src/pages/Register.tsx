import React, { useEffect, useState, useMemo } from 'react';
import { Input, Space, Row, Col, Layout, Typography, Button, Form, Checkbox, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import cn from 'classnames';

import Navbar from '../components/menu/Navbar';
import Avatar from '../components/register/Avatar';
import { registerUser } from '../redux/thunk';
import { emailReg } from '../utils/regular';
import { LoadingStatus } from '../utils/types';
import { RootState } from '../redux/rootReducer';

import './pages.scss';

interface IntitalInputs {
  [key: string]: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  code: string;
}

const Register = () => {
  const { Title } = Typography;
  const { Content } = Layout;
  const { Password } = Input;
  const { Item } = Form;

  const initialInputsState = {
    name: '',
    surname: '',
    email: '',
    password: '',
    vk: '',
    instagram: '',
    telegram: '',
    code: ''
  };

  const [inputCount, setInputCount] = useState(1);
  const [inputs, setInputs] = useState<IntitalInputs>(initialInputsState);
  const [status, setStatus] = useState(LoadingStatus.None);
  const regStatus = useSelector((state: RootState) => state.service.registerStatus); // очищать чтобы можно было перейти на регистрацию снова
  const error = useSelector((state: RootState) => state.service.registerError);
  const avatar = useSelector((state: RootState) => state.service.registerAvatar);


  useEffect(() => {
    setStatus(regStatus);
  }, [regStatus]);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(status)
   
    if (status == LoadingStatus.Success) {
      message.destroy();
      message.success('Успешно', 1.5);
      setStatus(LoadingStatus.None);
      history.push('/login');
    }
    if (status == LoadingStatus.Error) {
      message.destroy();
      message.error(`Ошибка: ${error}`, 2.5);
      setStatus(LoadingStatus.None);
    }
  }, [status]);

  const handleChange = (e: any) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    setInputCount((prev) => prev + 1);
  };

  const handleSubmit = () => {
    dispatch(registerUser({...inputs, avatar:avatar } ));
  };

  return (
    <Row>
      <Col span={24}>
        <Navbar />
        <Content className={cn('navbar-margin', 'auth-wrapper')}>
          <Space direction='vertical'>
            <Col xs={{ offset: 0 }} sm={{ offset: 0 }} md={{ offset: 4 }}>
              <Title className='auth-title'>Регистрация</Title>
            </Col>
            <Form
              name='basic'
              labelCol={{ xs: 24, sm: 8, md: 5 }}
              wrapperCol={{ xs: 24, sm: 16, md: 19 }}
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              autoComplete='off'
            >
              <Item
                label='Имя'
                name='name'
                rules={[{ required: true, message: 'Введите корректное имя' }]}
              >
                <Input name='name' value={inputs['name']} onChange={handleChange} />
              </Item>

              <Item
                label='Фамилия'
                name='surname'
                rules={[{ required: true, message: 'Введите корретную фамилию' }]}
              >
                <Input name='surname' value={inputs['surname']} onChange={handleChange} />
              </Item>

              <Item
                label='Email'
                name='email'
                rules={[
                  {
                    required: true,
                    pattern: emailReg,
                    message: 'Введите корректный email',
                  },
                ]}
              >
                <Input name='email' value={inputs['email']} onChange={handleChange} />
              </Item>

              <Item
                label='Пароль'
                name='password'
                rules={[
                  {
                    required: true,
                    min: 6,
                    message: 'Пароль должен быть больше 6 символов',
                  },
                ]}
              >
                <Password name='password' value={inputs['password']} onChange={handleChange} />
              </Item>
              <Item
                label='Промокод'
                name='code'
                rules={[
                  {
                    required: true,
                    message: 'Введите корректный промокод',
                  },
                ]}
              >
                <Input name='code' value={inputs['code']} onChange={handleChange} />
              </Item>

              <Item label='Аватар' name='photo'>
                <Avatar/>
              </Item>

              {/*REFACTOR AND ADD DELETING ANTD MULTIINPUTS */}

              {inputCount >= 1 && (
                <Item name='vk' label='ВКонтакте' className='auth-input-item'>
                  <Input placeholder="226236096" addonBefore="https://vk.com/id" name='vk' value={inputs['vk']} onChange={handleChange} />
                </Item>
              )}

              {inputCount >= 2 && (
                <Item name='instagram' label='Instagram' className='auth-input-item'>
                  <Input placeholder="nickname" addonBefore="@" name='instagram' value={inputs['instagram']} onChange={handleChange} />
                </Item>
              )}

              {inputCount >= 3 && (
                <Item name='Telegram' label='Telegram' className='auth-input-item'>
                  <Input placeholder="nickname" addonBefore="@" name='telegram' value={inputs['telegram']} onChange={handleChange} />
                </Item>
              )}

              <Col xs={{ offset: 0 }} sm={{ offset: 0 }} md={{ offset: 4 }}>
                {inputCount !== 3 && (
                  <span className='auth-add'>
                    <a onClick={handleAdd}>Добавить контакт</a>
                  </span>
                )}
                <Item
                  rules={[
                    {
                      required: true,
                      message: 'Нужно дать согласие на обработку данных',
                    },
                  ]}
                  name='check'
                  valuePropName='checked'
                  wrapperCol={{ xs: 24, sm: 16, md: 24 }}
                  className='auth-checked'
                >
                  <Checkbox>Согласие на обработку персональных данных</Checkbox>
                </Item>

                <Item wrapperCol={{ xs: 24, sm: 16, md: 24 }}>
                  <Button type='primary' htmlType='submit'>
                    Зарегистрироваться
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

export default Register;
