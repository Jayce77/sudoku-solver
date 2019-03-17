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
          <h1>Sudoku Solver</h1>
        </header>
        <Board gridService={this.gridService}/>
      </div>
    );
  }
}

export default App;
