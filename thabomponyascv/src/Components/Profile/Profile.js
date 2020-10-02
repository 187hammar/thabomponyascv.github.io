import React from 'react';

import profilePic  from '../../Assets/Ntate_Mponya.jpeg';
import './Profile.css';

const profile = (props) => (
    <div className={"Profile"} style={{height: props.height}}>
        <img src={profilePic} alt="MyPicture" />
        <h1>Thabo Mponya</h1>
    </div>
);

export default profile;