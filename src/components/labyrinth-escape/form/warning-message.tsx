import { ComponentProps } from 'react'

type WarningMessageProps = ComponentProps<'span'>

export const WarningMessage = (props: WarningMessageProps) => (
  <div
    data-testid="warning_message"
    className="flex items-center gap-2 p-3 rounded-lg bg-yellow-700 text-white"
  >
    <span {...props} />
  </div>
)
