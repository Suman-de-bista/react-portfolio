import React from 'react';
import {Card,CardContent,CardMedia,Typography, CardActionArea } from '@mui/material';


const Machinelearning = () => {
    return (
            <div className='project-main'>
                <div className="project-card project-1 pml">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="220"
                            image="images/stockmarket.png"
                            alt="Stock Market"
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Stock Market Analysis & Prediction Using Neural Network
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div className="project-card project-2 pml">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="220"
                            image="images/diabetes.jpeg"
                            alt="Diabetes "
                            />
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Diabetes Prediction System Using Classification Algorithms
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                
            </div>
    );
}

export default Machinelearning;
