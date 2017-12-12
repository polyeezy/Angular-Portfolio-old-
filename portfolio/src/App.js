import React, { Component } from 'react';
import './App.css';
import Router from './Router'
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Router />
      </div>
    );
  }
}

export default App;
