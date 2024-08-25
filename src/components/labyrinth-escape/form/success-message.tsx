import { Confetti } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

type SuccessMessageProps = ComponentProps<'span'>

export const SuccessMessage = (props: SuccessMessageProps) => (
  <div className="flex items-center gap-2 p-3 rounded-lg bg-zinc-800 text-white">
    <Confetti weight="bold" />

    <span {...props} />
  </div>
)
