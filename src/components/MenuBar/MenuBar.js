import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const MenuBar = () => {
    return (
        <Container fluid className="px-0">
            <Navbar bg="info" expand="lg">
                <Container>
                    <Navbar.Brand> <h3><i>future <i className="fas fa-satellite"></i> CS</i></h3> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="pe-3 text-decoration-none text-dark"><h4>Home</h4></NavLink>
                            <NavLink to="/services" className="pe-3 text-decoration-none text-dark"><h4>Services</h4></NavLink>
                            <NavLink to="/about" className="pe-3 text-decoration-none text-dark"><h4>About</h4></NavLink>
                            <NavLink to="/policy" className=" text-decoration-none text-dark"><h4>Policy</h4></NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default MenuBar;