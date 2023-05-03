import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const allChef = useLoaderData();

    return (
        <div className='container' style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            {
                allChef.map(chef => <Chef
                key={chef.id}
                chef = {chef}></Chef>)
            }
        </div>
    );
};

export default Home;