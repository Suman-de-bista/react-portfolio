import React from 'react';
import {Card,CardContent,CardMedia,Typography, CardActionArea } from '@mui/material';


const Machinelearning = () => {
    return (
            <div className='project-main'>
                <div className="project-card project-1 pml" data-aos="zoom-in">
                    <Card sx={{ maxWidth: 345 }} className='cards'>
                        <CardActionArea href='https://github.com/Suman-de-bista/Stock-market_Prediction-Using-Neural_Network' target="_blank" rel="noreferrer">
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
                <div className="project-card project-2 pml" data-aos="zoom-in">
                    <Card sx={{ maxWidth: 345 }} className='cards'>
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
