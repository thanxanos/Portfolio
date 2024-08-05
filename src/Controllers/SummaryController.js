import React from 'react';
import largeSparkle from '../imgFolder/large_sparkle.png'
import '../scss/Summary.scss'

class SummaryController extends React.Component {

  render() {
    return(
      <div id='about'>
        <img className="summary-img" src={largeSparkle} />
        <div className='summary-text'>
          <h1>About</h1>
          <p></p>
          <p>Fullstack Engineer </p>
          </div>
        
      </div>
    )
  }

}


export default SummaryController;