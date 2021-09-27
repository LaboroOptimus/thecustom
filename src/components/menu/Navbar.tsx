import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import { Drawer, Button } from 'antd';
import cn from 'classnames'
import { MenuOutlined } from '@ant-design/icons';
import RightMenu from './RightMenu'
import Logo from './Logo'

import './menu.scss'


const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    const showDrawer = () => {
        setVisible(true)
    }

    const handleClose = () => {
        setVisible(false)
    }

    return (
        <nav>
            <div className={cn({ 'menu-wrapper-mobile': isTabletOrMobile })}>
                {isTabletOrMobile ? (
                    <Button
                        type="link"
                        className="menu-button-mobile"
                        onClick={showDrawer} icon={<MenuOutlined />}
                    />)
                    :
                    (<div className="Navbar">
                        <RightMenu />
                    </div>
                    )}

                <Drawer
                    title={<Logo />}
                    placement="right"
                    closable={false}
                    onClose={handleClose}
                    visible={visible}
                >
                    <RightMenu />
                </Drawer>
            </div>
        </nav>
    )
}

export default Navbar;