import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import img1 from '../../images/board-453758_640.jpg'
import img2 from '../../images/cyber-2377718_640.jpg'
import img3 from '../../images/satellite-67718_640.jpg'

const Banner = () => {
    return (
        <Container fluid className="my-5">
            <Carousel>
                <Carousel.Item>
                    <Container className="bg-info p-5 bannerStyle">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center py-5">
                                <h1>Welcome To <i> Future <i className="fas fa-satellite"></i> CS</i>! </h1>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="py-5">
                                <img
                                    className="d-block w-100 rounded-circle"
                                    src={img1}
                                    alt="Third slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="bg-info p-5 bannerStyle">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center py-5">
                                <h1 className="text-capitalize">Lift up your knowledge, with <i> Future <i className="fas fa-satellite"></i> CS</i>. </h1>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="py-5">
                                <img
                                    className="d-block w-100 rounded-circle"
                                    src={img2}
                                    alt="Third slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="bg-info p-5 bannerStyle">
                        <Row>
                            <Col xs={12} sm={12} md={6} lg={6} className="d-flex align-items-center py-5">
                                <h1 className="text-capitalize">High Skilled Instructors are always avaiable to help you! </h1>
                            </Col>
                            <Col xs={12} sm={12} md={6} lg={6} className="py-5">
                                <img
                                    className="d-block w-100 rounded-circle"
                                    src={img3}
                                    alt="Third slide"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default Banner;

