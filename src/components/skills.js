import React from 'react';
import {FaHtml5,FaCss3Alt,FaReact,FaPython,FaGitAlt,FaJs} from 'react-icons/fa'


const Skills = () => {
    return (
        <div className='skills' id='nav-to-skills'> 
            <div className="skill-heading">Skills</div>
            <div className="skill-list">
                    <div className='skill-set'><FaHtml5/> <span>HTML5</span></div>
                    <div className='skill-set'><FaCss3Alt/> <span>CSS3</span></div>
                    <div className='skill-set'><FaJs/><span>JavaScript</span></div>
                    <div className='skill-set'><FaReact/><span>React.Js</span></div>
                    <div className='skill-set'><FaPython/><span>Python</span></div>
                    <div className='skill-set'><FaGitAlt/><span>Git</span></div>
            </div>
        </div>
    );
}

export default Skills;
