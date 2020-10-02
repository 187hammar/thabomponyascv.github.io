import React from 'react';

import facebook from '../../../Assets/FB.png';
import twitter from '../../../Assets/T.png';
import instagram from '../../../Assets/I.png';
import linkedIn from '../../../Assets/IN.png';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideBar.css';
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
                        <a href="https://www.facebook.com/XTeddyBear187Mp">
                            <img className={"Icon"} src={facebook} alt="facebook icon" />
                        </a>
                        <a href="https://www.instagram.com/materialteddybear/">
                            <img className={"Icon"} src={instagram} alt="instagram icon" />
                        </a>
                        <a href="https://twitter.com/ARtisTXda187">
                            <img className={"Icon"} src={twitter} alt="twitter icon" />
                        </a>
                        <a href="https://linkedin.com/in/thabo-mponya-6538a219b">
                            <img className={"Icon"} src={linkedIn} alt="linkedIn icon" />
                        </a>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default sideDrawer;