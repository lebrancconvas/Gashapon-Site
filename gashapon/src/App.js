import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/header.js'
import Gasha from './Components/gasha.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Gasha />
      </div>
    );
  }
}

export default App;
