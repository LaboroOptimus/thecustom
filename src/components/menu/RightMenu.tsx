import React from 'react';
import { Menu, Grid, Layout } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import Logo from './Logo';
import { RootState } from '../../redux/rootReducer';
import { useSelector } from 'react-redux';
import './menu.scss';

const RightMenu = () => {
  const { Header } = Layout;
  const { Item } = Menu;
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isAuth = useSelector((state: RootState) => state.service.isTokenValid)

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
            <Link to='/add'>
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
