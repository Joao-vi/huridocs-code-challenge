import { Cells, Labyrinth } from '../models/labyrinth'
import { PathFinderService } from '../services/path-finder/path-finder-service'

export type SolveLabyrinthInput = Cells
export type SolveLabyrinthOutput = number

export class SolveLabyrinth {
  constructor(private pathFinderService: PathFinderService) {}

  execute(input: SolveLabyrinthInput): SolveLabyrinthOutput {
    const labyrinth = new Labyrinth(input)
    return this.pathFinderService.execute(labyrinth)
  }
}
