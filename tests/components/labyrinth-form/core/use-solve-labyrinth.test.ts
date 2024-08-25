import { act, renderHook } from '@testing-library/react-hooks'
import { describe, expect, test } from 'vitest'
import { useSolveLabyrinth } from '../../../../src/components/labyrinth-form/core/use-solve-labyrinth'
import {
  INVALID_LABYRINTH,
  THREE_STEPS_LABYRINTH,
  UNSOLVABLE_LABYRINTH,
} from '../../../app/services/path-finder-service/bfs-path-finder-service.test'

describe('useSolveLabyrinth', () => {
  test('When given a solvable Labyrinth, it should populate steps state', () => {
    const { result } = renderHook(() => useSolveLabyrinth())

    act(() => result.current.execute(THREE_STEPS_LABYRINTH))

    expect(result.current.steps).toBeTruthy()
    expect(result.current.error).toBeFalsy()

    act(() => result.current.execute(UNSOLVABLE_LABYRINTH))

    expect(result.current.steps).toBeTruthy()
    expect(result.current.error).toBeFalsy()
  })

  test('When given a invalid Labyrinth, it should populate error state', () => {
    const { result } = renderHook(() => useSolveLabyrinth())

    act(() => result.current.execute(INVALID_LABYRINTH))

    expect(result.current.steps).toBeFalsy()
    expect(result.current.error).toBeTruthy()
  })
})
