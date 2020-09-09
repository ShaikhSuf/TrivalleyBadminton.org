import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {Route, Switch} from 'react-router-dom';
import AboutUs from '../../../containers/AboutUs/AboutUs';
import ContactUs from '../../../containers/ContactUs/ContactUs';
import Events from '../../../containers/Events/Events';
import Resources from '../../../containers/Resources/Resources';
import Account from '../../../containers/Account/Account';
import Blog from '../../../containers/Blog/Blog';
import Middle from '../../../components/Middle/Middle';

const navigationItems = (props) => (
    <div>
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Home</NavigationItem>
            <NavigationItem contentMethod='displaySignInPage' link="/account">Sign In</NavigationItem>
            <NavigationItem contentMethod='displayResources' link="/resources">Resources</NavigationItem>
            <NavigationItem contentMethod='displayEvents' link="/events">Events</NavigationItem>
            <NavigationItem contentMethod='displayBlog' link="/blog">Blog</NavigationItem>
            <NavigationItem contentMethod='displayContactUs' link="/contactus">Contact Us</NavigationItem>
            <NavigationItem contentMethod='displayAboutUs' link="/aboutus">About Us</NavigationItem>
        </ul>
        <Switch>
            <Route path="/aboutus" exact component={AboutUs} />
            {/*
            {this.state.auth? <Route path="/new-post" component={NewPost} /> : null}
            <Route render={() => <h1>Output not found</h1>} />
            */}
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/events" exact component={Events} />
            <Route path="/resources" exact component={Resources} />
            <Route path="/account" exact component={Account} />
            <Route path="/blog" exact component={Blog} />
        </Switch>
    </div>
);

export default navigationItems;