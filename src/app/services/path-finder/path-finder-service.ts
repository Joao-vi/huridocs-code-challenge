import { Labyrinth } from '../../models/labyrinth'
import { Distance } from './path'

type PathNotFound = -1
export type PathFinderOutput = Distance | PathNotFound

export interface PathFinderService {
  execute(labyrinth: Labyrinth): PathFinderOutput
}
