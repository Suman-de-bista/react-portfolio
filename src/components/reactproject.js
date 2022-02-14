import React from 'react';
import {Card,CardContent,CardMedia,Typography, CardActionArea } from '@mui/material';


const Reactproject = () => {
    return (
        <div className='project-main'>
             <div className="project-card project">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="220"
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
                <div className="project-card project">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="220"
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
                <div className="project-card project">
                    <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="220"
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
                </div>
                <div className="project-card project">
                    <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="220"
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
                {/* <div className="project-card project">
                    <Card sx={{ maxWidth: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    height="220"
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
                </div>  */}
        </div>
    );
}

export default Reactproject;
