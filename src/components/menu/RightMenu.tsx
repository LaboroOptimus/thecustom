import React from 'react';
import { Menu, Grid, Layout } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Logo from './Logo';
import './menu.scss';
import { useAuth } from '../../utils/hooks';

const RightMenu = () => {
  const { Header } = Layout;
  const { Item } = Menu;
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isAuth = useAuth();

  return (
    <Header className={cn('menu-header', { 'menu-header-mobile': isTabletOrMobile })}>
      {!isTabletOrMobile && (
        <Link to='/'>
          <Logo />
        </Link>
      )}
      <Menu mode={md ? 'horizontal' : 'inline'} className='menu'>
        <Item key='listing' className='menu-item'>
          <Link to='/listing'>
            <span role='img' aria-label='shirt'>
              🛒
            </span>{' '}
            Магазин
          </Link>
        </Item>

        {isAuth && (
          <Item key='add' className='menu-item'>
            <Link to='/'>
              <span role='img' aria-label='plus'>
                ➕
              </span>{' '}
              Добавить
            </Link>
          </Item>
        )}

        {!isAuth && (
          <Item key='register' className='menu-item'>
            <Link to='/register'>Регистрация</Link>
          </Item>
        )}

        {!isAuth && (
          <Item key='login' className='menu-item'>
            <Link to='/login'>Вход на сайт</Link>
          </Item>
        )}
      </Menu>
    </Header>
  );
};

export default RightMenu;

/* https://github.com/Rupinderthind/Ant_design_navbar/tree/master/src */
