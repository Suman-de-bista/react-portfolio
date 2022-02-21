import React from 'react';
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin,FaGithub} from 'react-icons/fa'

const Home = () => {
    
    return (
        <div className='home' id='home'>
                <div className="home-cover">
                    <img src='images\cover.png' alt='cover'/>
                </div>
                <div className="home-content">
                    <div className="content home-content1">Hello There!</div>
                    <div className="content home-content2">I'M SUMAN BISTA</div>
                    <div className="content home-content3">
                    Web Developer
                    </div>
                    <div className="content home-content4">
                        <p align='justify'>I'm an Enthusiastic Web developer who enjoy building a small business sites to rich interactive web apps. Besides, I've knowledge of Python and has worked on machine learning and deep learning for my projects.
                        </p>
                    </div>
                    <div className="content home-content5">
                        <a href='https://www.facebook.com/suman.bista.148'><FaFacebook/></a>
                        <a href='https://www.instagram.com/suman_de_bista/'><FaInstagram/></a>
                        <a href='https://twitter.com/Bista_suman39'><FaTwitter/></a>
                        <a href='https://www.linkedin.com/in/suman-bista-6486aba9/'><FaLinkedin/></a>
                        <a href='https://github.com/Suman-de-bista'><FaGithub/></a>
                    </div>
                </div>
        </div>
    );
}

export default Home;
