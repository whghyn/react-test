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
        <div>第一次改动</div>
        <div>第二次改动</div>
        <div>第三次改动</div>
        <div>第四次改动</div>
        <div>代码push到了远端，并且已经合到了master主分支</div>
      </div> 
      

    );
  }
}

export default App;
