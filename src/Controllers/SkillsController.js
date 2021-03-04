import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as DiIcons from 'react-icons/di';
import '../scss/Skills.scss';

class SkillsController extends React.Component {
  render(){
    return(
      <div id="skills">
        <p><DiIcons.DiRuby className="lang-icon"/> <DiIcons.DiJavascript className="lang-icon" /> <FaIcons.FaReact className="lang-icon"/> <FaIcons.FaPython className="lang-icon"/></p>
      </div>
    )
  }
}

export default SkillsController;