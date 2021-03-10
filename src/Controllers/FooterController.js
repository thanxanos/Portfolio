import React from 'react';
import '../scss/Footer.scss';
import twitter from './../imgFolder/twitter.png';
import github from './../imgFolder/github.png';
import linkedin from './../imgFolder/linkedin.png';
import medium from './../imgFolder/medium.png';

class FooterController extends React.Component {
  render(){
    return(
      <div className='footer'>
        <div className='footer-wrapper'>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/zoexanos"><img src={twitter} alt="twitlogo" /></a>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/zoexanos"><img src={github} alt="gitlogo" /></a>
          <a
          className="mediumlogo"
          target="_blank"
          rel="noopener noreferrer"
          href="https://zoexanos.medium.com/"><img src={medium} alt="mediumlogo" /></a>
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/zoexanos/"><img src={linkedin} alt="linkedinlogo" /></a>
        </div>
      </div>
    )
  }
}

export default FooterController;