import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SingleRecipe = ({ re }) => {
    const [favbutton, setfavbutton] = useState(false);
    const handleToast = () =>{
        toast("Add to favourite");
        setfavbutton(true);
    }
    const { recipeImage, recipeName, ingredients } = re;
    return (
        <Card className=' mt-4 mb-3' >
            {/* <Card.Img variant="top" src={re.recipeImage} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    {re.ingredients}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
            <div className='d-flex'>
                <img src={recipeImage} className='w-50 m-4' alt="" />
                <div className='mt-4'>
                    <h4>Recipe Name: {recipeName}</h4>
                    <ul>
                        {
                            ingredients.map(ing => <li>{ing}</li>)
                        }
                    </ul>
                    <Button className={favbutton?'d-none':''} onClick={handleToast} variant="primary">Add Favourite</Button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </Card>
    );
};

export default SingleRecipe;