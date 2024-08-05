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

                  <img className='desc-image' src={doubleC} alt="doublC"></img>
                  <div className="overlay">
                  <h1>Browser Game</h1>
                  <p>I created a browser-based game using Ruby on Rails for the back end and React for the front end. Users can log in to solve interactive puzzles with the help of a detective.</p>
                  {/* <p>For this project, I designed and wrote front end using React and React-konva. I implemented RESTful API to manage game state and persist game data. I also created all game graphics through Figma and used GSAP to manage animations
                  </p> */}
                  {/* <p className="mobile-text" >
                    <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="mobile-link" /></a>
                    <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="mobile-link" /></a>
                    <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="mobile-link" /></a>
                  </p> */}
                  <ul>
                    <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="link-class" /></a>
                    <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="link-class" /></a>
                    <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="link-class" /></a>
                    </ul>
                </div>
                </div>
              </div>
              <div className="project-card">
                <div className="text-card">
                  <h2>Knight Quest</h2>
                  <div className='button-div'><button className='lang-tag'>ruby on rails</button></div>
                  <p><img className='desc-image' src={knightQ} alt="knightQ"></img></p>
                </div>
                <div className="text-hover">
                  <p className="p-text-hover">
                  {/*<p>I created a browser-based game using Ruby on Rails for the back end and React for the front end. Users can log in to solve interactive puzzles with the help of a detective.</p>
                  <p>For this project, I designed and wrote front end using React and React-konva. I implemented RESTful API to manage game state and persist game data. I also created all game graphics through Figma and used GSAP to manage animations
                  </p>
                  <div className="mobile-text" >
                    <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="mobile-link" /></a>
                    <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="mobile-link" /></a>
                    <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="mobile-link" /></a>
                  </div> */}
                  <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="link-class" /></a>
                  <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="link-class" /></a>
                  <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="link-class" /></a></p>
                </div>
              </div>
              <div className="project-card">
                <div className="text-card">
                  <h2>Double Cryptography</h2>
                  <div className='button-div'><button className='lang-tag'>ruby on rails</button><button className='lang-tag'>react.js</button></div>
                  <p><img className='desc-image' src={doubleC} alt="doublC"></img></p>
                </div>
                <div className="text-hover">
                  <p className="p-text-hover">
                  {/*<p>I created a browser-based game using Ruby on Rails for the back end and React for the front end. Users can log in to solve interactive puzzles with the help of a detective.</p>
                  <p>For this project, I designed and wrote front end using React and React-konva. I implemented RESTful API to manage game state and persist game data. I also created all game graphics through Figma and used GSAP to manage animations
                  </p>
                  <div className="mobile-text" >
                    <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="mobile-link" /></a>
                    <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="mobile-link" /></a>
                    <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="mobile-link" /></a>
                  </div> */}
                  <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="link-class" /></a>
                  <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="link-class" /></a>
                  <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="link-class" /></a></p>
                </div>
              </div>
              <div className="project-card">
                <div className="text-card">
                  <h2>Double Cryptography</h2>
                  <div className='button-div'><button className='lang-tag'>ruby on rails</button><button className='lang-tag'>react.js</button></div>
                  <p><img className='desc-image' src={doubleC} alt="doublC"></img></p>
                </div>
                <div className="text-hover">
                  <p className="p-text-hover">
                  {/*<p>I created a browser-based game using Ruby on Rails for the back end and React for the front end. Users can log in to solve interactive puzzles with the help of a detective.</p>
                  <p>For this project, I designed and wrote front end using React and React-konva. I implemented RESTful API to manage game state and persist game data. I also created all game graphics through Figma and used GSAP to manage animations
                  </p>
                  <div className="mobile-text" >
                    <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="mobile-link" /></a>
                    <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="mobile-link" /></a>
                    <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="mobile-link" /></a>
                  </div> */}
                  <a title="video" href="https://youtu.be/-9TG-lpDn6c"><AiIcons.AiOutlinePlayCircle className="link-class" /></a>
                  <a title="git" href="https://github.com/zoexanos/Decoder-Frontend"> <AiIcons.AiFillGithub className="link-class" /></a>
                  <a title="live" href="https://double-cryptography.herokuapp.com/"> <DiIcons.DiHeroku className="link-class" /></a></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default ProjectsControllerNew;