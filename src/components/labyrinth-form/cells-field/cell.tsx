import { useEffect, useRef } from 'react'
import { Input } from '../../ui/input'

type CellFieldProps = {
  value: string
  focus: boolean
  onClick(): void
}

export const CellField = (props: CellFieldProps) => {
  const cellRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (props.focus) cellRef.current?.focus()
  }, [props.focus])

  return (
    <Input
      ref={cellRef}
      value={props.value}
      className="w-14 h-14 text-center"
      onChange={() => null}
      onClick={props.onClick}
    />
  )
}
