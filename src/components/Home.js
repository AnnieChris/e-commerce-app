import React, { useState } from 'react';
import { Card, Container, Carousel } from 'react-bootstrap';
import banner from '../images/banner.jpeg'; // Add appropriate paths to your images
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import Products from './Products';
import Footer from "./Footer";

const Home = () => {

    return (
        <div className='hero'>
            <Card className="bg-dark text-white border-0">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner}
                            alt="First slide"
                            height="550px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="Second slide"
                            height="550px"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Third slide"
                            height="550px"
                        />
                    </Carousel.Item>
                </Carousel>
                <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
                    <Container>
                        <Card.Title className='display-3 fw-bolder mb-0'>NEW SEASON ARRIVALS</Card.Title>
                        <Card.Text className='lead fs-2'>
                            CHECK OUT ALL TRENDS
                        </Card.Text>
                    </Container>
                </Card.ImgOverlay>
            </Card>
            <Products />
        </div>
    );
};

export default Home;
