import React from 'react';
import {FaReact,FaPython,FaGitAlt,FaJs} from 'react-icons/fa'
import {SiDotnet,SiCsharp} from 'react-icons/si'


const Skills = () => {
    return (
        <div className='skills' id='skills'> 
            <div className="skill-heading">Skills</div>
            <div className="skill-list" >
                    <div className='skill-set' data-aos="zoom-in"><FaJs/><span>JavaScript</span></div>
                    <div className='skill-set' data-aos="zoom-in"><FaReact/><span>React.Js</span></div>
                    <div className='skill-set' data-aos="zoom-in"><SiDotnet/> <span>.NET</span></div>
                    <div className='skill-set' data-aos="zoom-in"><SiCsharp/> <span>C#</span></div>
                    <div className='skill-set' data-aos="zoom-in"><FaPython/><span>Python</span></div>
                    <div className='skill-set' data-aos="zoom-in"><FaGitAlt/><span>Git</span></div>
            </div>
        </div>
    );
}

export default Skills;
