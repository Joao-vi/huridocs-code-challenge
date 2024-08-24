import { Cells, Labyrinth } from '../../../src/app/models/labyrinth'
import { PathFinderService } from '../../../src/app/services/path-finder/path-finder-service'
import { SolveLabyrinth } from '../../../src/app/use-case/solve-labyrinth'

const input: Cells = [
  ['S', '0', '1', '0', 'E'],
  ['1', '0', '1', '0', '1'],
  ['1', '0', '0', '0', '0'],
  ['0', '0', '1', '1', '1'],
  ['0', '0', '0', '0', '0'],
]

describe('SolveLabyrinth', () => {
  test('When I execute, it should call PathFinderService with correct params', () => {
    const pathFinderServiceSpy: PathFinderService = {
      execute: jest.fn(),
    }

    const solveLabyrinth = new SolveLabyrinth(pathFinderServiceSpy)

    solveLabyrinth.execute(input)

    expect(pathFinderServiceSpy.execute).toHaveBeenCalled()
    expect(pathFinderServiceSpy.execute).toHaveBeenCalledWith(new Labyrinth(input))
  })
})
