import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Container className='mt-2'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <h2>Bengali Food</h2>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Link className='text-decoration-none ms-2' to="/">Home</Link>
                                <Link className='text-decoration-none ms-2' to="/blog">Blog</Link>
                            </Nav>
                            <Nav>
                                <Link to='/login'>
                                    <Button>Login</Button>
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;