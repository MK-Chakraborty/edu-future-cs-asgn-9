import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import StarIcon from '../StarIcon/StarIcon';

const Service = (props) => {
    const { subject, thumb, fee, rate, duration, instructor, desp } = props.course;

    const iconArr = [];
    for (let i = 0; i < rate; i++) {
        iconArr.push(<i className="fas fa-star"></i>)
    }
    if (rate < 5) {
        for (let i = 0; i < (5 - rate); i++) {
            iconArr.push(<i className="far fa-star"></i>);
        }
    }

    return (
        <Card className="my-5" style={{ width: '30rem', height: '68rem' }}>
            <Card.Img variant="top" src={thumb} />
            <Card.Body>
                <Card.Title> <h3>{subject}</h3> </Card.Title>
                <p><Badge pill bg="secondary" className="p-2">Instructor: </Badge> {instructor}</p>
                <p>{desp}</p>
                <h6>Course Duration: {duration} Months</h6>
                <h4 style={{ color: 'gold' }}>{iconArr.map(icon => <StarIcon key={iconArr.indexOf(icon)} icon={icon}></StarIcon>)} </h4>
                <h5>Course Fee: {fee} $</h5>
            </Card.Body>
            <Card.Footer>
                <Button variant="primary">Enroll</Button>
            </Card.Footer>
        </Card>
    );
};

export default Service;