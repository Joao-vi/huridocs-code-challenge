import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react-hooks'
import { afterEach } from 'vitest'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
