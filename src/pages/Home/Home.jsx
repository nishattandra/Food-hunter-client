import React from 'react';
import './Home.css'
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import FirstBanner from '../FirstBanner/FirstBanner';
import SecondBanner from '../SecondBanner/SecondBanner';

const Home = () => {

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
            
            <FirstBanner></FirstBanner>
        </div>
    );
};

export default Home;