import React from 'react';
import './App.scss';
import Navbar from './Controllers/Navbar';
// import GridController from './Controllers/GridController';
import AboutController from './Controllers/AboutController';
import SkillsController from './Controllers/SkillsController';
import BlogController from './Controllers/BlogController';
import ProjectsController from './Controllers/ProjectsController';
import ContactController from './Controllers/ContactController';
import FooterController from './Controllers/FooterController';
import SummaryController from './Controllers/SummaryController';


class App extends React.Component {
  render(){
    return (
        <div className="full-div">
          <Navbar />
          <AboutController />
          <section id="home">
          
            <div className="wrapper">
              <div className="home-content">
                <SummaryController />
                <SkillsController />
                <ProjectsController />
                <BlogController />
                <ContactController />
              </div>
            </div>
          </section>
          <FooterController />
        </div>
    );
  }
}

export default App;
