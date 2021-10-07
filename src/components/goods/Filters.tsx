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

  // const handleFilterItems = useCallback((id) => {
  //     dispatch(setGoodsFilter(id))
  // },[dispatch])

  const handleFilterItems = (id: number) => {
    dispatch(setGoodsFilter(id));
  };

  return (
    <Menu mode='inline' openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: '100%' }}>
      <SubMenu
        key='sub1'
        icon={
          <span role='img' aria-label='sneakers' className='filter-icon'>
            👟
          </span>
        }
        title='Обувь'
      >
        <Item onClick={() => handleFilterItems(1)} key='1'>
          Кроссовки
        </Item>
        <Item onClick={() => handleFilterItems(2)} key='2'>
          Ботинки
        </Item>
        <Item onClick={() => handleFilterItems(3)} key='3'>
          Кеды
        </Item>
        <Item onClick={() => handleFilterItems(4)} key='4'>
          Сандалии
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
        <Item onClick={() => handleFilterItems(5)} key='5'>
          Футболки
        </Item>
        <Item onClick={() => handleFilterItems(6)} key='6'>
          Толстовки
        </Item>
        <Item onClick={() => handleFilterItems(7)} key='7'>
          Куртки
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
        <Item onClick={() => handleFilterItems(8)} key='8'>
          Сумки
        </Item>
        <Item onClick={() => handleFilterItems(9)} key='9'>
          Кепки
        </Item>
        <Item onClick={() => handleFilterItems(10)} key='10'>
          Зонты
        </Item>
        <Item onClick={() => handleFilterItems(11)} key='11'>
          Перчатки
        </Item>
      </SubMenu>

      <SubMenu
        key='sub4'
        icon={
          <span role='img' aria-label='moai' className='filter-icon'>
            🗿
          </span>
        }
        title='Разное'
      >
        <Item key='12'>Сумки</Item>
      </SubMenu>
      <SubMenu
        key='sub5'
        icon={
          <span role='img' aria-label='gem' className='filter-icon'>
            💎{' '}
          </span>
        }
        title='Luxe'
      >
        <Item key='13'>Сумки</Item>
      </SubMenu>
    </Menu>
  );
};

export default Filters