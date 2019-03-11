import Cell from '../_models/cell'

export default class GridService {

  cells = []
  rows = []
  columns = []
  grid = []
  
  constructor() {
    this.initiateCells = this.initiateCells.bind(this)
    this.initiateLookUpContainers()
  }

  initiateCells() {
    for ( let i = 0; i < 81; i++) {
      let cell = new Cell(i)
      this.cells = this.cells.concat(cell)
    }
    console.log(this.cells)
  }

  initiateLookUpContainers() {
    for (let i = 0; i < 9; i++) {
      this.rows = this.rows.concat([[]])
      this.columns = this.columns.concat([[]])
      this.grid = this.grid.concat([[]])
    }
  }
}