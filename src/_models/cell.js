export default class Cell {
    id
    value
    column
    row
    sector
    possibleValues

    constructor(id, value) {
      this.id = id
      this.value = value ? value : 0
      this.row = Math.floor(id / 9)
      this.column = Math.floor(id % 9)
      this.sector = this.getSector(this.row, this.column)
    }

    getSector(row, column) {
      let sector

      if(row < 9 && column < 9) { sector = 8 }
      if(row < 9 && column < 6) { sector = 7 }
      if(row < 9 && column < 3) { sector = 6 }
      if(row < 6 && column < 9) { sector = 5 }
      if(row < 6 && column < 6) { sector = 4 }
      if(row < 6 && column < 3) { sector = 3 }
      if(row < 3 && column < 9) { sector = 2 }
      if(row < 3 && column < 6) { sector = 1 }
      if(row < 3 && column < 3) { sector = 0 }

      return sector
    }
}