import { expect, test } from 'vitest'
import { longestCommonPrefix } from './script'

test('array contains valid strings', () => {
  const strs_1 = ['bat', 'bag', 'bank', 'band']
  const strs_2 = ["dance", "dag", "danger", "damage"]
  expect(longestCommonPrefix(strs_1)).toBe('ba')
  expect(longestCommonPrefix(strs_2)).toBe('da')
})

test('array contains strings with different first characters', () => {
  const strs_1 = ['neet', 'feet', 'beet']
  const strs_2 = ['test', 'jest', 'least']
  expect(longestCommonPrefix(strs_1)).toBe('')
  expect(longestCommonPrefix(strs_2)).toBe('')
})

test('array is empty', () => {
  const strs = []
  expect(longestCommonPrefix(strs)).toBe('')
})
