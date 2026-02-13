/*
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Assume all integers in the nums array are unique

Your solution must run in  O(logn) time.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// function search(nums, target) {

//   if (nums.includes(target)) {
//     return nums.indexOf(target)
//   }
//   return -1

// }
const nums = [-1, 0, 2, 4, 6, 8]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
*/

export function search(nums, target, offset = 0) {
  let middleIndex = Math.floor(nums.length / 2)
  let middle = nums[middleIndex]

  // early return if searched number happens to be in the middle
  if (target === middle) return middleIndex + offset

  if (target < middle) {
    const left = nums.slice(0, middleIndex)

    return search(left, target, offset)

  } else if (target > middle) {
    const right = nums.slice(middleIndex + 1)

    return search(right, target, offset + middleIndex + 1)
  }
  return middle || -1
}
console.log(search(nums, 8))


