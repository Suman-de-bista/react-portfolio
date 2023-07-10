import React from "react";
import { FaUserCircle, FaMobile, FaGraduationCap } from "react-icons/fa";
import {
  MdLocationPin,
  MdEmail,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-me">
        <div className="me about-me-heading">About Me!</div>
        <div className="me about-me-contents" align="justify">
        I am Suman Raj Bista, a Computer Engineer specializing in web development. I am passionate about creating diverse digital experiences and constantly expanding my knowledge. Collaboration with creative minds is crucial to me as it allows us to tackle coding challenges and deliver innovative solutions. My goal is to foster growth and innovation while delivering exceptional web experiences.
        </div>
        <div className="me about-me-details">
          <ul>
            <li>
              <div className="about-me-logo">
                <FaUserCircle />
              </div>
              <div className="about-me-list">: Suman Raj Bista</div>
            </li>
            <li>
              <div className="about-me-logo">
                <FaGraduationCap />
              </div>
              <div className="about-me-list">
                :Bachelors in Computer Engineering (2017 - 2022)
              </div>
            </li>
            <li>
              <div className="about-me-logo">
                <MdLocationPin />
              </div>
              <div className="about-me-list">: Bharatpur-12,Chitwan,Nepal </div>
            </li>
            <li>
              <div className="about-me-logo">
                <MdEmail />
              </div>
              <div className="about-me-list">: Sumanbista2012@gmail.com</div>
            </li>
          </ul>
        </div>
        <div className="me download-cv-btn">
          <a href={"files/Resume.pdf"} download>
            {" "}
            <button>Download CV</button>
          </a>
        </div>
      </div>
      <div className="about-me-pic">
        <img src="images\cover12.png" alt="Cover" />
      </div>
    </div>
  );
};

export default About;
