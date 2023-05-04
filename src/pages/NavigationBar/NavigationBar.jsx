import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div>
            <Container className='mt-2'>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='p-4 rounded' >
                    <Container>
                        <h2 className='fw-bold'>Hunger<span className='text-success'>Court</span> </h2>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <NavLink to='/' className={({isActive})=>(isActive?'text-success fw-bold fs-3 text-decoration-none m-2':'text-blue fs-3 text-decoration-none m-2')}>Home</NavLink>
                                <NavLink to='/blog' className={({isActive})=>(isActive?'text-success fw-bold fs-3 text-decoration-none m-2':'text-blue fs-3 text-decoration-none m-2')}>Blog</NavLink>
                            </Nav>
                            <Nav>
                                {
                                    user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                                }

                                {
                                    user ?
                                        <Button onClick={handleLogOut} variant="secondary">Logout</Button> :
                                        <Link to='/login'>
                                            <Button>Login</Button>
                                        </Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
    );
};

export default NavigationBar;