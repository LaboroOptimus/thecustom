import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu } from 'antd';
import { setGoodsFilter } from '../../redux/actions/creators/goods';
import './goods.scss';

const Filters = () => {
  const { SubMenu, Item } = Menu;
  const dispatch = useDispatch();

  // submenu keys of first level
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];
  const [openKeys, setOpenKeys] = React.useState(['sub1']);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys.find((key: any) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleFilterItems = (id: string) => {
    dispatch(setGoodsFilter(id));
  };

  return (
    <Menu
      mode='inline'
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: '100%' }}
      className='goods-menu'
    >
      <SubMenu
        key='sub1'
        icon={
          <span role='img' aria-label='sneakers' className='filter-icon'>
            👟
          </span>
        }
        title='Обувь'
      >
        <Item onClick={() => handleFilterItems('кроссовки')} key='1'>
          Кроссовки
        </Item>
        <Item onClick={() => handleFilterItems('кеды')} key='2'>
          Кеды
        </Item>
      </SubMenu>
      <SubMenu
        key='sub2'
        icon={
          <span role='img' aria-label='shirt' className='filter-icon'>
            👕
          </span>
        }
        title='Одежда'
      >
        <Item onClick={() => handleFilterItems('футболки')} key='3'>
          Футболки
        </Item>
        <Item onClick={() => handleFilterItems('толстовки')} key='4'>
          Толстовки
        </Item>
        <Item onClick={() => handleFilterItems('худи')} key='5'>
          Худи
        </Item>
        <Item onClick={() => handleFilterItems('куртки')} key='6'>
          Куртки
        </Item>

        <Item onClick={() => handleFilterItems('пиджаки')} key='7'>
          Пиджаки
        </Item>

        <Item onClick={() => handleFilterItems('джинсы')} key='8'>
          Джинсы
        </Item>
        <Item onClick={() => handleFilterItems('брюки')} key='9'>
          Брюки
        </Item>
        <Item onClick={() => handleFilterItems('платья')} key='10'>
          Платья
        </Item>
      </SubMenu>
      <SubMenu
        key='sub3'
        icon={
          <span role='img' aria-label='handbag' className='filter-icon'>
            👜
          </span>
        }
        title='Аксессуары'
      >
        <Item onClick={() => handleFilterItems('сумки')} key='11'>
          Сумки
        </Item>
        <Item onClick={() => handleFilterItems('кепки')} key='12'>
          Кепки
        </Item>
        <Item onClick={() => handleFilterItems('кепки')} key='13'>
          Шапки
        </Item>
        <Item onClick={() => handleFilterItems('перчатки')} key='14'>
          Перчатки
        </Item>
        <Item onClick={() => handleFilterItems('украшения')} key='15'>
          Украшения
        </Item>
        <Item onClick={() => handleFilterItems('разное')} key='16'>
          Разное
        </Item>
      </SubMenu>
    </Menu>
  );
};

export default Filters;
