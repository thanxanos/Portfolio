import React from 'react';
import '../scss/Projects.scss';
import doubleC from './../imgFolder/double_c.png';
import knightQ from './../imgFolder/knight_quest.png';

class ProjectsController extends React.Component {
  render(){
    return(
      <div id="projects">
        <div className="projects-wrapper">
          <div className="project-card">
            <div className="img-card" id="card-1">
              <p><img src={doubleC} alt="doublC"></img></p>
              <h1 className="text-hover">Ruby on Rails / ReactJS</h1>
            </div>
          </div>
          <div className="project-card" id="card-2">
            <div className="text-card">
              <h2>Double Cryptography</h2>
              <p>Ruby back end, React hooks front end, SVG Files, grep??, MVC, API</p>
              <p><a className="link-class" href="https://youtu.be/-9TG-lpDn6c">video demo</a> <a className="link-class" href="https://github.com/zoexanos/Decoder-Frontend">github</a> <a className="link-class" href="https://double-cryptography.herokuapp.com/">live site</a></p>
            </div>
          </div>
          <div className="project-card" id="card-3">
            <div className="text-card">
              <h2>Knight Quest</h2>
              <h3>Ruby on Rails</h3>
              <p>MVC, CRUD</p>
              <p><a className="link-class" href="https://youtu.be/fnro7p4HKyM">video demo</a> <a className="link-class" href="https://github.com/zoexanos/Knight-Quest">github</a></p>
            </div>
          </div>
          <div className="project-card"id="card-4">
            <div className="img-card">
            <p><img src={knightQ} alt="knightQ"></img></p>
            <h1 className="text-hover">Ruby on Rails</h1>
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