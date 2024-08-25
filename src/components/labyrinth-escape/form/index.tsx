import { CellsField } from '../cells-field'
import { Toolbar } from '../toolbar'
import { ErrorMessage } from './error-message'
import { SuccessMessage } from './success-message'
import { useForm } from './use-form'
import { WarningMessage } from './warning-message'

export const Form = () => {
  const { steps, error, handleSubmit } = useForm()

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3"
    >
      {!!steps && (
        <>
          {steps >= 0 && (
            <SuccessMessage>
              The algorithm has successfully solved the maze! It took {steps}
              {steps === 1 ? ' step' : ' steps'} to find the Exit.
              <br />
              Note: This is the shortest path to the Exit.
            </SuccessMessage>
          )}

          {steps <= -1 && (
            <WarningMessage>
              It seems this maze is unsolvable, or the Exit might be blocked.
            </WarningMessage>
          )}
        </>
      )}

      {!!error && <ErrorMessage>{error}</ErrorMessage>}
      <CellsField />
      <Toolbar />
    </form>
  )
}
