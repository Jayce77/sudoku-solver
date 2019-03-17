import React, { Component } from 'react';
import { Table, Row, Col, Button } from 'reactstrap'
import './board.css'

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = { numbers: [], isBoardSet: false, backTracks: 0 }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSetBoard = this.handleSetBoard.bind(this)
    this.handleSolveBoard = this.handleSolveBoard.bind(this)
    this.renderRows = this.renderRows.bind(this)
    this.updateNumbers =this.updateNumbers.bind(this)
    this.updateBacktracks =this.updateBacktracks.bind(this)
    
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
    this.props.gridService.solvePuzzel(this.updateNumbers, this.updateBacktracks)
  }

  updateNumbers(i, value) {
    this.setState(prevState => {
      let numbers = [...prevState.numbers ]
      numbers[i] = value
      return { numbers }
    })
  }

  updateBacktracks() {
    this.setState({
      backTracks: this.state.backTracks++
    })
  }

  handleSetBoard() {
    const numbers = [
      6,
      5,
      7,
      0,
      2,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      6,
      0,
      3,
      0,
      0,
      4,
      0,
      3,
      4,
      9,
      0,
      0,
      6,
      0,
      0,
      0,
      6,
      3,
      2,
      0,
      0,
      0,
      0,
      5,
      5,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      1,
      0,
      0,
      0,
      0,
      5,
      2,
      4,
      0,
      0,
      0,
      8,
      0,
      0,
      4,
      9,
      2,
      0,
      4,
      0,
      0,
      1,
      0,
      7,
      3,
      0,
      0,
      0,
      0,
      0,
      0,
      8,
      0,
      4,
      6,
      1
    ]
    // this.props.gridService.initiateCells(this.state.numbers)
    this.setState({ numbers, isBoardSet: true })
    this.props.gridService.initiateCells(numbers)
    this.props.gridService.setInitialValuesInLookUps()
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
    console.log(this.state.numbers)
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
                </div>
                <div className="mt-2">
                  <p>Number of Backtracks: { this.state.backTracks }</p>
                </div>
              </div>
            : <Button color="warning" onClick={this.handleSetBoard}>Set Board</Button>
          }
          </Col>
        </Row>
      </div>
    )
  }
}