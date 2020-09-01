import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Middle from '../Middle/Middle';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer />
                <Middle>
                    {this.props.children}
                </Middle>
            </Aux>
    
        )
    }
} 

export default Layout;