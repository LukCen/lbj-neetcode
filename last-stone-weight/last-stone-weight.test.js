import { expect, test } from 'vitest'
import { lastStoneWeight } from './script'

test('return the weight of the last remaining stone', () => {
  const stones = [2, 3, 6, 2, 4]
  const stones_2 = [1, 2]
  expect(lastStoneWeight(stones)).toBe(1)
  expect(lastStoneWeight(stones_2)).toBe(1)
})
