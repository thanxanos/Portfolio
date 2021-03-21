import React from 'react';
import '../scss/Projects.scss';
import doubleC from './../imgFolder/double_c.png';
import knightQ from './../imgFolder/knight_quest.png';
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';

class ProjectsController extends React.Component {
  render(){
    return(
      <div id="projects">
        <div className="projects-wrapper">
          <div className="project-card">
            <div className="img-card" id="card-1">
              <p><img src={doubleC} alt="doublC"></img></p>
              <div className="text-hover">
                <p className="p-text-hover">
                  <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="link-class" /></a>
                  <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="link-class" /></a>
                  <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="link-class" /></a></p>
                </div>
            </div>
          </div>
          <div className="project-card" id="card-2">
            <div className="text-card">
              <h2>Double Cryptography</h2>
              <h3>Ruby on Rails / ReactJS</h3>
              <div className="mobile-text" >
                <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="mobile-link" /></a>
                <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="mobile-link" /></a>
                <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="mobile-link" /></a>
              </div>
            </div>
          </div>
          <div className="project-card" id="card-3">
            <div className="text-card">
              <h2>Knight Quest</h2>
              <h3>Ruby on Rails</h3>
              <p>MVC, CRUD</p>
              <p className="mobile-text">
                <a href="https://youtu.be/fnro7p4HKyM"><AiIcons.AiOutlinePlayCircle className="mobile-link" /></a> <a href="https://github.com/zoexanos/Knight-Quest"> <AiIcons.AiFillGithub className="mobile-link" /></a>
                </p>
            </div>
          </div>
          <div className="project-card"id="card-4">
            <div className="img-card">
            <p><img src={knightQ} alt="knightQ"></img></p>
              <div className="text-hover">
                <p className="p-text-hover">
                <a href="https://youtu.be/fnro7p4HKyM"><AiIcons.AiOutlinePlayCircle className="link-class" /></a> <a href="https://github.com/zoexanos/Knight-Quest"> <AiIcons.AiFillGithub className="link-class" /></a>
                </p>
              </div>
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