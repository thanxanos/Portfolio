import React from 'react';
import './App.scss';
import Navbar from './Controllers/Navbar';
import SummaryController from './Controllers/SummaryController';
import AboutController from './Controllers/AboutController';
import SkillsController from './Controllers/SkillsController';
import BlogController from './Controllers/BlogController';
import ProjectsControllerNew from './Controllers/ProjectControllerNew';
import ContactController from './Controllers/ContactController';
import FooterController from './Controllers/FooterController';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import GridController from './Controllers/GridController';
//import ProjectsController from './Controllers/ProjectsController';

AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


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
                <ProjectsControllerNew />
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
