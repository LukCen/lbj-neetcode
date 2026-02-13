// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times in the array. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [5,5,1,1,1,5,5]

// Output: 5
// Example 2:

// Input: nums = [2,2,2]

// Output: 2
// Constraints:

// 1 <= nums.length <= 50,000
// -1,000,000,000 <= nums[i] <= 1,000,000,000

/**
 * @param {number[]} nums
 * @return {number}
*/
const nums = [5, 5, 1, 1, 1, 5, 5]
export function majorityElement(nums) {
  const numMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (numMap.has(nums[i])) {
      numMap.set(nums[i], numMap.get(nums[i]) + 1)
    } else numMap.set(nums[i], 1)
  }

  const keys = [...numMap.keys()]
  const values = [...numMap.values()]

  return keys.find((e) => numMap.get(e) == Math.max(...values))
}

console.log(majorityElement(nums))
