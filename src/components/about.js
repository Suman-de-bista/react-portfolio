import React from 'react';
import {FaUserCircle,FaMobile,FaGraduationCap} from 'react-icons/fa' 
import {MdLocationPin,MdEmail,MdOutlineKeyboardArrowRight} from 'react-icons/md' 
    
const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-me">
                <div className="me about-me-heading">About Me!</div>
                <div className="me about-me-contents" align='justify'>
                Hey, It's me Suman Bista, final year Computer Engineering student currently studying in Kantipur Engineering College Dhapakhel, Lalitpur. I'm an Enthusiastic Web developer who enjoys building a small business sites to rich interactive web apps. Besides, I've knowledge of Python and has worked on machine learning and deep learning for my projects. 
                </div>
                <div className="me about-me-details">
                    <ul>
                        <li>
                            <div className="about-me-logo"><FaUserCircle/></div>
                            <div className="about-me-list">: Suman Bista</div>
                        </li>
                        <li>
                            <div className="about-me-logo"><MdOutlineKeyboardArrowRight/></div>
                            <div className="about-me-list">: 22 Years Old</div>
                        </li>
                        <li>
                            <div className="about-me-logo"><FaGraduationCap/></div>
                            <div className="about-me-list">:Bachelors in Computer Engineering</div>
                        </li>
                        <li>
                            <div className="about-me-logo"><MdLocationPin/></div>
                            <div className="about-me-list">: Bharatpur-12,Chitwan,Nepal </div>
                        </li>
                        <li>
                            <div className="about-me-logo"><FaMobile/></div>
                            <div className="about-me-list">: +977-9865005596</div>
                        </li>
                        <li>
                            <div className="about-me-logo"><MdEmail/></div>
                            <div className="about-me-list">: Sumanbista2012@gmail.com</div>
                        </li>
                    </ul>
                </div>
                <div className="me download-cv-btn">
                    
                    <a href={'files/Suman-Resume.pdf'} download> <button>Download CV</button></a>
                </div>
                
            </div>
            <div className="about-me-pic">
                <img src="images\cover12.png" alt="Cover" />
            </div>
        </div>
    );
}

export default About;
