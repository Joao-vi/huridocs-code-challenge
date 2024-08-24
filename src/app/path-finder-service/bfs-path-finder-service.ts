import { DIRECTIONS, DirectionTypes } from '../direction'
import { Labyrinth } from '../labyrinth'
import { Path } from './path'
import { PathFinderOutput, PathFinderService } from './path-finder-service'

export class BFSPathFinderService implements PathFinderService {
  private possiblePaths: Path[] = []
  private checkedPaths = new Set<string>()

  execute(labyrinth: Labyrinth): PathFinderOutput {
    const startCoordinate = labyrinth.findCell('S')
    const startPath = new Path({ x: startCoordinate.x, y: startCoordinate.y, distance: 0 })

    this.addPossiblePath(startPath)

    while (this.possiblePaths.length > 0) {
      const path = this.possiblePaths.shift()!

      const isExit = labyrinth.getCell({ x: path.x, y: path.y }) === 'E'
      if (isExit) return path.distance

      for (let key in DIRECTIONS) {
        const direction = DIRECTIONS[key as DirectionTypes]
        const newPath = path.move(direction)

        const isCoordinateValid = labyrinth.isCoordinateValid({ x: newPath.x, y: newPath.y })
        const isPathChecked = this.checkedPaths.has(newPath.id)
        const isOpenPath = labyrinth.getCell({ x: newPath.x, y: newPath.y }) === '0'
        const isExit = labyrinth.getCell({ x: newPath.x, y: newPath.y }) === 'E'

        const shouldAddPossiblePath = isCoordinateValid && !isPathChecked && (isOpenPath || isExit)

        if (shouldAddPossiblePath) this.addPossiblePath(newPath)
      }
    }

    return -1
  }

  private addPossiblePath(path: Path) {
    this.possiblePaths.push(path)
    this.checkedPaths.add(path.id)
  }
}
