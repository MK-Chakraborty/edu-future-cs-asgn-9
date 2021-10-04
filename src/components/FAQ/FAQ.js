import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container className="py-5 bg-info px-5 text-start" style={{ "borderRadius": "30px" }}>
            <h3 className="lh-lg mb-5 border-0 border-bottom border-3 border-dark">FAQ about <i>future <i className="fas fa-satellite"></i> CS</i></h3>
            <div className='my-3'>
                <h5><i className="far fa-question-circle"></i> What about <i>future <i className="fas fa-satellite"></i> CS</i> instructors? </h5>
                <h6 className="ps-5"><i className="fas fa-angle-double-right"></i> <i>future <i className="fas fa-satellite"></i> CS</i> instructors are real people who are passionate about sharing what they know with students all over the world.</h6>
            </div>
            <div className='my-3'>
                <h5><i className="far fa-question-circle"></i> What are the Teaching Languages of <i>future <i className="fas fa-satellite"></i> CS</i>? </h5>
                <h6 className="ps-5"><i className="fas fa-angle-double-right"></i> Whatever your learning style, we have a course that fits. Coming from instructors all over the world, our courses span over 65 languages and cover just about anything you’d want to know.</h6>
            </div>
            <div className='my-3'>
                <h5><i className="far fa-question-circle"></i> Am I talented enough to enroll at <i>future <i className="fas fa-satellite"></i> CS</i> courses? </h5>
                <h6 className="ps-5"><i className="fas fa-angle-double-right"></i> Certainly! Talented people are everywhere, but opportunities can be harder to find. With <i>future <i className="fas fa-satellite"></i> CS</i>, David — a Nigerian refugee — was able to start a new career and a new life in Germany.</h6>
            </div>
            <Row>
                <Col xs={12} sm={12} md={6} lg={7}>

                </Col>
                <Col xs={12} sm={12} md={6} lg={5}>

                </Col>
            </Row>
        </Container>
    );
};

export default FAQ;