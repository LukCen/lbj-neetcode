import { expect, test } from 'vitest'
import { climbStairs } from './script'


test('amount of stairs is 10', () => {
  expect(climbStairs(10)).toBe(89)
})

test('amount of stairs is 3', () => {
  expect(climbStairs(3)).toBe(3)
})
