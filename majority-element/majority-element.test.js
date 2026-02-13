import { expect, test } from 'vitest'
import { majorityElement } from './script'

test('returns the number that appears most commonly', () => {
  const nums_1 = [5, 5, 1, 1, 1, 5, 5]
  const nums_2 = [0, 2, 3, 4, 4, 2, 0, 11, 0, 35, 7, 0]
  const nums_3 = [2, 2, 2]
  expect(majorityElement(nums_1)).toBe(5)
  expect(majorityElement(nums_2)).toBe(0)
  expect(majorityElement(nums_3)).toBe(2)
})

