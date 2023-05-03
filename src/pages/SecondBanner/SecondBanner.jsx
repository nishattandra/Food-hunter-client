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
                <h1 className='ms-5 fw-bolder text-center' style={{marginTop:"120px"}}>WelCome to our <br /><span className='text-success'>Hunger Court </span></h1>
                <Button className='text-center mt-4 fw-bold ' style={{marginLeft:'100px'}}>Explore More <HiArrowNarrowRight></HiArrowNarrowRight></Button>
            </div>
        </div>

    )
};

export default SecondBanner;