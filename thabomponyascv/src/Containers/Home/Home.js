import React from 'react';

import './Home.css';
import HomeBackground from './HomeBackground/HomeBackground';

const Home = () => {
    return (
        <div className="Home">
            <HomeBackground className="HomeBackground"/>                
            <div className="d5">
                <h1>Hello,</h1>
                <p>I am Thabo Mponya, software developer from Potchefstroom, </p>
                <p>South Africa. I am skilled in mobile app development, software </p>
                <p>development and currently learning web development. I have a variety </p>
                <p>of programming languages and frameworks that I am skilled in.</p>
            </div>
        </div>
    )
}

export default Home;