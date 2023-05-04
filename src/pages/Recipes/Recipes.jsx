import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';
import LazyLoad from 'react-lazy-load';
const Recipes = () => {

    const loadedRecipe = useLoaderData()
    const { chefName, chefPicture, recipe } = loadedRecipe;
    // console.log(recipe)
    return (
        <div className='container'>

            <Card style={{ width: '18rem' }} className='mx-auto '>
                
                <LazyLoad offset={300}>
                    <Card.Img variant="top" src={chefPicture} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            {
                recipe.map(re => <SingleRecipe key={re.recipeId} re ={re}></SingleRecipe>)
            }
        </div>
    );
};

export default Recipes;