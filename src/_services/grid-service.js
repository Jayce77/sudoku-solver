import Cell from '../_models/cell'

export default class GridService {

  cells = []
  cellsToFill = []
  rows = []
  columns = []
  sectors = []
  
  constructor() {
    this.initiateCells = this.initiateCells.bind(this)
    this.initiateLookUpContainers()
  }

  initiateCells(arr) {
    for ( let i = 0; i < arr.length; i++) {
      let cell = new Cell(i, arr[i])
      this.cells = this.cells.concat(cell)
    }
    this.cellsToFill = this.cells.filter(cell => cell.value === 0)
    console.log(this.cellsToFill)
  }

  initiateLookUpContainers() {
    for (let i = 0; i < 9; i++) {
      this.rows = this.rows.concat([[]])
      this.columns = this.columns.concat([[]])
      this.sectors = this.sectors.concat([[]])
    }
  }

  setInitialValuesInLookUps() {
    this.cells.forEach(cell => {
      if (cell.value !== 0) {
        this.setValuesInLookUps(cell) 
      }
    })
  }

  setValuesInLookUps(cell) {
    this.rows[cell.row] = this.rows[cell.row].concat(cell.value) 
    this.columns[cell.column] = this.columns[cell.column].concat(cell.value) 
    this.sectors[cell.sector] = this.sectors[cell.sector].concat(cell.value) 
  }

  removeValueFromLookups(cell) {
    this.rows[cell.row] = this.rows[cell.row].filter(value => value !== cell.value) 
    this.columns[cell.column] = this.columns[cell.column].filter(value => value !== cell.value) 
    this.sectors[cell.sector] = this.sectors[cell.sector].filter(value => value !== cell.value)
  }

  getPossibleValues(cell) {
    cell.possibleValues = []
    let invalidValues = this.rows[cell.row].concat(this.columns[cell.column], this.sectors[cell.sector])
    for (let i = 1; i < 10; i++) {
      if (!invalidValues.includes(i))
      cell.possibleValues.push(i)
    }
  } 

  solvePuzzel(callBack, iterator) {
    iterator = iterator || 0
    let next = iterator + 1
    let valueWorks = true
    if (this.cellsToFill.length === iterator) { return true }

    this.getPossibleValues(this.cellsToFill[iterator])
    if (this.cellsToFill[iterator].possibleValues.length === 0) { return false }

    for (let i = 0; i <= this.cellsToFill[iterator].possibleValues.length; i++) {

      if ( i === this.cellsToFill[iterator].possibleValues.length) {
        valueWorks = false
        break
      }

      this.cellsToFill[iterator].value = this.cellsToFill[iterator].possibleValues[i]
      callBack(this.cellsToFill[iterator].id, this.cellsToFill[iterator].value)
      this.setValuesInLookUps(this.cellsToFill[iterator])

      console.log("cell: ", this.cellsToFill[iterator].id, "attempting value: ", this.cellsToFill[iterator].value)
      valueWorks = this.solvePuzzel(callBack, next)
      if (!valueWorks) { 
        this.removeValueFromLookups(this.cellsToFill[iterator])
        console.log(iterator, " is continuing ", this.cellsToFill[iterator].possibleValues)
        continue 
      } else {
        break
      }
    }
    console.log(this.cellsToFill)
    return valueWorks
  }
}