import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <Container className="p-5 bg-info" style={{ "borderRadius": "30px" }}>
            <h3 className="lh-lg mb-5 border-0 border-bottom border-3 border-dark">Available Services <i className="fas fa-pen-nib"></i> </h3>
            <div className="d-flex justify-content-around flex-wrap">
                {
                    courses.map(course => <Service key={course.id} course={course}></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;