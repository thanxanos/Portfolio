import React from 'react';
import Pdf from '../docs/ZoeXanos_resume.pdf'

class Resume extends React.Component{
  onResumeClick() {
    window.open(Pdf);
  }

  render() {
    return (
      <a onClick={this.onResumeClick}>RESUME</a>
    )
  }
}

export default Resume;