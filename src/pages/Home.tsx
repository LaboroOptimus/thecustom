import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Layout } from 'antd';
import { RootState } from '../redux/rootReducer';
import Navbar from '../components/menu/Navbar'
import Main from '../components/main/Main';
import './pages.scss';

const Home = () => {
    const { Content } = Layout
    const dispatch = useDispatch()
   
    return (
        <>
            <Row>
                <Col span={24}>
                    <Navbar />
                    <Content className="navbar-margin">
                        <Main/>
                    </Content>
                </Col>
            </Row>
        </>

    )
}

export default Home;