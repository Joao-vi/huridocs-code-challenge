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
    this.props.y += direction.y
    this.props.x += direction.x

    this.props.distance += 1
  }
}
