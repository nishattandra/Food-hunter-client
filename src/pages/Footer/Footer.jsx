import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGoogle, FaGithub, FaLinkedin } from 'react-icons/fa';
import icon from '../../assets/images/icon.jpg'
import './Footer.css'

const Footer = () => {
    return (
        <div className="container mt-5">

            <footer className="text-center text-white" style={{ backgroundColor: 'Gray' }}>

                <div className="container">
                    <section className="">
                        <div className="row lg-d-flex justify-content-center">
                            <div className="col-lg-8 d-flex justify-content-center ">
                                <img className='mt-5 img' style={{ width: '50px', borderRadius: '50%' }} src={icon} alt="" />
                                <h2 className='fw-bold mt-5 ms-3'>FoodHunter </h2>
                            </div>
                        </div>
                    </section>
                    <section className="mt-3">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">About us</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Products</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Terms & Conditions</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Privacy Policy</a>
                                </h6>
                            </div>

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#!" className="text-white">Contact</a>
                                </h6>
                            </div>
                        </div>

                    </section>

                    <hr className="my-5" />
                    <section className="text-center mb-5">
                        <a href="" className="text-white me-4">
                            <FaFacebook></FaFacebook>
                        </a>
                        <a href="" className="text-white me-4">
                            <FaTwitter></FaTwitter>
                        </a>
                        <a href="" className="text-white me-4">
                            <FaGoogle></FaGoogle>
                        </a>
                        <a href="" className="text-white me-4">
                            <FaInstagram></FaInstagram>
                        </a>
                        <a href="" className="text-white me-4">
                            <FaLinkedin></FaLinkedin>
                        </a>
                        <a href="" className="text-white me-4">
                            <FaGithub></FaGithub>
                        </a>
                        <a href="" className="text-white me-4">
                            <FaYoutube></FaYoutube>
                        </a>
                    </section>
                </div>
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
                >
                    © 2023 Copyright
                    <p className="text-white ms-5"
                    >Developed By: Nishat Jahan Tandra</p
                    >
                </div>
            </footer>
        </div>
    )
};

export default Footer;



{/* // <div className='container d-flex bg-dark mt-4 p-5 justify-content-between rounded'>
        //     <div className='d-flex text-light'>
        //         <h6 className='me-3'> Terms of Service</h6>
        //         <h6 className='me-3'> Privacy Policy</h6>
        //         <h6> About Us</h6>
        //     </div>
        //     <div>
        //         <FaFacebook className='text-secondary me-3' style={{fontSize: '1.5rem', fill:'White'}}></FaFacebook>
        //         <FaTwitter className='text-secondary me-3' style={{fontSize: '1.5rem', fill:'White'}}></FaTwitter>
        //         <FaInstagram className='text-secondary me-3' style={{fontSize: '1.5rem', fill:'White'}}></FaInstagram>
        //         <FaYoutube className='text-secondary' style={{fontSize: '1.5rem', fill:'White'}}></FaYoutube>
        //     </div>
        // </div> */}