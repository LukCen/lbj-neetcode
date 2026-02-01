// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.

const numbers_1 = [3, 4, 5, 6]
const target_1 = 7

function twoSum(nums, target) {
  for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (j === i) continue
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }
}

/**
 * @param {number[]} nums 
 * @param {number[]} target 
 */

const numbers_2 = [0, 2, 10, 4, 1, 7]
const target_2 = 14

function twoSum_2(nums, target) {
  const storage = new Map()
  let indexOfComponent = null
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (!storage.has(complement)) {
      storage.set(nums[i], i)
      console.log(storage)
    }
    else return [i, storage.get(complement)]
  }
  return [indexOfComponent, storage[1]]
}
console.log(twoSum_2(numbers_2, target_2))
