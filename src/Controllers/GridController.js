import React from 'react';
import '../scss/GridController.scss';

class GridController extends React.Component {
  render(){
    return(
        <div>
          <div className="pal-1"></div>
          <div className="pal-2"></div>
          <div className="pal-3"></div>
          <div className="pal-4"></div>
          <div className="pal-5"></div>
        </div>
    )
  }
}

export default GridController;