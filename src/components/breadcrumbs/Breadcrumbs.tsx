import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col, Breadcrumb, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPath } from '../../redux/actions/creators/service';
import { RootState } from '../../redux/rootReducer';
import { path } from '../../utils/path';

import './breadcrumbs.scss';

const Breadcrumbs = ({ name }: any) => {
  const { Title } = Typography;
  const location = useLocation();
  const dispatch = useDispatch();

  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const currentPath = useSelector((state: RootState) => state.service.currentPath);
  const currentItem = useSelector((state: RootState) => state.goods.item);

  useEffect(() => {
    dispatch(setPath(location.pathname));
    let r = currentPath.split('/');
    r.splice(0, 1, '/');
    setBreadcrumbs(r);
  }, [location, currentPath]);

  const { Item } = Breadcrumb;

  const formatPath = (path: string) => {
    if (path === '/') {
      return path;
    } else {
      return `/${path}`;
    }
  };

  // {item.length ? `/${item}` : '/'}
  return (
    <>
      <Row className='title-wrapper'>
        <Title level={1}>
          {path.get(breadcrumbs[breadcrumbs.length - 1])
            ? path.get(breadcrumbs[breadcrumbs.length - 1])
            : currentItem.name}
        </Title>
      </Row>
      <Row className='breadcrumbs-wrapper'>
        <Col span={24}>
          <Breadcrumb>
            {breadcrumbs?.map((item: string, index: number) => {
              return (
                <Item key={index}>
                  <Link to={formatPath(item)}>
                    {path.get(item) ? path.get(item) : currentItem.name}
                  </Link>
                </Item>
              ); // to={}
            })}
          </Breadcrumb>
        </Col>
      </Row>
    </>
  );
};

export default Breadcrumbs;
