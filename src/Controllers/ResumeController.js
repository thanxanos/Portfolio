import React from 'react';
import Pdf from '../docs/Resume.pdf'

class Resume extends React.Component{
  onResumeClick() {
    window.open(Pdf);
  }

  render() {
    return (
      <a onClick={this.onResumeClick}>Resume</a>
    )
  }
}

export default Resume;