import React from 'react';
import { Row, Col, Layout, Typography } from 'antd';
import Navbar from '../components/menu/Navbar';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Goods from '../components/goods/Goods'
import './pages.scss'

const Listing = () => {
    const { Content } = Layout;
    

    return (
        <>
            <Row>
                <Col span={24}>
                    <Navbar />
                    <Content className="navbar-margin">
                        <Breadcrumbs />
                        <Goods />
                    </Content>
                </Col>
            </Row>
        </>
    )
}

export default Listing;

