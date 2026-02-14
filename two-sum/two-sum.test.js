import { expect, test } from 'vitest'
import { twoSum_2 } from './script'

test('valid input array, target exists within', () => {
  const numbers = [0, 2, 10, 4, 1, 7]
  const target = 14
  const numbers_2 = [3, 2, 4, 7, 7, 1, 2, 6]
  const target_2 = 11
  expect(twoSum_2(numbers, target)).toStrictEqual([3, 2])
  expect(twoSum_2(numbers_2, target_2)).toStrictEqual([3, 2])
})
