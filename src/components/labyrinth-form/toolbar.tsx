import { MagicWand } from '@phosphor-icons/react'
import { Button } from '../ui/button'

export const Toolbar = () => (
  <div className="flex items-center gap-3 p-3 border border-zinc-200 rounded-xl">
    <Button variant="secondary">Start</Button>
    <Button variant="secondary">Path</Button>
    <Button variant="secondary">Wall</Button>
    <Button variant="secondary">Exit</Button>

    <Button>
      Solve it
      <MagicWand weight="bold" />
    </Button>
  </div>
)
