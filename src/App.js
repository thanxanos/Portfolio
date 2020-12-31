import React from 'react';
import './App.scss';
import Navbar from './Controllers/Navbar';
import GridController from './Controllers/GridController';
import mainimg from './logo1.jpg'


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
            </div>
          </div>
        </section>
        <div className="lorem-ipsum">
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
            
        </div>
      </div>
    );
  }
}

export default App;
