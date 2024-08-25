import { CellNotFoundError, Cells, Labyrinth } from '../../src/app/models/labyrinth'

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

  test("When I search for 'S', it should return X = 0 and Y = 0", () => {
    const labyrinth = new Labyrinth(cells)

    expect(labyrinth.findCell('S')).toEqual({ x: 0, y: 0 })
  })

  test('When a Cell is not found, it should throw an Error', () => {
    const labyrinth = new Labyrinth(cells)

    const findCell = () => labyrinth.findCell('')

    expect(findCell).toThrow(new CellNotFoundError(''))
  })
})
