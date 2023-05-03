import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <h2>Bangali Food</h2>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='mt-2' to="/category/0">Home</Link>
                            <Link className='mt-2' to="/category/0">Blog</Link>
                        </Nav>
                        <Nav>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container >
    );
};

export default NavigationBar;