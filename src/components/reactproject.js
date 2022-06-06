import React from 'react';
import {Card,CardContent,CardMedia,Typography, CardActionArea } from '@mui/material';


const Reactproject = () => {
    return (
            <div className='project-main'>
                <div className="project-card project" data-aos="zoom-in">
                    <Card  className='cards-react'>
                        <CardActionArea href='https://suman-de-bista.github.io/react_todo/' target="_blank" rel="noreferrer">
                            <CardMedia
                            className='card-media'
                            component="img"
                            height="285"
                            width="200"
                            image="images/todo.png"
                            alt="To-DO"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                React To-Do App
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="project-card project" data-aos="zoom-in">
                    <Card  className='cards-react'>
                        <CardActionArea href='https://github.com/Suman-de-bista/react-twitter-clone' target="_blank" rel="noreferrer">
                            <CardMedia
                            className='card-media'
                            component="img"
                            height="285"
                            width="200"
                            image="images/twitter.png"
                            
                            alt="Twitter"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                React Twitter Clone 
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="project-card project" data-aos="zoom-in">
                    <Card  className='cards-react'>
                                <CardActionArea href='https://github.com/Suman-de-bista/react-recipe-app' target="_blank" rel="noreferrer">
                                    <CardMedia
                                    className='card-media'
                                    component="img"
                                    height="285"
                                    width="200"
                                    image="images/Recipe.png"
                                    alt="Recipe"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        React Recipe App
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                    </Card>
                </div>
                <div className="project-card project" data-aos="zoom-in">
                    <Card  className='cards-react'>
                                <CardActionArea href='https://github.com/Suman-de-bista/react-weather-app' target="_blank" rel="noreferrer">
                                    <CardMedia
                                    className='card-media'
                                    component="img"
                                    height="285"
                                    width="200"
                                    image="images/weather.png"
                                    alt="weather"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        React Weather App
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                    </Card>
                </div>
            </div>
    );
}

export default Reactproject;
