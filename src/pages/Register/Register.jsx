import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=' border border-primary-subtle rounded-4 mx-auto mt-5' style={{ width: '650px', height: '600px' }}>
            <Form className=' mx-auto w-75 mt-4'>
                <div className='d-flex'>
                    <h4 className='text-secondary'> <FaUserFriends style={{ fontSize: '3rem' }}></FaUserFriends> Register an Account</h4>
                    <Link to='/login' className='mt-4 ms-5 text-secondary'>Already a member?</Link>
                </div>
                <hr />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>USERNAME</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>PHOTO URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" required/>
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <hr />
                <Button variant="secondary" type="submit" className='mt-3 p-2 fs-5'>
                    Register
                </Button>
                <Button variant="secondary" type="submit" className='ms-3 p-2 mt-3 fs-5'>
                    <Link to='/login' className='text-white text-decoration-none'>Login</Link>
                </Button>
            </Form>
        </div>
    );
};

export default Register;