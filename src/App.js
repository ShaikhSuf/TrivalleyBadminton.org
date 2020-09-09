import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import classes from './App.module.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Layout>
            <p>Layout for Tri-Valley Badminton.....</p>
          </Layout>
    
        </div>
      </BrowserRouter>
    );
    }
}

export default App;
