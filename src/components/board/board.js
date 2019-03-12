import React, { Component } from 'react';
import { Table } from 'reactstrap'
import './board.css'

export default class Board extends Component {
  constructor(props) {
    super(props)
    this.state = { numbers: [] }
    this.handleInputChange = this.handleInputChange.bind(this)
    
  }

  numbers = []

  componentDidMount() {
    let numbers = []
    for (let i = 0; i < 81; i++) {
      numbers = numbers.concat(0)
    }
    console.log(numbers)
    return(this.setState({ numbers }))
  }

  handleInputChange(e) {
    console.log(e.target)
    let newNumbers = this.state.numbers
    newNumbers[parseInt(e.target.name)] = parseInt(e.target.value)
    this.setState({numbers: newNumbers})
  }

  render() {
    console.log(this.state.numbers)
    return (

      <Table bordered responsive="sm" size="sm">
        <tbody>
          <tr>
            <td><input name="0" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="1" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="2" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="3" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="4" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="5" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="6" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="7" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="8" type="text" onChange={this.handleInputChange}/></td>
          </tr>
          <tr>
            <td><input name="9" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="10" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="11" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="12" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="13" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="14" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="15" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="16" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="17" type="text" onChange={this.handleInputChange}/></td>
          </tr>
          <tr>
            <td><input name="18" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="19" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="20" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="21" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="22" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="23" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="24" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="25" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="26" type="text" onChange={this.handleInputChange}/></td>
          </tr>
          <tr>
            <td><input name="27" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="28" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="28" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="29" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="30" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="31" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="32" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="34" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="35" type="text" onChange={this.handleInputChange}/></td>
          </tr>
          <tr>
            <td><input name="36" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="37" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="38" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="39" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="40" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="41" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="42" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="43" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="44" type="text" onChange={this.handleInputChange}/></td>
          </tr>
          <tr>
            <td><input name="45" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="46" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="47" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="48" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="49" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="50" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="51" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="52" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="53" type="text" onChange={this.handleInputChange}/></td>
          </tr>
          <tr>
            <td><input name="54" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="55" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="56" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="57" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="58" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="59" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="60" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="61" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="62" type="text" onChange={this.handleInputChange}/></td>
          </tr>
          <tr>
            <td><input name="63" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="64" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="65" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="66" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="67" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="68" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="69" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="70" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="71" type="text" onChange={this.handleInputChange}/></td>
          </tr>
            <tr>
            <td><input name="72" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="73" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="74" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="75" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="76" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="77" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="78" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="79" type="text" onChange={this.handleInputChange}/></td>
            <td><input name="80" type="text" onChange={this.handleInputChange}/></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}