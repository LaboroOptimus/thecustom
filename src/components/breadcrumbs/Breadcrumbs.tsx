import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom'
import { Row, Col, Breadcrumb, Typography } from 'antd'
import { Link } from 'react-router-dom'
const { Title } = Typography
import './breadcrumbs.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPath } from '../../redux/actions/creators/service';
import { RootState } from '../../redux/rootReducer';
import { path } from '../../utils/path';

const Breadcrumbs = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentPath = useSelector((state: RootState) => state.service.currentPath);

    useEffect(() => {
        dispatch(setPath(location.pathname))
    }, [location]);

    const route = currentPath.split('/');
    route.splice(0, 1, '/');

    const { Item } = Breadcrumb;
    return (
        <>
            <Row className="title-wrapper">
                <Title level={1}>Магазин</Title>
            </Row>
            <Row className="breadcrumbs-wrapper">
                <Col span={24}>
                    <Breadcrumb>
                        {route?.map((item: string, index: number) => {
                            return (
                                <Item key={index}>
                                    <Link to={item}>{path.get(item)}</Link>
                                </Item>
                            )
                        })}
                    </Breadcrumb>
                </Col>
            </Row>
        </>
    )
}

export default Breadcrumbs