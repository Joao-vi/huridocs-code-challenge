import { DIRECTIONS } from '../../../src/app/direction'
import { Path } from '../../../src/app/path-finder-service/path'

describe('Path class', () => {
  test('When I move DOWN, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 0, y: 0, distance: 0 })

    path.move(DIRECTIONS.DOWN)

    expect({ x: path.x, y: path.y }).toEqual({ x: 1, y: 0 })
    expect(path.distance).toBe(1)
  })

  test('When I move UP, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 1, y: 0, distance: 0 })

    path.move(DIRECTIONS.UP)

    expect({ x: path.x, y: path.y }).toEqual({ x: 0, y: 0 })
    expect(path.distance).toBe(1)
  })

  test('When I move RIGHT, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 0, y: 0, distance: 0 })

    path.move(DIRECTIONS.RIGHT)

    expect({ x: path.x, y: path.y }).toEqual({ x: 0, y: 1 })
    expect(path.distance).toBe(1)
  })

  test('When I move LEFT, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 0, y: 1, distance: 0 })

    path.move(DIRECTIONS.LEFT)

    expect({ x: path.x, y: path.y }).toEqual({ x: 0, y: 0 })
    expect(path.distance).toBe(1)
  })
})
