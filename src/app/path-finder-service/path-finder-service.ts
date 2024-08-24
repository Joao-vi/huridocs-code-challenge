import { Labyrinth } from '../labyrinth'

type PathNotFound = -1
type Distance = number

type PathFinderOutput = Distance | PathNotFound

export interface PathFinderService {
  execute(labyrinth: Labyrinth): PathFinderOutput
}
