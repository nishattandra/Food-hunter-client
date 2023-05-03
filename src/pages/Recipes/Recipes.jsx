import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Recipes = () => {

    const recipe = useLoaderData()
    const {chefName, chefPicture} = recipe;
    console.log(recipe)
    return (
        <div className='container'>
            
            <Card style={{ width: '18rem' }} className='mx-auto'>
                <Card.Img variant="top" src={chefPicture} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Recipes;