import React from 'react';
import HomeImage from '../images/landscape.jpeg';

class Home extends React.Component{
  render(){
    return(
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="home-background d-flex flex-direction-column">
              <img src={HomeImage} alt="landscape"/>
            </div>
          </div>
        </div>

      </section>
    )
  }
}

export default Home;
