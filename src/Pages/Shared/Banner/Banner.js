import React from 'react';
import { Carousel, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner1 from '../../../images/BannerImg/banner.jpg';
import Banner2 from '../../../images/BannerImg/banner2.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner1}
            alt="First slide"
          />
          <Carousel.Caption className="banner1">
            <p>Wearing a mask is not just about keeping ourselves safe, <br /> it's about keeping everyone safe <br /> -- at work, in the community, and at home.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Banner2}
            alt="Second slide"
          />
      
          <Carousel.Caption className="banner2">
            <p>Upto 10% discount to all products</p>
            <Link to="/services"><button className="btn btn-primary">Detail here</button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
        
    );
};

export default Banner;