import React from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';

const HomeServices = (props) => {
    const {subject,thumb,fee,rate,duration,instructor,desp} = props.service;
    return (
        <Col xs={12} sm={12} md={6} lg={6} className="my-3" >
            <Container className="border-0 border-start border-3 border-light ps-3">
                <Row>
                    <Col xs={12} sm={12} md={4} lg={6}>
                        <img src={thumb} className="w-100 py-5" alt="" />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={6} className="text-start">
                        <h4>{subject}</h4>
                        <p><Badge pill bg="secondary" className="p-2">Instructor: </Badge> {instructor}</p>
                        <p>{desp.slice(0,180)} ...</p>
                        <h6>Course Duration: {duration} Months</h6>
                        <h5>{rate} <i class="fas fa-star"></i></h5>
                        <h5>Course Fee: {fee} $</h5>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
};

export default HomeServices;