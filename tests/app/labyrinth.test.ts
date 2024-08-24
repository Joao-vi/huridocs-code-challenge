import { Cells, Labyrinth } from '../../src/app/labyrinth'

const cells: Cells = [
  ['S', '0', '1', '0', 'E'],
  ['1', '0', '1', '0', '1'],
  ['1', '0', '0', '0', '0'],
  ['0', '0', '1', '1', '1'],
  ['0', '0', '0', '0', '0'],
]

describe('Labyrinth Entity', () => {
  test('When I give wrong X or Y coordinate, it should return an empty string', () => {
    const labyrinth = new Labyrinth(cells)

    expect(labyrinth.getCell({ x: -1, y: 0 })).toBe('')
    expect(labyrinth.getCell({ x: cells.length, y: 0 })).toBe('')

    expect(labyrinth.getCell({ x: 0, y: -1 })).toBe('')
    expect(labyrinth.getCell({ x: 0, y: cells[0].length })).toBe('')
  })
})
