import React from 'react';
import food5 from '../../assets/images/food5.png'
import './SecondBanner.css'
import { Button } from 'react-bootstrap';
import { HiArrowNarrowRight } from "react-icons/hi";

const SecondBanner = () => {
    return (
        <div className='container d-flex mb-4'>
            <div>
                <img style={{ width: '700px', height: '500px' }} src={food5} alt="" />
            </div>
            <div>
                <h1 className='ms-5 fw-bolder text-center' style={{ marginTop: "120px" }}>WelCome to Our <br /><span className='text-success'>Food Hunter </span></h1>
                <p className='text-center fs-5'>Here we provide our best service. We have our best food. Pay a visit in our food corner. We hope that you like it.</p>
                <div className='d-flex justify-content-center'>
                    <Button className=' mt-2 fw-bold' >Explore More <HiArrowNarrowRight></HiArrowNarrowRight></Button>
                </div>
            </div>
        </div>

    )
};

export default SecondBanner;