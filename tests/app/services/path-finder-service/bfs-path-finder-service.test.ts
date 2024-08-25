import { CellNotFoundError, Cells, Labyrinth } from '../../../src/app/models/labyrinth'
import { BFSPathFinderService } from '../../../src/app/services/path-finder/bfs-path-finder-service'

const THEE_STEPS_LABYRINTH: Cells = [
  ['1', 'S', '0', '0', 'E'],
  ['1', '0', '1', '0', '1'],
  ['1', '0', '0', '0', '0'],
  ['0', '0', '1', '1', '1'],
  ['0', '0', '0', '0', '0'],
]

const EIGHT_STEPS_LABYRINTH: Cells = [
  ['S', '0', '1', '0', 'E'],
  ['1', '0', '1', '0', '1'],
  ['1', '0', '0', '0', '0'],
  ['0', '0', '1', '1', '1'],
  ['0', '0', '0', '0', '0'],
]

const UNSOLVABLE_LABYRINTH: Cells = [
  ['S', '0', '1', '0', '0'],
  ['1', '0', '1', '0', '1'],
  ['1', '0', '0', '0', '0'],
  ['0', '0', '1', '1', '1'],
  ['0', '0', '0', '0', '0'],
]

const INVALID_LABYRINTH: Cells = [
  ['0', '0', '1', '0', '0'],
  ['1', '0', '1', '0', '1'],
  ['1', '0', '0', '0', '0'],
  ['0', '0', '1', '1', '1'],
  ['0', '0', '0', '0', '0'],
]

describe('BFSPathFinderService', () => {
  test('When given a valid Labyrinth, it should return the correct steps to solve it', () => {
    const labyrinth = new Labyrinth(THEE_STEPS_LABYRINTH)

    const bfsPathFinderService = new BFSPathFinderService()

    const result = bfsPathFinderService.execute(labyrinth)

    expect(result).toBe(3)
  })

  test('When given a valid eight steps Labyrinth, it should return the correct steps to solve it', () => {
    const labyrinth = new Labyrinth(EIGHT_STEPS_LABYRINTH)

    const bfsPathFinderService = new BFSPathFinderService()

    const result = bfsPathFinderService.execute(labyrinth)

    expect(result).toBe(8)
  })

  test('When given a unsolvable Labyrinth, it should return -1', () => {
    const labyrinth = new Labyrinth(UNSOLVABLE_LABYRINTH)

    const bfsPathFinderService = new BFSPathFinderService()

    const result = bfsPathFinderService.execute(labyrinth)

    expect(result).toBe(-1)
  })

  test('When given a invalid Labyrinth, it should throw an Error', () => {
    const labyrinth = new Labyrinth(INVALID_LABYRINTH)

    const bfsPathFinderService = new BFSPathFinderService()

    const result = () => bfsPathFinderService.execute(labyrinth)

    expect(result).toThrow(new CellNotFoundError('S'))
  })
})
