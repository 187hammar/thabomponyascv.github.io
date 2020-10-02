import React from 'react';

import './SideDrawer.css';
import Backdrop from '../../../BackDrop/Backdrop';
import Aux from '../../../../hoc/Auxiliary';
import SideBar from '../../SideBar/SideBar';

const sideDrawer = ( props ) => {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <SideBar />
            </div>
        </Aux>
    );
};

export default sideDrawer;