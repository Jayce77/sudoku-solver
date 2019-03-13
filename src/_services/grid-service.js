import Cell from '../_models/cell'

export default class GridService {

  cells = []
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
    console.log(this.cells)
  }

  initiateLookUpContainers() {
    for (let i = 0; i < 9; i++) {
      this.rows = this.rows.concat([[]])
      this.columns = this.columns.concat([[]])
      this.sectors = this.sectors.concat([[]])
    }
  }

  setValuesInLookUps() {
    this.cells.forEach(cell => {
      if (cell.value !== 0) {
        this.rows[cell.row] = this.rows[cell.row].concat(cell.value) 
        this.columns[cell.column] = this.columns[cell.column].concat(cell.value) 
        this.sectors[cell.sector] = this.sectors[cell.sector].concat(cell.value) 
      }
    })
    console.log(this.rows, this.columns, this.sectors)
  }
}