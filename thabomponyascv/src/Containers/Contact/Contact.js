import React, { Component } from 'react';

import './Contact.css';
import call from '../../Assets/call.jpg';
import email from '../../Assets/email.jpg';
import ContactForm from './ContactForm/ContactForm';

class Contact extends Component {
  render() {
    return (
        <div className={"Contact"}>
            <h1>Contact</h1>
            <div className={"MainSection"}>
              <div className={"CallSection"}>
                <div className={"Icon"}>
                  <img src={call} alt={"call"}/>
                </div>
                  <div className={"Text"}>
                    <a>Call Me</a>
                    <p>+27 62 440 6016</p>
                  </div>
              </div>
              <div className={"EmailSection"}>
                <div className={"Icon"}>
                  <img src={email} alt={"email"}/>  
                </div>
                  <div className={"Text"}>
                    <a>Email Me</a>
                    <p>tmponya187@hotmail.com</p>
                  </div>
              </div>
            </div>
              <div>
                <ContactForm/>
              </div>
        </div>
    )
  }
}

export default Contact;;