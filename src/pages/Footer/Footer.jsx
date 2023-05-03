import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='container d-flex bg-dark mt-4 p-5 justify-content-between rounded'>
            <div className='d-flex text-light'>
                <h6 className='me-3'> Terms of Service</h6>
                <h6 className='me-3'> Privacy Policy</h6>
                <h6> About Us</h6>
            </div>
            <div>
                <FaFacebook className='text-secondary me-3' style={{fontSize: '1.5rem', fill:'blue'}}></FaFacebook>
                <FaTwitter className='text-secondary me-3' style={{fontSize: '1.5rem', fill:'blue'}}></FaTwitter>
                <FaInstagram className='text-secondary me-3' style={{fontSize: '1.5rem', fill:'blue'}}></FaInstagram>
                <FaYoutube className='text-secondary' style={{fontSize: '1.5rem', fill:'blue'}}></FaYoutube>
            </div>
        </div>
    )
};

export default Footer;