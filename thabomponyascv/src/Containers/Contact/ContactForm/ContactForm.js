import React from "react";
import emailjs from 'emailjs-com';

import apiKeys from './apiKeys';
import './ContactForm.css';

const ContactForm = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('bahalecode', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
            .then( result => {
                alert('Message sent, I will respond shortly. Thank you.', result.text);
            },
            error => {
                alert('An error occured, Please try again', error.text)
            }
        )
    }

    return (
        <div className={"ContactForm"}>
            <form onSubmit={onSubmit}>
                <div className={"MessageSec"}>
                    <div className={"InfoSec"}>
                        <input name='name' placeholder="Name" type="text"/>
                        <input name='email' placeholder="E-Mail" type="email"/>
                        <input name='subject' placeholder="Subject" type="text"/>
                    </div>
                    <div className={"Message"}>
                        <textarea name='message' placeholder="Message" type="text" rows="9" />
                    </div>
                    <button >Send Message</button>
                </div>
            </form>
        </div>
      );
    };

    export default ContactForm;