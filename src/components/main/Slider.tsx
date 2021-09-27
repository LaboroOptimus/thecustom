import React from 'react';
import { Carousel, Row, Col } from 'antd';
import './main.scss';

const responsiveConfig =  [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        dots: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

const data = [
    {
        id: 0,
        image: 'https://fakeimg.pl/250x250/eeeeee/',
        text: 'Some item'
    },
    {
        id: 1,
        image: 'https://fakeimg.pl/250x250/eeeeee/',
        text: 'Some item'
    },
    {
        id: 2,
        image: 'https://fakeimg.pl/250x250/eeeeee/',
        text: 'Some item'
    },
    {
        id: 3,
        image: 'https://fakeimg.pl/250x250/eeeeee/',
        text: 'Some item'
    },
    {
        id: 4,
        image: 'https://fakeimg.pl/250x250/eeeeee/',
        text: 'Some item'
    },
    {
        id: 5,
        image: 'https://fakeimg.pl/250x250/eeeeee/',
        text: 'Some item'
    },
    {
        id: 6,
        image: 'https://fakeimg.pl/250x250/eeeeee/',
        text: 'Some item'
    },
];


const Item = (props:any) => {
    return (
        <Col md={6} className="slider-item">
            <div>
                <img src={props.img} />
            </div>
            <h3>{props.text}</h3>
        </Col>
    )
}


const Slider = () => {
    return (
        <Carousel responsive={...responsiveConfig} slidesToShow={4} dots draggable centerMode centerPadding="25px">
            {data.map((item, index) => {
                return <Item key={item.id} img={item.image} text={item.text}/>
            })}
        </Carousel>
    )
}

export default Slider;