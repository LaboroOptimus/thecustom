import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col, Button, Typography } from 'antd';
import cn from 'classnames'
import Slider from './Slider'
import Footer from './Footer'
import './main.scss';

const { Title, Paragraph } = Typography;

const HowItWorks = () => {
    return (
        <div className="wrapper">
            <Row>
                <Col span={24}>
                    <Title className="title" level={2}>Как это работает?</Title>
                </Col>
            </Row>
            <Row>
                <Col xs={24} sm={24} md={8} className="howitworks-item">
                    <img src="https://fakeimg.pl/100x100/eeeeee/" />
                    <Title level={4}>Доставка на следующий день</Title>
                    <Paragraph>В Москве и 60 других крупных городах России вы получите свой заказ уже на
                        следующий день! Более подробную информацию об условиях доставки в ваш город можно найти здесь.</Paragraph>
                </Col>

                <Col xs={24} sm={24} md={8} className="howitworks-item">
                    <img src="https://fakeimg.pl/100x100/eeeeee/" />
                    <Title level={4}>Примерка перед покупкой</Title>
                    <Paragraph>Интернет-магазин Lamoda даёт возможность примерить одежду,
                        обувь и другие товары перед оплатой заказа курьеру. Оплачивайте только то, что вам подошло и понравилось!</Paragraph>
                </Col>

                <Col xs={24} sm={24} md={8} className="howitworks-item">
                    <img src="https://fakeimg.pl/100x100/eeeeee/" />
                    <Title level={4}>Удобные способы оплаты</Title>
                    <Paragraph>Вы можете оплатить покупки не только наличными, но и банковской картой.
                        У всех курьеров Lamoda Express при себе есть терминал для оплаты картами.</Paragraph>
                </Col>
            </Row>
        </div>
    )
}

const FirstScreen = () => {
    return (
        <Row>
            <Col xs={24} sm={24} md={12}>
                <div className={cn("main-text", "wrapper")}>
                    <Title>The Custom - первый в России маркетплейс кастомной одежды</Title>
                    <Paragraph>Равным образом консультация с широким
                        активом способствует подготовки и реализации направлений прогрессивного развития.</Paragraph>
                    <Link to="/listing">
                        <Button type="primary">Перейти в магазин</Button>
                    </Link>

                    <Button type="link">Зарегистрироваться</Button>
                </div>
            </Col>
            <Col xs={0} sm={0} md={12}>
                <div className="main-bg" />
            </Col>
        </Row>
    )
}

const LatestArrivals = () => {
    return (
        <div className="wrapper">
            <Row>
                <Col span={24}>
                    <Title className="title" level={2}>Последние поступления</Title>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Slider />
                </Col>
            </Row>
        </div>
    )
}

const Auction = () => {
    return (
        <Row className="wrapper">
            <Col xs={24} sm={24} md={12} className="main-cta-text">
                <Title level={2}>Хочешь поучаствовать в закрытых аукционах?</Title>
                <Paragraph>Создай бесплатный аккаунт сейчас и получай доступ к экслюзивным распродажам!</Paragraph>
                <Button type="primary">Зарегистрироваться</Button>
            </Col>
            <Col xs={0} sm={0} md={12}>
                <div className="main-cta-bg" />
            </Col>
        </Row>
    )
}

const Main = () => {
    return (
        <>
            <FirstScreen />
            <HowItWorks />
            <LatestArrivals />
            <Auction />
            <Footer/>
        </>

    )
}

export default Main