import { DIRECTIONS } from '../../../src/app/models/direction'
import { Path } from '../../../src/app/services/path-finder/path'

describe('Path class', () => {
  test('When I move DOWN, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 0, y: 0, distance: 0 })

    const newPath = path.move(DIRECTIONS.DOWN)

    expect({ x: newPath.x, y: newPath.y }).toEqual({ x: 1, y: 0 })
    expect(newPath.distance).toBe(1)
  })

  test('When I move UP, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 1, y: 0, distance: 0 })

    const newPath = path.move(DIRECTIONS.UP)

    expect({ x: newPath.x, y: newPath.y }).toEqual({ x: 0, y: 0 })
    expect(newPath.distance).toBe(1)
  })

  test('When I move RIGHT, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 0, y: 0, distance: 0 })

    const newPath = path.move(DIRECTIONS.RIGHT)

    expect({ x: newPath.x, y: newPath.y }).toEqual({ x: 0, y: 1 })
    expect(newPath.distance).toBe(1)
  })

  test('When I move LEFT, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 0, y: 1, distance: 0 })

    const newPath = path.move(DIRECTIONS.LEFT)

    expect({ x: newPath.x, y: newPath.y }).toEqual({ x: 0, y: 0 })
    expect(newPath.distance).toBe(1)
  })
})
