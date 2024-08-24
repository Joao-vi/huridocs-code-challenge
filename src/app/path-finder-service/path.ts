import { Coordinate } from '../coordinate'
import { Direction } from '../direction'

export type Distance = number

type PathProps = { distance: Distance } & Coordinate

export class Path {
  id: string

  constructor(private props: PathProps) {
    this.id = `${this.props.x},${this.props.y}`
  }

  get x() {
    return this.props.x
  }

  get y() {
    return this.props.y
  }

  get distance() {
    return this.props.distance
  }

  move(direction: Direction) {
    return new Path({
      x: this.x + direction.x,
      y: this.y + direction.y,
      distance: this.distance + 1,
    })
  }
}
