import React from 'react';
import '../scss/About.scss';
import {ReactComponent as Logo} from '../docs/portfolio_pic2.svg'
import Typewriter from 'typewriter-effect';

class AboutController extends React.Component {
  render(){
    return(
      <div className="about-div" id="about">
        <div className="about-wrapper">
            <div classname="text-div">
              <Typewriter 
                classname="typewriter-div"
                options={{
                  autoStart: true,
                  loop: true
                }}
                onInit={(typewriter) => 
                typewriter
                .typeString('About')
                .pauseFor(2000)
                .deleteChars(4)
                .typeString('lbedo <span style="color: #278ea5;">brainrot</span>.')
                .pauseFor(1000)
                .deleteAll()
                .start()}
              />
            </div>
            <div className="logo-div">
              <Logo />
            </div>
        </div>
      </div>
    )
  }
}

export default AboutController;