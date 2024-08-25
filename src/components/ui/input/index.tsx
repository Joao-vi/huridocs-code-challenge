import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

import { cn } from '../../../utils/cn'

type NativeInput = ComponentProps<'input'>

type InputProps = NativeInput & Variant

type Variant = VariantProps<typeof variants>

const variants = cva([
  'py-1.5 px-3 rounded-md transition-all border border-zinc-200 outline-none bg-neutral-50',
  'ring-offset-2 ring-0 ring-transparent ring-offset-white/0 focus:ring-offset-white focus:ring-2 focus:ring-green-300',
  'hover:bg-neutral-100',
])

export const Input = ({ className, ...props }: InputProps) => (
  <input
    {...props}
    className={cn(variants({ className }))}
  />
)
