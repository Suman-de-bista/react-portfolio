import React from 'react';

const About = () => {
    return (
        <div className='about' id='nav-to-about'>
            <div className="about-me">
                <div className="me about-me-heading">About Me!</div>
                <div className="me about-me-contents" align='justify'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nulla accusamus corporis, cumque quod porro minima deserunt recusandae id sint non deleniti nam nisi necessitatibus praesentium cupiditate, qui illo omnis. Culpa quae facere tempore saepe nobis. Illo, sit alias. Autem enim sed repellat voluptas maiores repellendus, deserunt suscipit eos voluptatum.
                </div>
                <div className="me about-me-details">
                    <ul>
                        <li>Name         : Suman Bista</li>
                        <li>Age          : 22</li>
                        <li>Address      : Bharatpur-12, Chitwan, Nepal</li>
                        <li>Phone Number : +977-9865005596</li>
                        <li>Email        : sumanbista2012@gmail.com </li>
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
