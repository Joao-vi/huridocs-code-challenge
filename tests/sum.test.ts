import { sum } from '../src'

describe('Sum function', () => {
  test('When given 2 and 2, should return 4', () => {
    expect(sum(2, 2)).toBe(4)
  })
})
