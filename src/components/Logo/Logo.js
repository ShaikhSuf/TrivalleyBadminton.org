import React from 'react';
import tvbLogo from '../../assets/images/Bdm.jpeg';
import classes from './Logo.module.css';


const logo = (props) => (

    <div className={classes.Logo}>
        <img src={tvbLogo} alt='Tri-Valley Badminton'/>
    </div>
);

export default logo;
