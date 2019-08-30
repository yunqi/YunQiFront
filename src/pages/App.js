import React from 'react';
import logo from '@assets/img/logo.png';
import './App.css';
import Home from '@pages/home/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Open Source Machine Learning platform built with Go.
        </p>
        <a
          className="App-link"
          href="https://github.com/yunqi/yunqi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <a 
          href="::javascript"
          className="App-link">
          <Home></Home>
        </a>
      </header>
    </div>
  );
}

export default App;
