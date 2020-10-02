import React, { Component } from 'react';

import './Certificates.css';
import Slideshow from '../../Components/Slideshow/Slideshow';
import penTest from '../../Assets/penTest.jpg';
import flutter from '../../Assets/flutter.jpg';

class Certificates extends Component {
  render() {
    return (
        <div className={"Certificates"}>
            <h1>Certificates</h1>
            <div className={"Slideshow"}>
                <Slideshow 
                    interval={10000}
                    images={[
                        penTest,
                        flutter
                    ]}/>
            </div>
        </div>
    )
  }
}

export default Certificates;