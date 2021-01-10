import React from 'react';
import './App.scss';
import Navbar from './Controllers/Navbar';
import GridController from './Controllers/GridController';
import HomeController from './Controllers/HomeController';
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
          <section className="home" id="home">
            <div className="max-width">
              <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Zoe Xanos</div>
                <GridController />
                <HomeController />
                <AboutController />
                <SkillsController />
                <ProjectsController />
                <BlogController />
                <ContactController />
                <FooterController />
              </div>
            </div>
          </section>
        </div>
    );
  }
}

export default App;
