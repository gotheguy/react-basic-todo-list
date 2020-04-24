import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <Auxiliary>
                <Toolbar />
                <main className="Layout">
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;