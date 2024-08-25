import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

import { cn } from '../../../utils/cn'

type NativeButton = ComponentProps<'button'>

type ButtonProps = NativeButton & Variant

type Variant = VariantProps<typeof variants>

const variants = cva(
  [
    'm-4 flex items-center gap-2 py-1.5 px-3 rounded-md transition-all',
    'ring-offset-2 ring-0 ring-transparent ring-offset-white/0 focus:ring-offset-white focus:ring-2 focus:ring-green-300',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-green-700 text-white hover:bg-green-600',
        secondary: 'bg-green-200 text-green-800 hover:bg-green-300',
        outline: 'border border-zinc-200 hover:bg-green-200',
      },
    },

    defaultVariants: {
      variant: 'primary',
    },
  }
)

export const Button = ({ className, variant, ...props }: ButtonProps) => (
  <button
    {...props}
    className={cn(variants({ className, variant }))}
  />
)
