import { expect, test } from 'vitest'
import { merge } from './script'

test('function works', () => {
  const nums1 = [10, 20, 20, 40, 0, 0]
  const nums2 = [1, 2]
  merge(nums1, 4, nums2, 2)
  expect(nums1).toStrictEqual([1, 2, 10, 20, 20, 40])


  const nums2_1 = [1, 2, 3, 0, 0, 0]
  const nums2_2 = [2, 5, 6]
  merge(nums2_1, 3, nums2_2, 3)
  expect(nums2_1).toStrictEqual([1, 2, 2, 3, 5, 6])
})
