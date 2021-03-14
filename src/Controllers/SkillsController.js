import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import * as IoIcons from 'react-icons/io';
import * as SiIcons from 'react-icons/si';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import '../scss/Skills.scss';

class SkillsController extends React.Component {
  render(){
    return(
      <div id="skills">
        <div className="header-div">
            <h2>Skills</h2>
          </div>
        <div className="skills-wrapper">
          <div className="" id="skill-card">
            <DiIcons.DiRuby className="lang-icon"/> 
            <p>Ruby</p>
          </div>
          <div className="" id="skill-card">
            <SiIcons.SiJavascript className="lang-icon" /> 
            <p>Javascript</p>
          </div>
          <div className="" id="skill-card">
            <FaIcons.FaReact className="lang-icon"/> 
            <p>React</p>
          </div>
          <div className="" id="skill-card">
            <FaIcons.FaPython className="lang-icon"/>
            <p>Python</p>
          </div>
          {/* <FaIcons.FaSwift className="lang-icon"/>*/}
          <div className="" id="skill-card">
            <FaIcons.FaDatabase className="lang-icon"/>
            <p>SQL, SQlite</p>
          </div>
          <div className="" id="skill-card">
            <IoIcons.IoLogoHtml5 className="lang-icon"/> 
            <p>HTML5</p>
          </div>
          <div className="" id="skill-card">
            <IoIcons.IoLogoCss3 className="lang-icon" />
            <p>CSS3</p>
          </div>
          <div className="" id="skill-card">
            <SiIcons.SiSass className="lang-icon"/>
            <p>Sass</p>
          </div>
          <div className="" id="skill-card">
            <AiIcons.AiFillGithub className="lang-icon"/>
            <p>Git, Github</p>
          </div>
          <div className="" id="skill-card">
            <FiIcons.FiFigma className="lang-icon"/>
            <p>Figma</p>
          </div>
          <div className="" id="skill-card">
            <DiIcons.DiPhotoshop className="lang-icon"/>
            <p>Adobe Photoshop</p>
          </div>
          <div className="" id="skill-card">
            <DiIcons.DiNpm className="lang-icon"/>
            <p>npm</p>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsController;