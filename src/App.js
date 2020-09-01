import React from 'react';
import Layout from './components/Layout/Layout';
import classes from './App.module.css';


function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <p>Layout for Tri-Valley Badminton.....</p>
      </Layout>

    </div>
  );
}

export default App;
