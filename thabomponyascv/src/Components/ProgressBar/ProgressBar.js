import React from 'react';

import './ProgressBar.css';
import Filler from './Filler';

const progressBar = (props) => {
    return (
        <div className={"ProgressBar"}>
            <Filler percentage={props.percentage}/>
        </div>
    )
}

export default progressBar;