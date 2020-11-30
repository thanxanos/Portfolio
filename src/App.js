import React from 'react';
import './App.scss';
import GridController from './Controllers/GridController'
import mainimg from './logo1.jpg'


class App extends React.Component {
  render(){
    return (
      <div className="test-div">
        <nav className="navbar">
          <div className="max-width">
            <div className="logo">
              <ul className="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <section class="home" id="home">
          <div class="max-width">
            <div className="home-content">
              <div className="text-1">Hello, my name is</div>
              <div className="text-2">Zoe Xanos</div>
            </div>
          </div>
        </section>
        <h1>main body</h1>
        {/* <img src={mainimg} alt="Logo" height="50%" width="50%"/> */}
        <GridController />
      </div>
    );
  }
}

export default App;
