import React from 'react';
import '../scss/Projects.scss';
import doubleC from './../imgFolder/double_c.png';
import knightQ from './../imgFolder/knight_quest.png';
import storyline from './../imgFolder/storyline.png';
import londonUndergound from './../imgFolder/london_underground.png'
import * as AiIcons from 'react-icons/ai';
import * as DiIcons from 'react-icons/di';

class ProjectsControllerNew extends React.Component {
  
  render(){
    return(
      <div id="projects">
        <div data-aos="fade-up">
          <h1 data-aos="fade-up" delay="80" data-aos-duration="1050" className='portfoliotitle'>Portfolio</h1>
            <div data-aos="fade-up" delay="150" data-aos-duration="1200" className="projects-wrapper">
              <div className="project-card">
                <div className="text-card">
                  <h2>Storyline</h2>
                  <div className='button-div'><button className='lang-tag'>figma</button><button className='lang-tag'>react.js</button></div>
                  <p className='desc-text'>Work In Progress: Book subscription service website with Draftbit Book API. Created with a Design System approach in figma before implemented through React.JS</p>
                    <img className='desc-image' src={storyline} alt="doublC"></img>
                      <p className="overlay" >
                        <a title="video" href="https://www.figma.com/design/qO1Vt3mS2jZIXVOQXCV9nn/Portfolio?node-id=425-4&t=Vc4OPS0S8CjGUn9U-1" target="_blank" rel="noopener noreferrer">FIGMA</a>
                        <a title="git" href="https://github.com/thanxanos/storyline" target="_blank" rel="noopener noreferrer">GITHUB</a>
                        <a title="live" href="https://storyline-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
                      </p> 
                </div>
              </div>
              <div className="project-card">
                <div className="text-card">
                  <h2>London Underground</h2>
                  <div className='button-div'><button className='lang-tag'>react.js</button></div>
                  <p className='desc-text'>Work In Progress: Punk concert app example based in London using Bandsintown API. Created with the purpose of pushing design and front-end skills </p>
                    <img className='desc-image' src={londonUndergound} alt="doublC"></img>
                      <p className="overlay" >

                        <a title="git" href="https://github.com/thanxanos/londonunderground" target="_blank" rel="noopener noreferrer">GITHUB</a>
                        <a title="live" href="https://londonundergound-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">LIVE</a>
                      </p> 
                </div>
              </div>
              <div className="project-card">
                <div className="text-card">
                  <h2>Double Cryptography</h2>
                  <div className='button-div'><button className='lang-tag'>ruby on rails</button><button className='lang-tag'>react.js</button></div>
                  <p className='desc-text'>In-Browser React game. Play as a detective and solve puzzles.</p>
                    <img className='desc-image' src={doubleC} alt="doublC"></img>
                      <p className="overlay" >
                        <a title="video" href="https://youtu.be/-9TG-lpDn6c" target="_blank" rel="noopener noreferrer">VIDEO</a>
                        <a title="git" href="https://github.com/zoexanos/Decoder-Frontend" target="_blank" rel="noopener noreferrer">GITHUB</a>
                      </p> 
                </div>
              </div>
              <div className="project-card">
                <div className="text-card">
                  <h2>Knight Quest</h2>
                  <div className='button-div'><button className='lang-tag'>ruby on rails</button></div>
                  <p className='desc-text'>Terminal based RPG game. Play as a knight and forge your path.</p>
                    <img className='desc-image' src={knightQ} alt="doublC"></img>
                      <p className="overlay" >
                        <a title="git" href="https://github.com/thanxanos/Knight-Quest" target="_blank" rel="noopener noreferrer">GITHUB</a>
                      </p> 
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ProjectsControllerNew;