import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, List, Select } from 'antd';
import { Link } from 'react-router-dom'

import { cutString } from '../../utils/methods';
import { RootState } from '../../redux/rootReducer';
import { LoadingStatus } from '../../utils/types';
import { getItems } from '../../redux/thunk';
import { setSortType } from '../../redux/actions/creators/goods';
import Filters from './Filters';

import './goods.scss';

const GoodItems = () => {
  const dispatch = useDispatch();
  const { Item } = List;
  const { Option } = Select;
  const items = useSelector((state: RootState) => state.goods.items);
  const status = useSelector((state: RootState) => state.goods.fetchStatus);
  const isLoading = status !== LoadingStatus.Success;
  const sortType = useSelector((state: RootState) => state.goods.sortType);
  const filter = useSelector((state: RootState) => state.goods.filter)

  useEffect(() => {
    dispatch(getItems({ count: 0, sort: sortType, filter }));
  }, [sortType, filter]);

  const handleChange = (value: string) => {
    dispatch(setSortType(value));
  };

  return (
    <>
      <Select defaultValue='По дате добавления' style={{ width: '175px' }} onChange={handleChange}>
        <Option value='date'>По дате добавления</Option>
        <Option value='price'>По цене</Option>
        <Option value='rating' disabled>
          По популярности
        </Option>
      </Select>
      <List
        grid={{ gutter: 30, md: 8 }}
        split={true}
        pagination={{
          position: 'bottom',
          responsive: true,
          defaultPageSize: 15,
          pageSizeOptions: ['15', '30', '60', '120'],
          showSizeChanger: false,
        }}
        size='large'
        loading={isLoading}
        dataSource={items}
        className='goods-list'
        renderItem={({_id, name, price, photos}: any) => (
          <Link to={`/listing/${_id}`}>
          <Item key={_id} className='goods-item'>
            <img src={photos[0].thumbUrl} />
            <span className='goods-item-title'>{cutString(name, 24)}</span>
            <span className='goods-item-price'>{price} {' '} ₽</span>
          </Item>
          </Link>
        )}
      />
    </>
  );
};

const Goods = () => {
  return (
    <>
      <Row className='wrapper-goods'>
        <Col xs={24} sm={8} md={4}>
          <Filters />
        </Col>
        <Col xs={24} sm={16} md={18} push={1}>
          <GoodItems />
        </Col>
      </Row>
    </>
  );
};

export default Goods;
