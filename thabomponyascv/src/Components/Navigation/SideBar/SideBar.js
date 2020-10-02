import React from 'react';

import facebook from '../../../Assets/FB.png';
import twitter from '../../../Assets/T.png';
import instagram from '../../../Assets/I.png';
import linkedIn from '../../../Assets/IN.png';
import NavigationItem from '../NavigationItem';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideBar.css';
import Profile from '../../Profile/Profile';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../../BackDrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = ["SideBar", "Close"];
    if (props.open) {
        attachedClasses = ["SideBar", "Open"];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={"SideBar"}>
                    <div className={"Profile"}>
                        <Profile/>
                    </div>
                        <div className={"NavSection"}>
                            <NavigationItems/>
                        </div>
                    <div className={"socialMediaIcons"}>
                        <a href="">
                            <img className={"Icon"} src={facebook} alt="facebook icon" />
                        </a>
                        <a href="">
                            <img className={"Icon"} src={instagram} alt="instagram icon" />
                        </a>
                        <a href="">
                            <img className={"Icon"} src={twitter} alt="twitter icon" />
                        </a>
                        <a href="">
                            <img className={"Icon"} src={linkedIn} alt="twitter icon" />
                        </a>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default sideDrawer;