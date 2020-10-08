import React, { Component } from 'react';

import './Services.css';
import app from '../../Assets/app.jpg';
import web from '../../Assets/web.jpg';
import soft from '../../Assets/soft.jpg';
import os from '../../Assets/OS.jpg';
import penTesting from '../../Assets/penetrationTesting.jpg' 

class Services extends Component {
  render() {
    return (
        <section className={"Services"}>
            <h1>Services</h1>
            <section className={"Component"}>
                <div>
                    <div className={"Service"}>
                        <img src={app} alt="app Dev"/>
                        <div>
                            <a>Full-stack Mobile App Development</a>
                            <p>Flutter cross platform development</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"Service"}>
                        <img src={web} alt="web"/>
                        <div>
                            <a>Full-stack website Development</a>
                            <p>React.js, HTML and CSS development</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"Service"}>
                        <img src={soft} alt="soft"/>
                        <div>
                            <a>Full-stack Software Development</a>
                            <p>C# .NET Windows Forms</p>
                            <p>Java Object orient programming</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"Service"}>
                        <img src={os} alt="os"/>
                        <div>
                            <a>Operating Software Support</a>
                            <p>Windows and Linux installation and upgrading</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"Service"}>
                        <img src={penTesting} alt="penTesting"/>
                        <div>
                            <a>Kali Linux Ethical Hacking</a>
                            <p>Penetration Testing</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
  }
}

export default Services;