import { describe, expect, test } from 'vitest'
import { renderHook, act } from '@testing-library/react-hooks'
import { useLabyrinth } from '../../../../src/components/labyrinth-form/core/use-labyrinth'

describe('useLabyrinth', () => {
  test('It should start with correct selected Cell', () => {
    const { result } = renderHook(() => useLabyrinth())

    expect(result.current.selectedCell).toEqual({ x: 0, y: 0 })
  })

  test('It should add new Row of Cells', () => {
    const { result } = renderHook(() => useLabyrinth())

    const prevLength = result.current.labyrinth.length

    act(() => result.current.addCells())

    expect(result.current.labyrinth.length).toBe(prevLength + 1)
  })

  test('isSelected should return true the given coordinate is selected', () => {
    const { result } = renderHook(() => useLabyrinth())
    expect(result.current.selectedCell).toEqual({ x: 0, y: 0 })
    expect(result.current.isSelected({ x: 0, y: 0 })).toBeTruthy()
  })

  test('It should correctly remove a Row of Cells', () => {
    const { result } = renderHook(() => useLabyrinth())

    act(() => result.current.selectCell({ x: 1, y: 0 }))

    act(() => result.current.changeCell('any'))

    expect(result.current.labyrinth[1][0]).toBe('any')

    act(() => result.current.removeCells(1))

    expect(result.current.labyrinth[1][0]).toBe('')
  })

  test("It should change the Cell's value correctly", () => {
    const { result } = renderHook(() => useLabyrinth())

    act(() => {
      result.current.selectCell({ x: 0, y: 1 })
    })

    act(() => {
      result.current.changeCell('S')
    })

    expect(result.current.labyrinth[0][1]).toBe('S')
  })

  test("When I change a Cell's value, it should go to the next Cell automatically", () => {
    const { result } = renderHook(() => useLabyrinth())

    expect(result.current.selectedCell).toEqual({ x: 0, y: 0 })

    act(() => {
      result.current.changeCell('S')
    })

    expect(result.current.selectedCell).toEqual({ x: 0, y: 1 })
  })

  test('When the Y is the last entry of a Row, it should go to zero, and increment the X value', () => {
    const { result } = renderHook(() => useLabyrinth())

    expect(result.current.selectedCell).toEqual({ x: 0, y: 0 })

    act(() => {
      result.current.selectCell({ x: 0, y: result.current.labyrinth[0].length - 1 })
    })

    act(() => {
      result.current.nextCell()
    })

    expect(result.current.selectedCell).toEqual({ x: 1, y: 0 })
  })

  test('When both X and Y are the last entry of a Row and Column, it should both go to zero', () => {
    const { result } = renderHook(() => useLabyrinth())

    expect(result.current.selectedCell).toEqual({ x: 0, y: 0 })

    act(() => {
      result.current.selectCell({
        x: result.current.labyrinth.length - 1,
        y: result.current.labyrinth[0].length - 1,
      })
    })

    act(() => {
      result.current.nextCell()
    })

    expect(result.current.selectedCell).toEqual({ x: 0, y: 0 })
  })
})
