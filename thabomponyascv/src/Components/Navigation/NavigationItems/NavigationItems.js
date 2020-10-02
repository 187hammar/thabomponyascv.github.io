import React from 'react';

import './NavigationItems.css';
import NavigationItem from '../NavigationItem';
const navigationItems = () => {
    return (
        <ul className={"NavigationItems"}>
            <NavigationItem link="/" exact>Home</NavigationItem>
            <NavigationItem link="/services">Services</NavigationItem>
            <NavigationItem link="/programmingSkills">Programming Skills</NavigationItem>
            <NavigationItem link="/certificates">Certificates</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
            <NavigationItem link="/cv">View CV</NavigationItem>
        </ul>
    )
};

export default navigationItems;;