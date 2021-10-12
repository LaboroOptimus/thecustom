import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InstagramOutlined, EyeOutlined } from '@ant-design/icons';
import { Row, Col, Carousel } from 'antd';
import moment from 'moment';
import './item-info.scss';
import avatar from './assets/avatar.jpg'

const Slider = ({ images }: any) => {
  return (
    <Carousel autoplay>
      {images?.map((item: any, index: number) => {
        return (
          <div key={index} className='item-img-container'>
            <img src={item.full} className='item-img' />
          </div>
        );
      })}
    </Carousel>
  );
};

const ItemDetails = ({ item, user }: any) => {
  
  return (
    <Row className='wrapper-item'>
      <Col span={12}>
        <Slider images={item.photos} />
      </Col>
      <Col span={12}>
        <div className='item-title'>
        <h2>{item.name}</h2>
        <span>Просмотров: {item.views}</span>
        <span>Добавлено: {item.date && item.date.substring(0, 10).split('-').reverse().join('-')}</span>
        </div>
        <Row className='item-block'>
          <Col span={12} className='item-user-info'>
            {user && (
              <>
                <img
                  className='item-user-avatar'
                  src={avatar}
                />
                <Col className='item-user-contacts'>
                  <p>
                    {user.name} {user.surname}
                  </p>
                  {user.instagram && (
                    <p>
                      <a href={`https://www.instagram.com/${user.instagram}`} target='_blank'>
                        <InstagramOutlined /> {user.instagram}
                      </a>
                    </p>
                  )}
                  {user.vk && (
                    <p>
                      <a href={user.vk} target='_blank'>
                        <InstagramOutlined /> {user.vk.split('.com/')[1]}
                      </a>
                    </p>
                  )}
                  {user.telegram && (
                    <p>
                      <a href={`https://t.me/${user.telegram}`} target='_blank'>
                        <InstagramOutlined /> {user.telegram}
                      </a>
                    </p>
                  )}
                </Col>
              </>
            )}
          </Col>
          <Col span={12}>
            <p>{item.description}</p>
          </Col>
        </Row>

        <Row className='item-block'>
        <Col span={12}>
            <h3>Доступные размеры</h3>
            <div className="size-container">
              {item.size?.map((size: string, index: number) => {
                return (
                  <span className='size' key={index}>
                    {size}
                  </span>
                );
              })}
            </div>
          </Col>
          <Col span={12}>
            <h3 className="price-title">Стоимость</h3>
            <p className='price'>{item.price}</p>
          </Col>
          
        </Row>
      </Col>
    </Row>
  );
};

export default ItemDetails;
