import React from 'react';
import '../scss/Projects.scss';

class ProjectsController extends React.Component {
  render(){
    return(
      <div id="projects">
        <div className="projects-wrapper">
          <div className="project-card">
            <div className="img-card" id="card-1">
              <p>first img here</p>
            </div>
          </div>
          <div className="project-card" id="card-2">
            <div className="text-card">
              <p>first text here</p>
            </div>
          </div>
          <div className="project-card" id="card-3">
            <div className="text-card">
              <p>second text here</p>
            </div>
          </div>
          <div className="project-card"id="card-4">
            <div className="img-card">
              <p>second image here</p>
            </div>
          </div>
        </div>
        <p>hewwo</p>
        <p>youtube links, alternating between first row: info, img - next row: img, info</p>
        <p>Double cryptography https://youtu.be/-9TG-lpDn6c</p>
        <p>Knight Quest https://youtu.be/fnro7p4HKyM</p>
      </div>
    )
  }
}

export default ProjectsController;