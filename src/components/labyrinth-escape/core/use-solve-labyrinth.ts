import { useState } from 'react'

import { BFSPathFinderService } from '../../../app/services/path-finder/bfs-path-finder-service'
import { SolveLabyrinth } from '../../../app/use-case/solve-labyrinth'
import { Cells } from '../../../app/models/labyrinth'

const solveLabyrinth = new SolveLabyrinth(new BFSPathFinderService())

export const useSolveLabyrinth = () => {
  const [steps, setSteps] = useState<number | undefined>()
  const [error, setError] = useState<string | undefined>()

  const reset = () => {
    setSteps(undefined)
    setError(undefined)
  }

  const execute = (cells: Cells) => {
    try {
      reset()
      setSteps(solveLabyrinth.execute(cells))
    } catch (e: any) {
      setError(e?.message || 'An unexpected error has occurred')
    }
  }

  return {
    steps,
    error,
    execute,
  }
}
