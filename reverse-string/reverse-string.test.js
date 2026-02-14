import { expect, test } from 'vitest'
import { reverseString } from './script'

test('string reversed properly', () => {
  const arr = ['a', 'b', 'c', 'd']
  reverseString(arr)
  expect(arr).toStrictEqual(['d', 'c', 'b', 'a'])

  const arr_2 = ['n', 'e', 'e', 't']
  reverseString(arr_2)
  expect(arr_2).toStrictEqual(['t', 'e', 'e', 'n'])

  const arr_3 = ["r", "a", "c", "e", "c", "a", "r"]
  reverseString(arr_3)
  expect(arr_3).toStrictEqual(["r", "a", "c", "e", "c", "a", "r"])
})
