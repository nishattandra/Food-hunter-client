import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { HiOutlineHeart, HiArrowNarrowRight } from "react-icons/hi";

const Chef = ({ chef }) => {

    const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes } = chef;
    return (
        <CardGroup className='container '>
            <Card className='mt-5'>
                <Card.Img className='img-fluid' style={{ height: '500px' }} variant="top" src={chefPicture} />
                <Card.Body>
                    <Card.Title>{chefName}</Card.Title>
                    <Card.Text>
                        Years of Experience: {yearsOfExperience}
                    </Card.Text>
                    <Card.Text>
                        Number of Recipes: {numberOfRecipes}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                  <span><HiOutlineHeart style={{fontSize:'1.5rem', fill:'red'}}></HiOutlineHeart>  {likes}</span>
                   <Button>View Recipes <HiArrowNarrowRight></HiArrowNarrowRight></Button> 
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Chef;