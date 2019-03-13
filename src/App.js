import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridService from './_services/grid-service'
import Board from './components/board/board'

class App extends Component {
  gridService
  
  constructor() {
    super()
    this.gridService = new GridService()
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Board gridService={this.gridService}/>
      </div>
    );
  }
}

export default App;
