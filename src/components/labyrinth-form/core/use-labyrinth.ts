import { useState } from 'react'

import { Cell, Cells } from '../../../app/models/labyrinth'
import { Coordinate } from '../../../app/models/coordinate'

const createEmptyCells = (): Cell[] => Array.from({ length: 5 }, () => '')

export const INITIAL_VALUE: Cells = [
  createEmptyCells(),
  createEmptyCells(),
  createEmptyCells(),
  createEmptyCells(),
  createEmptyCells(),
]

export const useLabyrinth = () => {
  const [selectedCell, setSelectedCell] = useState<Coordinate>({ x: 0, y: 0 })
  const [labyrinth, setLabyrinth] = useState<Cells>(INITIAL_VALUE)

  const changeCell = (value: string) => {
    setLabyrinth((state) => {
      const copy = [...state]
      copy[selectedCell.x][selectedCell.y] = value

      return copy
    })

    nextCell()
  }

  const addCells = () => setLabyrinth((state) => [...state, createEmptyCells()])

  const removeCells = (cellIndex: number) =>
    setLabyrinth((state) => state.filter((_, index) => index !== cellIndex))

  const nextCell = () =>
    setSelectedCell((state) => {
      const y = (state.y + 1) % INITIAL_VALUE[0].length
      const shouldIncrementX = state.y + 1 === INITIAL_VALUE[0].length
      const x = shouldIncrementX ? (state.x + 1) % INITIAL_VALUE.length : state.x
      return { y, x }
    })

  const selectCell = (coordinate: Coordinate) => setSelectedCell(coordinate)

  return {
    selectedCell,
    labyrinth,

    changeCell,
    addCells,
    removeCells,
    selectCell,
    nextCell,
  }
}
