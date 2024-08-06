import React from 'react';
//import '../scss/Footer.scss';
import twitter from './../imgFolder/twitter.png';
import github from './../imgFolder/github.png';
import linkedin from './../imgFolder/linkedin.png';
import medium from './../imgFolder/medium.png';



class ContactLinkController extends React.Component {
  render(){
    return(
      <div>
        <div className='link-wrapper'>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://x.com/thanxanos"><img className='fa-twitter' src={twitter} alt="twitterlogo" /></a>
          <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/thanxanos"><img src={github} alt="gitlogo" /></a>
          <a
          className="mediumlogo"
          target="_blank"
          rel="noopener noreferrer"
          href="https://thanxanos.medium.com/"><img src={medium} alt="mediumlogo" /></a>
          <a 
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/zoexanos/"><img src={linkedin} alt="linkedinlogo" /></a>
        </div>
      </div>
    )
  }
}

export default ContactLinkController;