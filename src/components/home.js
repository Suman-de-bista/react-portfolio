import React from 'react';
import Typical from 'react-typical'
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
                    <Typical className="content home-content3"
                        loop = {Infinity}
                        steps = {[
                            'Software Developer',
                            1000,
                            'Computer Engineer',
                            1000,
                            'Front-End Developer',
                            1000
                        ]}
                    />
                    <div className="content home-content4">
                        <p align='justify'>I'm a passionate developer with expertise in front-end and back-end technologies, creating captivating small business websites and interactive web applications. Proficient in HTML, CSS, and JavaScript, I craft engaging user interfaces and implement robust server-side solutions. My Python skills expand beyond web development, offering a versatile skill set for crafting data-driven web experiences.
                        </p>
                    </div>
                    <div className="content home-content5">
                        <a href='https://www.facebook.com/suman.bista.148' target="_blank" rel="noreferrer" ><FaFacebook/></a>
                        <a href='https://www.instagram.com/suman_de_bista/' target="_blank" rel="noreferrer"><FaInstagram/></a>
                        <a href='https://twitter.com/Bista_suman39' target="_blank" rel="noreferrer"><FaTwitter/></a>
                        <a href='https://www.linkedin.com/in/suman-bista-6486aba9/ ' target="_blank" rel="noreferrer"><FaLinkedin/></a>
                        <a href='https://github.com/Suman-de-bista' target="_blank" rel="noreferrer"><FaGithub/></a>
                    </div>
                </div>
        </div>
    );
}

export default Home;
