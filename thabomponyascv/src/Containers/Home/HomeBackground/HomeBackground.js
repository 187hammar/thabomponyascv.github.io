import React from 'react';

import './HomeBackground.css';
import Thabo from '../../../Assets/Thabo.jpg';
import Thabo2 from '../../../Assets/Thabo2.jpg';
import ntate from '../../../Assets/Ntate_Mponya.jpeg';
import Thabo3 from '../../../Assets/Thabo3x.jpg';
import Thabo4 from '../../../Assets/Thabo4x.jpg';
import tnK from '../../../Assets/Thabo5x.jpg';

const homeBackground = () => {
    return (
        <div className="HomeBackground">
            <div className="d1">
                <img className="img1" src={ntate} alt="ntate"></img>
            </div>
            <div className="d2">
                <img className="img2" src={Thabo3} alt="Thabo3"></img>
            </div>
            <div className="d21">
                <img className="img21" src={tnK} alt="Thabo5"></img>
            </div>
            <div className="d3">
                <img src={Thabo} alt="Thabo"></img>
            </div>
            <div className="d31">
                <img src={Thabo4} className="img31" alt="Thabo4"></img>
            </div>
            <div className="d4">
                <img className="img4" src={Thabo2} alt="Thabo2"></img>
            </div>
        </div>
    )
}

export default homeBackground;