// You are given an array of characters which represents a string s. Write a function which reverses a string.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["n","e","e","t"]
// Output: ["t","e","e","n"]

// Example 2:
// Input: s = ["r","a","c","e","c","a","r"]
// Output: ["r","a","c","e","c","a","r"]

// Constraints:
// 1 <= s.length < 100,000
// s[i] is a printable ascii character.

const arr = ['a', 'b', 'c', 'd']
// console.log(arr)
/**
 * Reverses the string in place
 * @param {string[]} s - Array of valid ASCII characters to be reversed
 * @returns {void} 
 */
export function reverseString(s) {
  for (let i = 0; i < s.length; i++) {
    const last = s.splice(s.length - 1, 1)
    s.splice(i, 0, ...last)
    console.log(s)
  }
}
reverseString(arr)

