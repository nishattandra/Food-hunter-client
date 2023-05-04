import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaUserFriends, FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { handleGoogleSignIn, handleGithubSignIn, signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'


    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error)
        })
    }


    const githubSignIn = () => {
        handleGithubSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className=' border border-primary-subtle rounded-4 mx-auto mt-5' style={{ width: '600px', height: '600px' }}>
            <Form className=' mx-auto w-75 mt-4' onSubmit={handleLogin}>
                <h2 className='text-secondary'> <FaUserFriends style={{ fontSize: '3rem' }}></FaUserFriends> Login</h2>
                <hr />
                <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                    <Form.Label>EMAIL</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">

                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <hr />
                <Button  variant="secondary" type="submit" className='mt-3 p-2 fs-5'>
                    Login
                </Button>
                <Button variant="secondary" type="submit" className='ms-3 p-2 mt-3 fs-5'>
                    <Link to='/register' className='text-white text-decoration-none'>Create an Account</Link>
                </Button>
                <br />
                <h2 className='mx-auto text-center'>OR</h2>
                <div className='text-center'>
                    <Button onClick={googleSignIn}  variant="white" type="submit" className=' p-2 fs-5 mx-auto'>
                        <FaGoogle></FaGoogle> Log in with Google
                    </Button>
                    <br />
                    <Button onClick={githubSignIn} variant="white" type="submit" className='mt-3 p-2 fs-5'>
                        <FaGithub></FaGithub> Log in with Github
                    </Button>
                </div>

            </Form>
        </div>
    );
};

export default Login;