import React, { Component } from 'react';
import { Table, Row, Col, Button, Input, FormGroup, Label } from 'reactstrap'
import './board.css'

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [],
      startingNumbers: [],
      isBoardSet: false,
      backTracks: 0,
      selectedPuzzel: null,
      easyBoard: [6, 5, 7, 0, 2, 0, 0, 0, 0, 0, 0, 1, 6, 0, 3, 0, 0, 4, 0, 3, 4, 9, 0, 0, 6, 0, 0, 0, 6, 3, 2, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 0, 5, 2, 4, 0, 0, 0, 8, 0, 0, 4, 9, 2, 0, 4, 0, 0, 1, 0, 7, 3, 0, 0, 0, 0, 0, 0, 8, 0, 4, 6, 1],
      easyBoard2: [5, 1, 7, 6, 0, 0, 0, 3, 4, 2, 8, 9, 0, 0, 4, 0, 0, 0, 3, 4, 6, 2, 0, 5, 0, 9, 0, 6, 0, 2, 0, 0, 0, 0, 1, 0, 0, 3, 8, 0, 0, 6, 0, 4, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 7, 8, 7, 0, 3, 4, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      easyBoard3: [5, 1, 7, 6, 0, 0, 0, 3, 4, 0, 8, 9, 0, 0, 4, 0, 0, 0, 3, 0, 6, 2, 0, 5, 0, 9, 0, 6, 0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 6, 0, 4, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 0, 7, 8, 7, 0, 3, 4, 0, 0, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSetBoard = this.handleSetBoard.bind(this)
    this.handleResetBoard = this.handleResetBoard.bind(this)
    this.handleSelectPuzzel = this.handleSelectPuzzel.bind(this)
    this.handleSolveBoard = this.handleSolveBoard.bind(this)
    this.renderRows = this.renderRows.bind(this)
    this.updateNumbers =this.updateNumbers.bind(this)
    this.updateBacktracks =this.updateBacktracks.bind(this)
    this.replayHistory = this.replayHistory.bind(this)
  }

  numbers = []

  componentDidMount() {
    let numbers = []
    for (let i = 0; i < 81; i++) {
      numbers = numbers.concat(0)
    }
    return(this.setState({ numbers }))
  }

  handleInputChange(e) {
    let newNumbers = this.state.numbers
    newNumbers[parseInt(e.target.name)] = parseInt(e.target.value)
    this.setState({numbers: newNumbers})
  }

  handleSolveBoard() {
    console.log(this.state)
    this.props.gridService.solvePuzzel(this.updateNumbers, this.updateBacktracks)
  }

  replayHistory() {
    this.setState({numbers: this.state.startingNumbers})
    let history = this.props.gridService.attemptHistory
    history.forEach(event => {
      setTimeout(() => {
        this.setState(prevState => {
          let newNumbers = prevState.numbers
          newNumbers[event.cell] = event.value
          return {numbers: newNumbers}
        })
      }, 50)
    })
  }

  updateNumbers(i, value) {
    setTimeout(() => {
      this.setState(prevState => {
        let numbers = [...prevState.numbers ]
        numbers[i] = value
        return { numbers }
      })
    }, 10)
  }

  updateBacktracks() {
    setTimeout(() => {
      this.setState(prevState => {
        let backTracks = prevState.backTracks
        return { backTracks: backTracks + 1 }
      })
    }, 10)
  }

  handleSetBoard() {
    this.setState({ isBoardSet: true, startingNumbers: this.state.numbers })
    this.props.gridService.initiateCells(this.state.numbers)
    this.props.gridService.setInitialValuesInLookUps()
  }

  handleResetBoard() {
    this.setState({
      numbers: [],
      isBoardSet: false,
      backTracks: 0,
      selectedPuzzel: null,
      startingNumbers: [] 
    })
  }

  handleSelectPuzzel(e) {
    let selection = e.target.value
    let selectedPuzzel
    
    switch(selection) {
      case "0":
      selectedPuzzel = this.state.easyBoard
      break
      case "1":
      selectedPuzzel = this.state.easyBoard2
      break
      case "2":
      selectedPuzzel = this.state.easyBoard3
      break
      default:
      selectedPuzzel = this.state.easyBoard
    }
    console.log(selectedPuzzel)
    
    this.setState({ numbers: selectedPuzzel,  isBoardSet: true, startingNumbers: selectedPuzzel })
    let then = () => {
      console.log(this.state)
      this.props.gridService.initiateCells(selectedPuzzel)
      this.props.gridService.setInitialValuesInLookUps()
    }
    then()
    console.log(this.state)
  }

  renderInputColumns(currentRow) {
    let columns = []
    for (let i = 0; i < 9; i++) {
      let id = i + currentRow * 9
      columns = columns.concat(
        <td key={id} className={id % 3 === 2 ? "sector-right" : null}>
          <span><input name={id} type="text" onChange={this.handleInputChange}/></span>          
        </td>
      )
    }
    return columns
  }

  renderDataColumns(currentRow) {
    let columns = []
    for (let i = 0; i < 9; i++) {
      let id = i + currentRow * 9
      columns = columns.concat(
        <td key={id} className={id % 3 === 2 ? "sector-right" : null}>
          { this.state.numbers[id]}          
        </td>
      )
    }
    return columns
  }

  renderRows(colType) {
    let rows = [];
    for (let i = 0; i < 9; i++) {
      rows = rows.concat(
        <tr key={i} className={i % 3 === 2 ? "sector-bottom" : null}>
          { colType === 'input' && this.renderInputColumns(i) }
          { colType === 'card' && this.renderDataColumns(i) }          
        </tr>
      )
    }
    return rows
  }

  render() {
    return (

      <div className="mt-2">
        <Row>
          <Col xs="9">
            { !this.state.isBoardSet &&
              <Table bordered responsive="sm" size="sm">
                <tbody>
                  {this.renderRows("input")}
                </tbody>
              </Table> }
            { this.state.isBoardSet &&
              <Table bordered responsive="sm" size="sm">
                <tbody>
                  {this.renderRows("card")}
                </tbody>
              </Table> }
          </Col>
          <Col xs="3">
          { this.state.isBoardSet 
            ?
              <div>
                <div className="mt-2">
                  <Button color="warning" onClick={this.handleSolveBoard}>Solve Puzzel</Button>
                  <Button color="warning" onClick={this.replayHistory}>Watch Replay</Button>
                  <Button color="warning" onClick={this.handleResetBoard}>Reset Board</Button>
                </div>
                <div className="mt-2">
                  <p>Number of Backtracks: { this.state.backTracks }</p>
                </div>
              </div>
            : <div>
                <Row>
                  <Col xs="12">
                  <Button color="warning" onClick={this.handleSetBoard}>Set Your Own Board</Button>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="exampleSelect">Select Puzzel</Label>
                  <Input type="select" name="select" onChange={this.handleSelectPuzzel}>
                    <option value="">Select</option>
                    <option value="0">Easy 1</option>
                    <option value="1">Easy 2</option>
                    <option value="2">Medium</option>
                  </Input>
                </FormGroup>
              </div>
          }
          </Col>
        </Row>
      </div>
    )
  }
}