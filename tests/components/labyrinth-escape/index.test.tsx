import { describe, expect, test } from 'vitest'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { LabyrinthEscape } from '../../../src/components/labyrinth-escape'

describe('LabyrinthEscape', () => {
  test('When fresh start, it should not display Success, Warning or Error messages', () => {
    const result = render(<LabyrinthEscape />)

    expect(result.queryByTestId('error_message')).toBeFalsy()
    expect(result.queryByTestId('warning_message')).toBeFalsy()
    expect(result.queryByTestId('success_message')).toBeFalsy()
  })

  test('When a invalid Labyrinth is submitted, it should present a ErrorMessage', async () => {
    const result = render(<LabyrinthEscape />)

    const submitButton = result.getByTestId('submit_button')

    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(result.queryByTestId('error_message')).toBeTruthy()
      expect(result.queryByTestId('success_message')).toBeFalsy()
      expect(result.queryByTestId('warning_message')).toBeFalsy()
    })
  })

  test('When a unsolvable Labyrinth is submitted, it should present a WarningMessage', async () => {
    const result = render(<LabyrinthEscape />)

    const startButton = result.getByTestId('start_button')
    const submitButton = result.getByTestId('submit_button')

    await userEvent.click(startButton)
    await userEvent.click(submitButton)

    await waitFor(() => {
      expect(result.queryByTestId('error_message')).toBeFalsy()
      expect(result.queryByTestId('success_message')).toBeFalsy()
      expect(result.queryByTestId('warning_message')).toBeTruthy()
    })
  })

  test('When a solvable Labyrinth is submitted, it should present a SuccessMessage', async () => {
    const result = render(<LabyrinthEscape />)

    const startButton = result.getByTestId('start_button')
    const exitButton = result.getByTestId('exit_button')
    const submitButton = result.getByTestId('submit_button')

    await userEvent.click(startButton)
    await userEvent.click(exitButton)
    await userEvent.click(submitButton)

    expect(result.queryByTestId('error_message')).toBeFalsy()
    expect(result.queryByTestId('warning_message')).toBeFalsy()
    expect(result.queryByTestId('success_message')).toBeTruthy()
  })
})
