import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Home</NavigationItem>
        <NavigationItem contentMethod='displaySignInPage' link="/">Sign In</NavigationItem>
        <NavigationItem contentMethod='displayResources' link="/">Resources</NavigationItem>
        <NavigationItem contentMethod='displayEvents' link="/">Events</NavigationItem>
        <NavigationItem contentMethod='displayBlog' link="/">Blog</NavigationItem>
        <NavigationItem contentMethod='displayContactUs' link="/">Contact Us</NavigationItem>
        <NavigationItem contentMethod='displayAboutUs' link="/">About Us</NavigationItem>
    </ul>
);

export default navigationItems;