import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Calculator from './Calculator/Calculator';

class App extends Component {
  render() {
    return (

      // 第2次修改

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>主分支的改动一</div>
        <div>主分支的改动二</div>
      </div> 
      

    );
  }
}

export default App;
