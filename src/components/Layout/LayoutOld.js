import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Middle from '../Middle/Middle';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = ( props ) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <Middle />
        {/*
        <Footer />
        */}
    </Aux>
);

export default layout;