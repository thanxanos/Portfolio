import React from 'react';
import '../scss/About.scss';
import {ReactComponent as Logo} from '../docs/portfolio_pic.svg'

class AboutController extends React.Component {
  render(){
    return(
      <div className="about-div" id="about">
        <div className="wrapper">
          
            <div className="logo-div">
            About
              <Logo />
            </div>
        </div>
      </div>
    )
  }
}

export default AboutController;