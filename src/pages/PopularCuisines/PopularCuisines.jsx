import React from 'react';
import Marquee from "react-fast-marquee";
import flag1 from '../../assets/images/flag1.png'
import flag2 from '../../assets/images/flag2.png'
import flag3 from '../../assets/images/flag3.png'
import flag4 from '../../assets/images/flag4.png'
import flag5 from '../../assets/images/flag5.png'
import { Card } from 'react-bootstrap';

const PopularCuisines = () => {
    return (
        <div className='container'>
            <h2 className='text-center fw-bold mb-5 mt-5'><span className='fst-italic text-success'>Popular</span> Cuisines</h2>
            <Marquee className='mt-4'>
                <Card style={{ width: '18rem',backgroundColor:'LightGray' }} className='me-2'>
                    <Card.Img style={{height:'200px'}} variant="top" src={flag1} />
                    <Card.Body>
                        <Card.Title className='text-center'>Brazilian</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',backgroundColor:'LightGray' }} className='me-2'>
                    <Card.Img style={{height:'200px'}} variant="top" src={flag2} />
                    <Card.Body>
                        <Card.Title className='text-center'>French</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',backgroundColor:'LightGray' }} className='me-2'>
                    <Card.Img style={{height:'200px'}} variant="top" src={flag3} />
                    <Card.Body>
                        <Card.Title className='text-center'>Italian</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',backgroundColor:'LightGray' }} className='me-2'>
                    <Card.Img style={{height:'200px'}} variant="top" src={flag4} />
                    <Card.Body>
                        <Card.Title className='text-center'>Mexican</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem',backgroundColor:'LightGray' }} className='me-2'>
                    <Card.Img style={{height:'200px'}} variant="top" src={flag5} />
                    <Card.Body>
                        <Card.Title className='text-center'>Indian</Card.Title>
                    </Card.Body>
                </Card>
            </Marquee>
        </div>
    );
};

export default PopularCuisines;