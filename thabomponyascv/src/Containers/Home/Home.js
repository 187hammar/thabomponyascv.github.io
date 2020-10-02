import React from 'react';

import './Home.css';
import HomeBackground from './HomeBackground/HomeBackground';

const Home = () => {
    return (
        <div className="Home">
            <HomeBackground className="HomeBackground"/>
            <div className="d5">
                <h1>Hello,</h1>
                <p>I am Thabo Mponya, software developer from Potchefstroom, South Africa. 
                    I am skilled in mobile app development, software development and currently learning web development. 
                    I have a variety of programming languages and frameworks that I am skilled in.</p>
                <p className={"p2"}>From the beginning of the South African national lockdown, I earned 2 certificates (Flutter & Dart - The complete guide [2020 edition] and Ethical Hacking from Scratch),
                     and currently working on finishing the remaining 2 (React - The Complete Guide (incl Hooks, React Router, Redux) and React & Django Full Stack: web app, backend API, mobile apps). 
                    I did all this before I got called back to the university.
                    I am a very quick learner and am highly interested in all types software Development, incluiding mobile app and website development.
                </p>
            </div>
        </div>
    )
}

export default Home;