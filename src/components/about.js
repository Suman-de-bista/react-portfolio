import React from 'react';
import {FaUserCircle,FaMobile,FaGraduationCap} from 'react-icons/fa' 
import {MdLocationPin,MdEmail,MdOutlineKeyboardArrowRight} from 'react-icons/md' 

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-me">
                <div className="me about-me-heading">About Me!</div>
                <div className="me about-me-contents" align='justify'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nulla accusamus corporis, cumque quod porro minima deserunt recusandae id sint non deleniti nam nisi necessitatibus praesentium cupiditate, qui illo omnis. Culpa quae facere tempore saepe nobis. Illo, sit alias. Autem enim sed repellat voluptas maiores repellendus, deserunt suscipit eos voluptatum.
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
                            <div className="about-me-list">: Bachelors in Computer Engineering</div>
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
                    <button>Download Cv</button>
                </div>
                
            </div>
            <div className="about-me-pic">
                <img src="images/cover12.png" alt="Cover" />
            </div>
        </div>
    );
}

export default About;
