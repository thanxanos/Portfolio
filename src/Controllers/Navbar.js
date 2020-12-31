import React, {useState} from 'react';
import '../scss/Navbar.scss';
import * as FaIcons from 'react-icons/fa';


function Navbar(){
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);

    return (
        <nav className="navbar">
          <div className="max-width">
            <div className="logo"><a href="#">Zoe Xanos</a></div>
            <ul className={ navbar ? 'menu active': 'menu'}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="menu-btn" onClick={showNavbar}>
             { navbar ? <FaIcons.FaTimes className='side-btn'/> : <FaIcons.FaBars className='side-btn'/>}
            </div>
          </div>
        </nav>
    );
  
}

export default Navbar;
