import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Learners = (props) => {
    const {name, picture} = props.student;
    return (

        <Col xs={12} sm={12} md={6} lg={4}>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <img className="rounded-circle" src={picture.medium} alt="" />
                    </Col>
                    <Col xs={12} sm={12} md={8} lg={9}>
                        <h4>{name.first} {name.last}</h4>
                        <h5 className="text-secondary"><i>future <i className="fas fa-satellite"></i> CS</i> fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to students</h5>
                    </Col>
                </Row>
            </Container>
        </Col>

    );
};

export default Learners;