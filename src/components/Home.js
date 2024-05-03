import React from 'react'
import { Card, Container } from 'react-bootstrap';
import banner from '../images/banner.jpeg'
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <Card className="bg-dark text-white border-0">
                <Card.Img src={banner} alt="Background" height="550px" />
                <Card.ImgOverlay className='d-flex flex-column justify-content-center'>
                    <Container>
                        <Card.Title className='display-3 fw-bolder mb-0'>NEW SEASON ARRIVALS</Card.Title>
                        <Card.Text className='lead fs-2'>
                            CHECK OUT ALL TRENDS
                        </Card.Text>                      

                    </Container>

                </Card.ImgOverlay>
            </Card>
            <Products/>

        </div>
    )
}

export default Home
