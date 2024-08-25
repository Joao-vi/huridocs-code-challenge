import { useLabyrinthContext } from '../core/context'
import { CellField } from './cell'

export const CellsField = () => {
  const { labyrinth, isSelected, selectCell } = useLabyrinthContext()

  return (
    <div className="flex flex-col gap-2">
      {labyrinth.map((item, x) => (
        <div className="flex items-center gap-2">
          {item.map((row, y) => (
            <CellField
              key={row + y}
              value={row}
              focus={isSelected({ x, y })}
              onClick={() => selectCell({ x, y })}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
