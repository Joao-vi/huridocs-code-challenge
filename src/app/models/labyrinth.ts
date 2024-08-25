import { Coordinate } from './coordinate'

export type Cell = string

export type Cells = Cell[][]

export class CellNotFoundError extends Error {
  constructor(cell: Cell) {
    super(`The ${cell} has not been found`)
    this.name = 'CellNotFoundError'
  }
}

export class Labyrinth {
  constructor(private readonly cells: Cells) {}

  getCell(coordinate: Coordinate): Cell {
    if (!this.isCoordinateValid(coordinate)) return ''

    return this.cells[coordinate.x][coordinate.y]
  }

  findCell(cell: Cell): Coordinate {
    for (let x = 0; x < this.cells.length; x++) {
      for (let y = 0; y < this.cells[0].length; y++) {
        if (this.cells[x][y] === cell) return { x, y }
      }
    }

    throw new CellNotFoundError(cell)
  }

  isCoordinateValid(coordinate: Coordinate): boolean {
    const isXValid = coordinate.x >= 0 && coordinate.x < this.cells.length
    const isYValid = coordinate.y >= 0 && coordinate.y < this.cells[0].length // Each row in this Labyrinth have the same amount of Columns (Y)

    return isXValid && isYValid
  }
}
