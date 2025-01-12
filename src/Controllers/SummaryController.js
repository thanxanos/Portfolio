import React from 'react';
import largeSparkle from '../imgFolder/large_sparkle.png'
import '../scss/Summary.scss'

class SummaryController extends React.Component {

  render() {
    return(
      <div id='about'>
        <img data-aos="fade-right" className="summary-img" src={largeSparkle} />
        <div data-aos="fade-left" className='summary-text'>
          <h1>About</h1>
          <p>My name is Than Xanos, I'm a front-end developer and UX designer based in Seattle, Washington. With a love for science and art, I look for innovative ways to combine them in my work. </p>
          <p>I approach technology and design with the same thought process: This is a blank canvas, what do I want to say?</p>
          <p>   </p>
          <p>P.S. I'm also a bit of a minor Chicago historian. If you toss an email my way, I'll send back an odd fact as my way of saying "Hello"!</p>
          </div>
        
      </div>
    )
  }

}


export default SummaryController;