import React from 'react'
import '../scss/Seal.scss'

const Seal = () => {
  return (
    <div id='surprise' className='seal-wrapper'>

      <h4 className='oop'>
        <p className='spinny'>🎷</p>
        <span style={{"--c":1}}>O</span>
        <span style={{"--c":2}}>H</span> 
        &nbsp;
        <span style={{"--c":3}}>N</span> 
        <span style={{"--c":4}}>O</span> 
        <span style={{"--c":5}}>!</span>
      </h4>
      <p>Oh geez, this is the fun page. You weren't supposed to see this.
      </p>
      <div>
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/qMQ-y9dHE2k?si=Mn-Y0jYYByAO8dN8&controls=0&autoplay=1&loop=1&playlist=qMQ-y9dHE2k" 
        title="YouTube video player" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe>       
      </div>
      <a href="/"><button className="seal-btn">TURN BACK</button></a>
      
    </div>
  )
}

export default Seal