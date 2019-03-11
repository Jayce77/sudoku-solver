import Cell from '../_models/cell'

export default class GridService {

  cells = [];
  
  constructor() {
    this.initiateCells = this.initiateCells.bind(this)
  }

  initiateCells() {
    for ( let i = 0; i < 81; i++) {
      let cell = new Cell(i)
      this.cells = this.cells.concat(cell)
    }
    console.log(this.cells)
  }
}