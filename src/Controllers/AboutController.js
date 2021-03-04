import React from 'react';
import '../scss/About.scss';
import {ReactComponent as Logo} from '../docs/portfolio_pic3.svg'
import Typewriter from 'typewriter-effect';

class AboutController extends React.Component {
  render(){
    return(
      <div className="about-div" id="about">
        <div className="about-wrapper">
            <div className="text-div">
              <p><span className="small-t">my name is </span>Zoe Xanos</p>
              <Typewriter 
                className="typewriter-div"
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 60
                }}
                onInit={(typewriter) => 
                typewriter
                .typeString('I am ')
                .typeString(' a<span style="color: #278ea5;"> Fullstack Engineer</span>.')
                .pauseFor(900)
                .deleteChars(21)
                .typeString(' a<span style="color: #CD966B;"> Designer</span>.')
                .pauseFor(900)
                .deleteChars(13)
                .typeString(' <span style="color: #2ad4b5;">Passionate</span>.')
                .pauseFor(2000)
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