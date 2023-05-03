import React from 'react';
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import { Carousel } from 'react-bootstrap';


const FirstBanner = () => {
    return (
        <div className='container mt-5'>
            <h2 className='text-center fw-bold mb-5'>Top <span className='fst-italic text-success'>Favourite</span> Foods</h2>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        style={{height:'600px'}}
                        src={image1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Classic Lasagna</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        style={{height:'600px'}}
                        src={image2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>California-style Sushi Rolls</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{height:'600px'}}
                        src={image3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Philly Cheesesteak</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default FirstBanner;