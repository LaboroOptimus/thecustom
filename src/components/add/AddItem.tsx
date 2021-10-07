import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Row, Col, Button, Form, message, Select } from 'antd';
import cn from 'classnames';

import { Gender } from '../../utils/types';
import Pictures from './Pictures';
import { RootState } from '../../redux/rootReducer';
import { LoadingStatus } from '../../utils/types';
import { addItem } from '../../redux/thunk';
import { checkToken } from '../../redux/thunk';
import { nummReg } from '../../utils/regular';
import { gender, clothesSize, bootsSize, pantsSize, maleCategory, femaleCategory } from './data';

import './AddItem.scss';

const AddItem = () => {
  const { Item } = Form;
  const { Option } = Select;
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [currentGender, setGender] = useState('');
  const [currentType, setType] = useState('');
  const [currentSize, setCurrentSize] = useState([]);
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const [isGenderDisabled, setIsGenderDisabled] = useState(false);
  const [isTypeDisabled, setIsTypeDisabled] = useState(true);
  const [isSizeDisabled, setIsSizeDisabled] = useState(true);
  const [isPriceDisabled, setIsPriceDisabled] = useState(true);

  const [sizeType, setSizeType] = useState([]);

  const isTokenValid = useSelector((state: RootState) => state.service.isTokenValid);
  const token = useSelector((state: RootState) => state.service.token);
  const [status, setStatus] = useState(LoadingStatus.None);
  const addStatus = useSelector((state: RootState) => state.goods.addStatus);

  useEffect(() => {
    setStatus(addStatus);
  }, [addStatus]);

  useEffect(() => {
    if (status === LoadingStatus.Pending) {
      message.loading('Добавление...');
    }
    if (status == LoadingStatus.Success) {
      message.destroy();
      message.success('Успешно', 1.5);
      handleReset();
    }
    if (status == LoadingStatus.Error) {
      message.destroy();
      message.error(`Произошла ошибка`, 2.5);
    }
    setStatus(LoadingStatus.None);
  }, [status]);

  useEffect(() => {
    if (
      ['футболки', 'куртки', 'платья', 'толстовки', 'худи', 'пиджаки'].indexOf(currentType) > -1
    ) {
      setSizeType(clothesSize);
    }

    if (['кеды', 'кроссовки'].indexOf(currentType) > -1) {
      setSizeType(bootsSize);
    }

    if (['джинсы', 'брюки'].indexOf(currentType) > -1) {
      setSizeType(pantsSize);
    }

    if(['шапки', 'кепки', 'сумки', 'украшения', 'другое'].indexOf(currentType) > -1) {
      setCurrentSize([]);
      setIsSizeDisabled(true)
      setIsPriceDisabled(false);
    }
  }, [currentType]);

  const handleChangeGender = (option: string) => {
    setGender(option);
    setIsGenderDisabled(true);
    setIsTypeDisabled(false);
  };

  const handleChangeType = (option: string) => {
    setType(option);
    setIsTypeDisabled(true);
    setIsSizeDisabled(false);
  };

  const handleChangeSize = (option: any) => {
    setCurrentSize(option);
    setIsPriceDisabled(false);
  };

  const handlerChangeDesc = (e: any) => {
    setDescription(e.target.value);
  };

  const handlerChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handlerChangePrice = (e: any) => {
    setPrice(e.target.value);
  };

  const handleReset = () => {
    setIsGenderDisabled(false);
    setIsSizeDisabled(true)
    setIsPriceDisabled(true);
    form.resetFields();
  };

  const photos = useSelector((state: RootState) => state.goods.photos);

  const handleAdd = () => {
    const data = {
      name: name,
      description: description,
      gender: currentGender,
      type: currentType,
      size: currentSize,
      price: price,
      photos: photos,
    };
    dispatch(checkToken());
    if (isTokenValid) {
      dispatch(
        addItem(
          {
            ...data,
          },
          `Bearer ${token}`
        )
      );
    }
  };

  return (
    <Row className={cn('add-wrapper')}>
      <Col md={12} xs={24} sm={24}>
        <Form
          name='basic-form'
          form={form}
          initialValues={{ remember: true }}
          onFinish={handleAdd}
          autoComplete='off'
          layout='vertical'
        >
          <Item
            label='Название товара'
            name='name'
            rules={[{ required: true, message: 'Введите название товара' }]}
          >
            <Input name='name' placeholder='Введите название' onChange={handlerChangeName} />
          </Item>

          <Row gutter={[10, 0]}>
            <Col xs={12} sm={8} md={6}>
              <Item label='Пол' name='gender' rules={[{ required: true, message: 'Выберите пол' }]}>
                <Select disabled={isGenderDisabled} onChange={handleChangeGender}>
                  {gender.map((item) => {
                    return (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    );
                  })}
                </Select>
              </Item>
            </Col>

            <Col xs={12} sm={8} md={6}>
              <Item
                label='Категория'
                name='cathegory'
                rules={[{ required: true, message: 'Выберите категорию' }]}
              >
                <Select onChange={handleChangeType} disabled={isTypeDisabled}>
                  {currentGender === Gender.Male
                    ? maleCategory.map((item) => {
                        return (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        );
                      })
                    : currentGender === Gender.Female
                    ? femaleCategory.map((item) => {
                        return (
                          <Option key={item} value={item}>
                            {item}
                          </Option>
                        );
                      })
                    : null}
                </Select>
              </Item>
            </Col>

            <Col xs={12} sm={8} md={6}>
              <Item
                label='Размер (RU)'
                name='size'
              >
                <Select onChange={handleChangeSize} disabled={isSizeDisabled} mode='multiple'>
                  {sizeType?.map((item) => {
                    return (
                      <Option key={item} value={item}>
                        {item}
                      </Option>
                    );
                  })}
                </Select>
              </Item>
            </Col>

            <Col xs={12} sm={8} md={6}>
              <Item
                label='Стоимость'
                name='price'
                rules={[{ required: true, pattern: nummReg, message: 'Введите стоимость' }]}
              >
                <Input name='price' onChange={handlerChangePrice} disabled={isPriceDisabled} />
              </Item>
            </Col>
          </Row>

          <Item label='Описание' name='description'>
            <TextArea
              placeholder='Введите описание'
              onChange={handlerChangeDesc}
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Item>

          <Item label='Загрузите фото' name='photo'>
            <Pictures />
          </Item>

          <Row>
            <Col>
              <Item>
                <Button type='primary' htmlType='submit'>
                  Добавить
                </Button>
              </Item>
            </Col>

            <Col offset={1}>
              <Item>
                <Button danger onClick={handleReset}>
                  Сбросить
                </Button>
              </Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default AddItem;
