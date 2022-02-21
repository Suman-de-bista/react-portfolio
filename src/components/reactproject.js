import React from 'react';
import {Card,CardContent,CardMedia,Typography, CardActionArea } from '@mui/material';


const Reactproject = () => {
    return (
            <div className='project-main'>
                <div className="project-card project" data-aos="zoom-in">
                    <Card sx={{ minWidth: 250 }} className='cards'>
                        <CardActionArea href='https://suman-de-bista.github.io/react_todo/'>
                            <CardMedia
                            component="img"
                            height="285"
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
                    <Card sx={{ minWidth: 250 }} className='cards'>
                        <CardActionArea href='https://github.com/Suman-de-bista/react-twitter-clone'>
                            <CardMedia
                            component="img"
                            height="285"
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
                    <Card sx={{ minWidth: 250 }} className='cards'>
                                <CardActionArea href='https://github.com/Suman-de-bista/react-weather-app'>
                                    <CardMedia
                                    component="img"
                                    height="285"
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
                <div className="project-card project project-calculator" data-aos="zoom-in">
                    <Card sx={{ minWidth: 250 }} className='cards'>
                                <CardActionArea href='https://github.com/Suman-de-bista/react-calculator'>
                                    <CardMedia
                                    component="img"
                                    height="285"
                                    image="images/calculator.png"
                                    alt="calculator"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        React Calculator 
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                    </Card>
                </div> 
                {/* <div className="project-card project project-login" data-aos="zoom-in">
                    <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea href='https://github.com/Suman-de-bista/react-login'>
                                <CardMedia
                                component="img"
                                height="285"
                                image="images/login.png"
                                alt="login"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    React Login App
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                    </Card>
                </div> */}
            </div>
    );
}

export default Reactproject;
