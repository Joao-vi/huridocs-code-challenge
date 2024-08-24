import { Coordinate } from './coordinate'

type Cell = string

export type Cells = Cell[][]

export class Labyrinth {
  constructor(private readonly cells: Cells) {}

  getCell(coordinate: Coordinate): Cell {
    const isXValid = coordinate.x >= 0 && coordinate.x < this.cells.length
    const isYValid = coordinate.y >= 0 && coordinate.y < this.cells[0].length // Each row in this Labyrinth have the same amount of Columns (Y)

    if (!isXValid || !isYValid) return ''

    return this.cells[coordinate.x][coordinate.y]
  }
}
