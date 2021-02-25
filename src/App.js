import React from 'react';
import './App.scss';
import Navbar from './Controllers/Navbar';
import GridController from './Controllers/GridController';
import AboutController from './Controllers/AboutController';
import SkillsController from './Controllers/SkillsController';
import BlogController from './Controllers/BlogController';
import ProjectsController from './Controllers/ProjectsController';
import ContactController from './Controllers/ContactController';
import FooterController from './Controllers/FooterController';

// import mainimg from './logo1.jpg'


class App extends React.Component {
  render(){
    return (
        <div className="full-div">
          <Navbar />
          <section id="home">
            <div className="wrapper">
              <div className="home-content">
                <AboutController />
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
