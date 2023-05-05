import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';
import LazyLoad from 'react-lazy-load';
import { HiOutlineHeart } from "react-icons/hi";
import './Recipes.css'

const Recipes = () => {

    const loadedRecipe = useLoaderData()
    const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes, shortBio, recipe } = loadedRecipe;
    // console.log(recipe)
    return (
        <div className='container'>

            <h3 className='mt-3 text-center fw-bold'>The Artist</h3>

            <Card style={{ width: '40rem' }} className='mx-auto text-center mt-2 profile'>
                
                <LazyLoad offset={300}>
                    <Card.Img  style={{width:'200px', marginTop:'10px'}} variant="top" src={chefPicture} />
                </LazyLoad>
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                        {shortBio}
                    </Card.Text>
                    <Card.Text className='fw-bold'>No. of Recipes: {numberOfRecipes}</Card.Text>
                    <Card.Text className='fw-bold'>Year Of Experience: {yearsOfExperience}</Card.Text>
                    <Card.Text className='fw-bold me-2'>{likes}<HiOutlineHeart style={{color:'red',fill:'red',fontSize:'1.5rem'}}></HiOutlineHeart></Card.Text>
                </Card.Body>
            </Card>
            <h3 className='mt-5 text-center fw-bold'>The Art</h3>
            {
                recipe.map(re => <SingleRecipe key={re.recipeId} re ={re}></SingleRecipe>)
            }
        </div>
    );
};

export default Recipes;