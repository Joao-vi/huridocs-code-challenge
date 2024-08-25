import { FormEvent } from 'react'
import { useLabyrinthContext } from '../core/context'
import { useSolveLabyrinth } from '../core/use-solve-labyrinth'

export const useForm = () => {
  const { labyrinth } = useLabyrinthContext()
  const solveLabyrinth = useSolveLabyrinth()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    solveLabyrinth.execute(labyrinth)
  }

  return {
    steps: solveLabyrinth.steps,
    error: solveLabyrinth.error,
    handleSubmit,
  }
}
