import { expect, test } from 'vitest'
import { topKFrequent } from './script'

test('works with valid input', () => {
  const nums = [1, 2, 2, 3, 3, 3]
  const nums_2 = [0, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7]
  const nums_3 = [0, 1, 2, 2, 2, 2, 3, 4, 4, 5, 5, 5, 6]
  expect(topKFrequent(nums, 2)).toStrictEqual([3, 2])
  expect(topKFrequent(nums_2, 2)).toStrictEqual([6, 3])
  expect(topKFrequent(nums_3, 3)).toStrictEqual([2, 5, 4])
})

test('works with invalid input - empty', () => {
  const nums = []
  expect(topKFrequent(nums, 2)).toStrictEqual([])
})
