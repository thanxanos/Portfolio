import React, {useState, useEffect} from 'react';
import '../scss/Navbar.scss';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-scroll';
import Resume from './ResumeController';
// import { useToast } from 'react-toastify';


function Navbar(){
  const [visible, setVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);
  useEffect(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5){
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])


    return (
        <nav className={ visible ? "navbar" : "navbar--hidden"}>
          <div className="max-width">
            <div className="logo"><li><Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Zoe Xanos</Link></li></div>
            <ul className={ navbar ? 'menu active': 'menu'}>
            {/* <li><Link
              activeClass="inactive"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavbar(false)}
              >Home</Link></li> */}
            {/* <li><Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavbar(false)}
            >About</Link></li> */}
            <li><Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavbar(false)}
            >Skills</Link></li>
            <li><Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavbar(false)}
            >Projects</Link></li>
            <li><Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavbar(false)}
            >Blog</Link></li>
            <li><Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setNavbar(false)}
            >Contact</Link></li>
            <li><Resume /></li>
            </ul>
            <div className={visible ? "menu-btn" : "menu-btn--hidden"} onClick={showNavbar}>
             { navbar ? <FaIcons.FaTimes className='side-btn'/> : <FaIcons.FaBars className='side-btn'/>}
            </div>
          </div>

        </nav>
    );
  
}

export default Navbar;
