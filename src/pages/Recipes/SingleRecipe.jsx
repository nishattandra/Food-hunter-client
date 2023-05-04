import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { HiOutlineHeart } from "react-icons/hi";
import 'react-toastify/dist/ReactToastify.css';


const SingleRecipe = ({ re }) => {
    const [favButton, setFavbutton] = useState(false);
    const handleToast = () => {
        toast("Add to favourite");
        setFavbutton(true);
    }
    const { recipeImage, recipeName, ingredients, method, rating } = re;
    return (
        <Card className=' mt-4 mb-3' >
            <div className='d-flex'>
                <img src={recipeImage} className='w-50 m-4' alt="" />
                <div className='mt-4'>
                    <h4>Recipe Name: {recipeName}</h4>

                    <h5>Ingredients:</h5>
                    <ul>
                        {
                            ingredients.map(ing => <li key={ing}>{ing}</li>)
                        }
                    </ul>
                    <h5>Cooking Method: </h5>
                    <p>{method}</p>

                    <div className='d-flex justify-content-between mb-2'>
                        <p>Ratings: {rating}</p>
                        <Button className={favButton ? 'disabled' : ''} onClick={handleToast} variant="primary">Add Favourite <HiOutlineHeart style={{fill:'red', fontSize:'1.5rem', color:'red'}}></HiOutlineHeart></Button>
                        <ToastContainer></ToastContainer>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default SingleRecipe;