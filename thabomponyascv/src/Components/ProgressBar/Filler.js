import React from 'react';

import './Filler.css';

const filler = (props) => {
    return (
        <div className={"Filler"} style={{width: `${props.percentage}%`}}/>
    );
};

export default filler;