import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { HiOutlineHeart, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {

    const { chefName, chefPicture, yearsOfExperience, numberOfRecipes, likes, id } = chef;
    return (
        <div>
            <CardGroup className='container '>
                <Card className='mt-3'>
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
                        <span><HiOutlineHeart style={{ fontSize: '1.5rem', fill: 'red' }}></HiOutlineHeart>  {likes}</span>
                        <Link to={`/chef/${id}`}>
                            <Button>View Recipes <HiArrowNarrowRight></HiArrowNarrowRight></Button>
                        </Link>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Chef;