import { expect, test } from 'vitest'
import { search } from './script'

test('search for target 8 within an array of numbers', () => {
  const nums = [-1, 0, 2, 4, 6, 8]
  expect(search(nums, 8)).toBe(5)
})

test('search for target 2 within an array of numbers', () => {
  const nums = [-4, 0, 1, 2, 10, 22]
  expect(search(nums, 2)).toBe(3)
})

test('search for target 11 within an array of numbers - target does not exist', () => {
  const nums = [0, 1, 3, 4, 5, 22]
  expect(search(nums, 11)).toBe(-1)
})

test('search for target 1 within an array of numbers - array is empty', () => {
  const nums = []
  expect(search(nums, 11)).toBe(-1)
})
