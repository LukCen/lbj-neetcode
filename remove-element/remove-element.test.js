import { expect, test } from 'vitest'
import { removeElement } from './script'

test('removes given values, returns the remnant', () => {
  const nums_1 = [1, 1, 2, 3, 4]
  const nums_2 = [0, 3, 4, 4, 2, 5, 6, 7, 7, 4, 0, 1, 4]
  expect(removeElement(nums_1, 1)).toBe(3)
  expect(removeElement(nums_2, 4)).toBe(9)
})

test('array is empty', () => {
  const nums = []
  expect(removeElement(nums, 1)).toBe(0)
})
