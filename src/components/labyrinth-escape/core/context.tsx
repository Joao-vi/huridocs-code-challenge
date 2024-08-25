import { createContext, ReactNode, useContext } from 'react'
import { useLabyrinth } from './use-labyrinth'

type LabyrinthContext = ReturnType<typeof useLabyrinth>

const Context = createContext<LabyrinthContext | undefined>(undefined)

export const LabyrinthProvider = (props: { children: ReactNode }) => {
  const labyrinth = useLabyrinth()

  return <Context.Provider value={labyrinth}>{props.children}</Context.Provider>
}

export const useLabyrinthContext = () => {
  const ctx = useContext(Context)
  if (!ctx) throw new Error('The LabyrinthProvider was not found.')

  return ctx
}
