import { Coordinate } from './coordinate'

export type Direction = Coordinate

const UP: Direction = { x: -1, y: 0 }
const DOWN: Direction = { x: 1, y: 0 }
const LEFT: Direction = { x: 0, y: -1 }
const RIGHT: Direction = { x: 0, y: 1 }

export const DIRECTIONS = {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
