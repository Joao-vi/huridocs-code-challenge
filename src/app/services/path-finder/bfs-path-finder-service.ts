import { DIRECTIONS, DirectionTypes } from '../../models/direction'
import { Labyrinth } from '../../models/labyrinth'
import { Path } from './path'
import { PathFinderOutput, PathFinderService } from './path-finder-service'

export class BFSPathFinderService implements PathFinderService {
  execute(labyrinth: Labyrinth): PathFinderOutput {
    const possiblePaths: Path[] = []
    const checkedPaths = new Set<string>()
    const addPossiblePath = (path: Path) => {
      possiblePaths.push(path)
      checkedPaths.add(path.id)
    }

    const startCoordinate = labyrinth.findCell('S')
    const startPath = new Path({ x: startCoordinate.x, y: startCoordinate.y, distance: 0 })

    addPossiblePath(startPath)

    while (possiblePaths.length > 0) {
      const path = possiblePaths.shift()!

      const isExit = labyrinth.getCell({ x: path.x, y: path.y }) === 'E'
      if (isExit) return path.distance

      for (let key in DIRECTIONS) {
        const direction = DIRECTIONS[key as DirectionTypes]
        const newPath = path.move(direction)

        const isCoordinateValid = labyrinth.isCoordinateValid({ x: newPath.x, y: newPath.y })
        const isPathChecked = checkedPaths.has(newPath.id)
        const isOpenPath = labyrinth.getCell({ x: newPath.x, y: newPath.y }) === '0'
        const isExit = labyrinth.getCell({ x: newPath.x, y: newPath.y }) === 'E'

        const shouldAddPossiblePath = isCoordinateValid && !isPathChecked && (isOpenPath || isExit)

        if (shouldAddPossiblePath) addPossiblePath(newPath)
      }
    }

    return -1
  }
}
