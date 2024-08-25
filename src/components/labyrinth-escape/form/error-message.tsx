import { Confetti, SealWarning } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

type ErrorMessageProps = ComponentProps<'span'>

export const ErrorMessage = (props: ErrorMessageProps) => (
  <div
    data-testid="error_message"
    className="flex items-center gap-2 p-3 rounded-lg bg-red-800 text-white"
  >
    <SealWarning weight="bold" />

    <span {...props} />
  </div>
)
