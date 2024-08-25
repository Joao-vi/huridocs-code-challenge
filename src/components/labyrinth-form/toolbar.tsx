import { MagicWand } from '@phosphor-icons/react'
import { Button } from '../ui/button'
import { useLabyrinthContext } from './core/context'

export const Toolbar = () => {
  const { changeCell } = useLabyrinthContext()

  return (
    <div className="flex items-center gap-3 p-3 border border-zinc-200 rounded-xl">
      <Button
        variant="secondary"
        onClick={() => changeCell('S')}
      >
        Start
      </Button>
      <Button
        variant="secondary"
        onClick={() => changeCell('0')}
      >
        Path
      </Button>
      <Button
        variant="secondary"
        onClick={() => changeCell('1')}
      >
        Wall
      </Button>
      <Button
        variant="secondary"
        onClick={() => changeCell('E')}
      >
        Exit
      </Button>

      <Button type="submit">
        Solve it
        <MagicWand weight="bold" />
      </Button>
    </div>
  )
}
