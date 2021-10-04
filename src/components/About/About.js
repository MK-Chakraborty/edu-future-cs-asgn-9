import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="my-5 py-5 bg-info px-5" style={{ "borderRadius": "30px" }}>
            <h2 className="lh-lg mb-5 border-0 border-bottom border-3 border-dark">About <i>future <i className="fas fa-satellite"></i> CS</i></h2>
            <h5 className="py-2">Changing learning for the better Whether you want to learn or to share what you know, you’ve come to the right place. 
                As a global destination for online learning, we connect people through knowledge.</h5>
            <h5 className="py-2">We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of 
                business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</h5>
            <h5 className="py-2">Our global community and our course catalog get bigger every day. Check out our latest courses as of October 2021.</h5>
        </Container>
    );
};

export default About;