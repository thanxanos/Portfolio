import React from 'react';
import '../scss/Projects.scss';
import doubleC from './../imgFolder/double_c.png';
import knightQ from './../imgFolder/knight_quest.png';
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
                  <h2>Double Cryptography</h2>
                  <div className='button-div'><button className='lang-tag'>ruby on rails</button><button className='lang-tag'>react.js</button></div>
                  <p className='desc-text'>In-Browser React game. Play as a detective and solve puzzles.</p>
                    <img className='desc-image' src={doubleC} alt="doublC"></img>
                      <p className="overlay" >
                        <a title="video" href="https://youtu.be/-9TG-lpDn6c">VIDEO</a>
                        <a title="git" href="https://github.com/thanxanos/Decoder-Frontend">GITHUB</a>
                        <a title="live" href="https://double-cryptography.herokuapp.com/">LIVE</a>
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
                        <a title="video" href="https://youtu.be/fnro7p4HKyM">VIDEO</a>
                        <a title="git" href="https://github.com/thanxanos/Knight-Quest">GITHUB</a>
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
                        <a title="video" href="https://youtu.be/-9TG-lpDn6c">VIDEO</a>
                        <a title="git" href="https://github.com/zoexanos/Decoder-Frontend">GITHUB</a>
                        <a title="live" href="https://double-cryptography.herokuapp.com/">LIVE</a>
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
                        <a title="video" href="https://youtu.be/-9TG-lpDn6c">VIDEO</a>
                        <a title="git" href="https://github.com/zoexanos/Decoder-Frontend">GITHUB</a>
                        <a title="live" href="https://double-cryptography.herokuapp.com/">LIVE</a>
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