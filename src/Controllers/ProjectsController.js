import React from 'react';
import '../scss/Projects.scss';
import doubleC from './../imgFolder/double_c.png';

class ProjectsController extends React.Component {
  render(){
    return(
      <div id="projects">
        <div className="projects-wrapper">
          <div className="project-card">
            <div className="img-card" id="card-1">
              <p><img src={doubleC} alt="doublC"></img></p>
            </div>
          </div>
          <div className="project-card" id="card-2">
            <div className="text-card">
              <h2>Double Cryptography</h2>
              <p>Double cryptography https://youtu.be/-9TG-lpDn6c</p>
            </div>
          </div>
          <div className="project-card" id="card-3">
            <div className="text-card">
              <h2>Knight Quest</h2>
              <p>Knight Quest https://youtu.be/fnro7p4HKyM</p>
            </div>
          </div>
          <div className="project-card"id="card-4">
            <div className="img-card">
              <p>second image here</p>
            </div>
          </div>
          {/* This is input for the next project */}
          {/* <div className="project-card"id="card-6">
            <div className="img-card">
              <p> image here</p>
            </div>
          </div>
          <div className="project-card" id="card-5">
            <div className="text-card">
              <h2>3</h2>
              <p>card 3</p>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

export default ProjectsController;