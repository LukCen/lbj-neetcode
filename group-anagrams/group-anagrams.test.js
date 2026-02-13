import { test, expect } from 'vitest'
import { groupAnagrams } from './script'

test('test for anagrams', () => {
  const strs = ["act", "pots", "tops", "cat", "stop", "hat"]
  expect(groupAnagrams(strs)).toStrictEqual([['act', 'cat'], ['pots', 'tops', 'stop'], ['hat']]
  )
})
