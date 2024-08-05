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
          <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus neque platea orci non curae sem vitae. Feugiat donec dictum cras blandit orci rhoncus consectetur? Volutpat id nullam facilisis, odio suspendisse ante. Sodales sem sollicitudin pulvinar suscipit in suscipit. Consequat tempor nisl vulputate nunc; maximus curae ridiculus. Libero himenaeos neque; conubia per praesent in tellus mattis. Cursus auctor gravida nulla ultrices potenti ultrices placerat dictumst. </p>
          </div>
        
      </div>
    )
  }

}


export default SummaryController;