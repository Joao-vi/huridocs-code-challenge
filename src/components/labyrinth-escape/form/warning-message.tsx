import { Confetti } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

type WarningMessageProps = ComponentProps<'span'>

export const WarningMessage = (props: WarningMessageProps) => (
  <div className="flex items-center gap-2 p-3 rounded-lg bg-yellow-700 text-white">
    <span {...props} />
  </div>
)
