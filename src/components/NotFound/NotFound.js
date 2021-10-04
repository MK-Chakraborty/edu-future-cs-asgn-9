import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import img from '../../images/banner_error.jpg'

const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home')
    }

    return (
        <Container>
            <img className="w-100 rounded-pill" src={img} alt="" />
            <Button onClick={handleClick} className="my-5 py-3 px-5 fs-3 rounded-pill" variant="info"> <i className="fas fa-arrow-left"></i> GO BACK <i className="fas fa-home"></i></Button>
        </Container>
    );
};

export default NotFound;