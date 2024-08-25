import { LabyrinthProvider } from './core/context'
import { Form } from './form'
import { Header } from './header'

export const LabyrinthEscape = () => {
  return (
    <LabyrinthProvider>
      <div className="flex flex-col items-center gap-6">
        <Header />

        <Form />
      </div>
    </LabyrinthProvider>
  )
}
