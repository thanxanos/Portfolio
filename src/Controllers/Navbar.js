import React from 'react';
import '../scss/Navbar.scss';


class Navbar extends React.Component {
  render(){
    return (
        <nav className="navbar">
          <div className="max-width">
            <div className="logo"><a href="#">Zoe Xanos</a></div>
            <ul className="menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
    );
  }
}

export default Navbar;
