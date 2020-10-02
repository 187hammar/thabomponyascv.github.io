import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Home from './Containers/Home/Home'
import ProgrammingSkills from './Containers/ProgrammingSkills/ProgrammingSkills';
import Certificates from './Containers/Certificates/Certificates';
import Services from './Containers/Services/Services';
import Contact from './Containers/Contact/Contact';
import cv from './Containers/CV/cv';

class App extends Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={Home}/>
        <Route path="/services" exact component={Services}/>
        <Route path="/programmingSkills" exact component={ProgrammingSkills}/>
        <Route path="/certificates" exact component={Certificates}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/cv" exact component={cv}/>
      </Layout>
    );
  }
}

export default App;
