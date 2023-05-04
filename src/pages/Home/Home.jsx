import React, { useContext } from 'react';
import './Home.css'
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import FirstBanner from '../FirstBanner/FirstBanner';
import SecondBanner from '../SecondBanner/SecondBanner';
import { AuthContext } from '../../providers/AuthProvider';
import { Button, Card, Spinner } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import food1 from '../../assets/images/food1.png'
import food2 from '../../assets/images/food2.png'
import food3 from '../../assets/images/food3.png'
import food4 from '../../assets/images/food4.png'
import food5 from '../../assets/images/food5.png'

const Home = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='d-flex justify-content-center'><Spinner animation="border" variant="primary" /></div>
    }

    const allChef = useLoaderData();

    return (
        <div>
            <SecondBanner></SecondBanner>
            <h2 className='text-center mt-2 fw-bolder'>The Chefs</h2>
            <div className='container' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
                {
                    allChef.map(chef => <Chef
                        key={chef.id}
                        chef={chef}></Chef>)
                }
            </div>
            <h2 className='text-center fw-bold mb-5 mt-3'><span className='fst-italic text-success'>Latest</span> Recipes</h2>
            <Marquee className='mt-4'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'200px'}} variant="top" src={food1} />
                    <Card.Body>
                        <Card.Title>Latest Food</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'200px'}} variant="top" src={food2} />
                    <Card.Body>
                        <Card.Title>Latest Food</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'200px'}} variant="top" src={food3} />
                    <Card.Body>
                        <Card.Title>Latest Food</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'200px'}} variant="top" src={food5} />
                    <Card.Body>
                        <Card.Title>Latest Food</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{height:'200px'}} variant="top" src={food4} />
                    <Card.Body>
                        <Card.Title>Latest Food</Card.Title>
                    </Card.Body>
                </Card>
            </Marquee>
            <FirstBanner></FirstBanner>
        </div>
    );
};

export default Home;