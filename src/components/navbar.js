import React,{useState} from 'react';
import {Tabs,Tab,Box} from '@mui/material'

const Navbar = (props) => {
    const [value, setValue] = useState('one');
    const [navBar, setNavBar] = useState(false);

    const changeNavColor = ()=>{
        if (window.scrollY >=80){
            setNavBar(true)
        }
        else{
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeNavColor);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    };

    return (
        <div className={navBar ? 'nav-bar nav-changecolor': 'nav-bar'}>
            <div className="nav-bar-name">Suman <span>Bista</span></div>
            <div className="nav-bar-btn">
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="Primary"
                        aria-label="secondary tabs example"
                        className='nav-bar-tabs'
                    >
                        <Tab value="one" label="Home" className='nav-bar-tab'/>
                        <Tab value="two" label="About" className='nav-bar-tab'/>
                        <Tab value="three" label="Skills" className='nav-bar-tab'/>
                        <Tab value="four" label="Portfolio" className='nav-bar-tab'/>
                        <Tab value="five" label="Contacts" className='nav-bar-tab'/>
                    </Tabs>
                </Box>
            </div>
        </div>
    )
}

export default Navbar;
