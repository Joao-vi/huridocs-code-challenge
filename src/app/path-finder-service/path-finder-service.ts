import { Labyrinth } from '../labyrinth'
import { Distance } from './path'

type PathNotFound = -1
type PathFinderOutput = Distance | PathNotFound

export interface PathFinderService {
  execute(labyrinth: Labyrinth): PathFinderOutput
}
