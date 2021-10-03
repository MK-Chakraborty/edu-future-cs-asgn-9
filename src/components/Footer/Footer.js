import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Container fluid className="bg-info mt-5">
            <Container className="text-center py-5">
                <h1 className="pb-3"><i>future <i className="fas fa-satellite"></i> CS</i></h1>
                <h5>We Wish You A Bright Furure!</h5>
                <h6>Copyright <i className="far fa-copyright"></i> Protected</h6>
            </Container>
        </Container>
    );
};

export default Footer;