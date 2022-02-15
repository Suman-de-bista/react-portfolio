import React,{useState} from 'react';
import {MdMenu} from 'react-icons/md'

const Navbar = (props) => {
    const [navBar, setNavBar] = useState(false);

    
    const changeNavColor = ()=>{
        if (window.scrollY >=50){
            setNavBar(true)
        }
        else{
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeNavColor);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    return (
        <div className={navBar ? 'nav-bar nav-changecolor': 'nav-bar'}>
            <div className="nav-bar-name">Suman <span>Bista</span></div>
            <div class="dropdown">
                <button class="dropbtn">
                    <MdMenu/>
                    <i class="fa fa-caret-down"></i>
                </button>
                <div className={navBar ? 'nav-bar-btn nav-changecolor dropdown-content': 'nav-bar-btn dropdown-content'}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            </div>

            <div className={navBar ? 'nav-bar-btn nav-changecolor': 'nav-bar-btn'}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
