import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Learners from '../Learners/Learners';

const FAQ = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=3')
            .then(res => res.json())
            .then(data => setStudents(data.results))
    }, [])

    return (
        <div>
            <Container className="p-5 bg-info text-start" style={{ "borderRadius": "30px" }}>
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
            </Container>

            <Container className="p-5 bg-info my-5 text-start" style={{ "borderRadius": "30px" }}>
                <h3 className="lh-lg mb-5 border-0 border-bottom border-3 border-dark">Learners Feedback</h3>
                <Row>
                    {
                        students.map(student => <Learners key={student.location.postcode} student={student}></Learners>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default FAQ;

