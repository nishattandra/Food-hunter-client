import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Chef from '../Chef/Chef';

const Home = () => {

    const array = [1, 2, 3, 4, 5, 6]
    return (
        <div className='container' style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            {
                array.map(arr => <Chef></Chef>)
            }
        </div>
    );
};

export default Home;