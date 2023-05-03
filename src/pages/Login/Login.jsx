import React from 'react';
import { Button, Form } from 'react-bootstrap';
import {FaUserFriends} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className=' border border-primary-subtle rounded-4 mx-auto mt-5' style={{width:'600px', height:'450px'}}>
            <Form className=' mx-auto w-75 mt-4'>
                <h2 className='text-secondary'> <FaUserFriends style={{fontSize:'3rem'}}></FaUserFriends> Login</h2>
                <hr />
                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required/>
                </Form.Group>
                <hr />
                <Button variant="secondary" type="submit" className='mt-3 p-2 fs-5'>
                    Login
                </Button>
                <Button variant="secondary" type="submit" className='ms-3 p-2 mt-3 fs-5'>
                    <Link to='/register' className='text-white text-decoration-none'>Create an Account</Link>
                </Button>
            </Form>
        </div>
    );
};

export default Login;