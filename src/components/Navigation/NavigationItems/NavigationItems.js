import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem link="/">Sign In</NavigationItem>
        <NavigationItem link="/">Resources</NavigationItem>
        <NavigationItem link="/">Events</NavigationItem>
        <NavigationItem link="/">Blog</NavigationItem>
        <NavigationItem link="/">Contact Us</NavigationItem>
        <NavigationItem link="/">About Us</NavigationItem>
    </ul>
);

export default navigationItems;