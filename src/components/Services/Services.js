import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])
    return (
        <Container className="p-5 bg-info" style={{ "borderRadius": "30px" }}>
            <h3 className="lh-lg mb-5 border-0 border-bottom border-3 border-dark">All Services <i class="fas fa-pen-nib"></i> </h3>
        </Container>
    );
};

export default Services;