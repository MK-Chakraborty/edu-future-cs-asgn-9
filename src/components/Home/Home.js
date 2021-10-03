import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import img from '../../images/hand-697264_640.png';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <Container className="py-5 bg-info px-5" style={{ "borderRadius": "30px" }}>
                <h3 className="lh-lg mb-5 border-0 border-bottom border-3 border-dark">Why <i>future <i className="fas fa-satellite"></i> CS</i> ?</h3>
                <Row>
                    <Col xs={12} sm={12} md={6} lg={7}>
                        <ListGroup style={{ "borderRadius": "20px" }}>
                            <ListGroup.Item variant="light">Friendly Environment</ListGroup.Item>
                            <ListGroup.Item variant="secondary">Best Support</ListGroup.Item>
                            <ListGroup.Item variant="light">Amazing Instructors</ListGroup.Item>
                            <ListGroup.Item variant="secondary">Practical Projects</ListGroup.Item>
                            <ListGroup.Item variant="light">Job Placement</ListGroup.Item>
                            <ListGroup.Item variant="secondary">Free Books</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={5}>
                        <img src={img} className="w-100 rounded-pill" alt="" />
                    </Col>
                </Row>
            </Container>

            <Container className="my-5 py-5 bg-info px-5" style={{ "borderRadius": "30px" }}>
                <h3 className="lh-lg mb-5 border-0 border-bottom border-3 border-dark"><i className="fas fa-wave-square"></i>  Top Rated Services <i className="fas fa-wave-square"></i></h3>
                <Row>
                    {
                        services.map(service => <HomeServices key={service.id} service={service}></HomeServices>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;