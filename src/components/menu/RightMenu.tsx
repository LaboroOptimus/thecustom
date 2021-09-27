import React from 'react';
import { Menu, Grid, Layout } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import Logo from './Logo'
import './menu.scss';


const RightMenu = () => {
    const { Header } = Layout;
    const { useBreakpoint } = Grid;
    const { md } = useBreakpoint();
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    return (
        <Header className={cn("menu-header", {"menu-header-mobile" : isTabletOrMobile})}>
            {!isTabletOrMobile && <Link to="/">
                <Logo />
            </Link>}
            <Menu mode={md ? "horizontal" : "inline"} className="menu">
                <Menu.Item key="app" className="menu-item">
                    <Link to="/listing">
                        <span role="img" aria-label="shirt">🛒</span> Магазин
                    </Link>
                </Menu.Item>

                <Menu.Item key="app1" className="menu-item">
                    <Link to="/">
                        <span role="img" aria-label="plus">➕</span> Добавить
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    );
}

export default RightMenu;

/* https://github.com/Rupinderthind/Ant_design_navbar/tree/master/src */