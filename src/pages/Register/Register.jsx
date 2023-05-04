import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaUserFriends } from 'react-icons/fa';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const { createUser, updateUserData, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [err, setErr] = useState('')
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        if(password.length <6 ){
            setErr('Add more than six character')
        }
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserData(result.user, name, photo)
                event.target.reset()
                setErr('')
                navigate('/login')
                logOut();
            })
            .catch(error => {
                console.log(error);
                setErr(error.message)
            })
        // console.log('register Clicked')
    }

    return (
        <div className=' border border-primary-subtle rounded-4 mx-auto mt-5' style={{ width: '650px', height: '620px' }}>
            <Form className=' mx-auto w-75 mt-4' onSubmit={handleRegister}>
                <div className='d-flex'>
                    <h4 className='text-secondary'> <FaUserFriends style={{ fontSize: '3rem' }}></FaUserFriends> Register an Account</h4>
                    <Link to='/login' className='mt-4 ms-5 text-secondary'>Already a member?</Link>
                </div>
                <hr />
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>USERNAME</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="photo">
                    <Form.Label>PHOTO URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL" />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-5" controlId="password">
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
                <Form.Text className='text-danger fs-5'>
                    <p>{err}</p>
                </Form.Text>
                {/* <Form.Control type="submit" name='submit' placeholder="Submit" required /> */}
            </Form>
        </div>
    );
};

export default Register;