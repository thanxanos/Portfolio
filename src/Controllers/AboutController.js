import React from 'react';
import '../scss/About.scss';
import groupShape from './../imgFolder/group_shapes.png'
import { ReactComponent as Logo } from '../docs/portfolio_pic3.svg'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { FaArrowCircleDown } from "react-icons/fa";



class AboutController extends React.Component {
  render(){
    return(
      <div width="100vw" height="100vh" position="absolute" background="#F8F8F9">
        <div data-aos-duration="1500" delay='0' data-aos="fade-in" className="about-div" id="landing">
          <img className="aboutimg" src={groupShape} />
          <div className="about-wrapper">
              <div className="text-div">
                <p><span className="small-t">my name is </span>Than Xanos</p>
                <Typewriter 
                  className="typewriter-div"
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 70
                  }}
                  onInit={(typewriter) => 
                  typewriter
                  .typeString('I am a ')
                  .typeString('<span style="color: #2ad4b5;"> Software Engineer</span>')
                  .pauseFor(900)
                  .deleteChars(18)
                  .typeString('<span style="color: #CD966B;"> UX Designer</span>')
                  .pauseFor(900)
                  // .deleteChars(15)
                  // .typeString(' <span style="color: #2ad4b5;">Passionate</span>.')
                  // .pauseFor(2000)
                  .deleteAll()
                  .start()}
                />
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
              ><FaArrowCircleDown className='arrowcircledown' /></Link>
              </div>
              <div className="logo-div">
                <Logo />
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutController;