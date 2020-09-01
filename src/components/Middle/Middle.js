import React from 'react';
import classes from './Middle.module.css';
import Aux from '../../hoc/Aux';
import Footer from '../Footer/Footer';

const middle = (props) => (

    <Aux>
        <main className={classes.Middle}>
            <div className={classes.main}>
                <div>
                    Main window
                </div>
                <Footer />
            </div>
            <div className = {classes.ads}>
            Ads
        </div>
        </main>
    </Aux>
);

export default middle;