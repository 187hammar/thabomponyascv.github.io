import React, { Component } from 'react';

import './ProgrammingSkills.css';
import ProgressBar from '../../Components/ProgressBar/ProgressBar';

class ProgrammingSkills extends Component {
    render() {
        return (
        <div className={"ProgrammingSkills"}>
            <h1>Programming Skills</h1>
            <button onClick={this.skills}>Skills</button>
            <section className={"Skills"}>
                <div className={"Skill"}>
                    <div>
                        <a>Java</a>
                        <p>Structured Programming</p>
                        <p>Object Orient Programming</p>
                        <p>Data Structures and Algorithms</p>
                    </div>
                    <div className={"ProgressBar"}>
                        <ProgressBar percentage={80}/>
                    </div>
                </div>
                <div className={"Skill"}>
                    <div>
                        <a>Python</a>
                        <p>Structured Programming</p>
                    </div>
                    <div className={"ProgressBar"}>
                        <ProgressBar percentage={60}/>
                    </div>
                </div>
                <div className={"Skill"}>
                    <div>
                        <a>C++</a>
                        <p>Structured Programming</p>
                        <p>Data Structures and Algorithms</p>
                    </div>
                    <div className={"ProgressBar"}>
                        <ProgressBar percentage={60}/>
                    </div>
                </div>
                <div className={"Skill"}>
                    <div>
                        <a>C#</a>
                        <p>Structured Programming</p>
                        <p>Windows Forms Development</p>
                        <p>Apps and Advanced User Interface Programing</p>
                    </div>
                    <div className={"ProgressBar"}>
                        <ProgressBar percentage={80}/>
                    </div>
                </div>
                <div className={"Skill"}>
                    <div>
                        <a>Dart</a>
                        <p>Structured Programming</p>
                        <p>Mobile App Development with Flutter framework</p>
                    </div>
                    <div className={"ProgressBar"}>
                        <ProgressBar percentage={80}/>
                    </div>
                </div>
                <div className={"Skill"}>
                    <div>
                        <a>JavaScript</a>
                        <p>Structured Programming</p>
                        <p>Website Development</p>
                    </div>
                    <div className={"ProgressBar"}>
                        <ProgressBar percentage={70}/>
                    </div>
                </div>
            </section>
        </div>
    )
  }
}

export default ProgrammingSkills;