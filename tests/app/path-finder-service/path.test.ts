import { DIRECTIONS } from '../../../src/app/direction'
import { Path } from '../../../src/app/path-finder-service/path'

describe('Path class', () => {
  test('When I move DOWN, it should update the Coordinate and Distance', () => {
    const path = new Path({ x: 0, y: 0, distance: 0 })

    path.move(DIRECTIONS.DOWN)

    expect({ x: path.x, y: path.y }).toEqual({ x: 1, y: 0 })
    expect(path.distance).toBe(1)
  })
})
