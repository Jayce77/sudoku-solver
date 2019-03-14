import React, { Component } from 'react';
import { Table, Row, Col, Button } from 'reactstrap'
import './board.css'

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = { numbers: [] }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSetBoard = this.handleSetBoard.bind(this)
    this.renderRows = this.renderRows.bind(this)
    
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

  handleSetBoard() {
    const numbers =[
      1,
      0,
      0,
      0,
      0,
      5,
      6,
      0,
      0,
      0,
      2,
      0,
      0,
      3,
      0,
      0,
      4,
      0,
      0,
      0,
      3,
      2,
      0,
      0,
      0,
      0,
      3,
      0,
      4,
      4,
      0,
      0,
      0,
      0,
      0,
      8,
      0,
      4,
      0,
      0,
      7,
      0,
      0,
      7,
      0,
      2,
      0,
      0,
      0,
      0,
      6,
      6,
      0,
      0,
      2,
      0,
      0,
      0,
      0,
      7,
      0,
      0,
      2,
      0,
      3,
      0,
      0,
      8,
      0,
      5,
      0,
      0,
      0,
      0,
      6,
      7,
      0,
      0,
      0,
      3,
      0
    ]
    // this.props.gridService.initiateCells(this.state.numbers)
    this.props.gridService.initiateCells(numbers)
    this.props.gridService.setValuesInLookUps()
  }

  renderColumns(currentRow) {
    let columns = []
    for (let i = 0; i < 9; i++) {
      let id = i + currentRow * 9
      columns = columns.concat(
        <td key={id} className={id % 3 === 2 ? "sector-right" : null}>
          <input name={id} type="text" onChange={this.handleInputChange}/>          
        </td>
      )
    }
    return columns
  }

  renderRows() {
    let rows = [];
    for (let i = 0; i < 9; i++) {
      rows = rows.concat(
        <tr key={i} className={i % 3 === 2 ? "sector-bottom" : null}>
          { this.renderColumns(i) }          
        </tr>
      )
    }
    return rows
  }

  render() {
    console.log(this.state.numbers)
    return (

      <div>
        <Row>
          <Col xs="9">
            <Table bordered responsive="sm" size="sm">
              <tbody>
                {this.renderRows()}
              </tbody>
            </Table>
          </Col>
          <Col xs="3">
            <Button color="warning" onClick={this.handleSetBoard}>Set Board</Button>{' '}
          </Col>
        </Row>
      </div>
    )
  }
}