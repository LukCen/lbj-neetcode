// You are given an array of strings strs. Return the longest common prefix of all the strings.
// If there is no longest common prefix, return an empty string "".

// Example 1:
// Input: strs = ["bat","bag","bank","band"]
// Output: "ba"

// Example 2:
// Input: strs = ["dance","dag","danger","damage"]
// Output: "da"

// Example 3:
// Input: strs = ["neet","feet"]
// Output: ""

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200


const strs_1 = ['bat', 'bag', 'bank', 'band']
const strs_2 = ["dance", "dag", "danger", "damage"]
const strs_3 = ["neet", "feet"]


/**
 * 
 * @param {string[]} strs 
 */
export function longestCommonPrefix(strs) {
  const common = []
  const stringified = []
  let shortest = 0


  strs.forEach((e) => {
    if (e.length < shortest || shortest === 0) shortest = e.length
    stringified.push(e.split(""))
  })

  for (let i = 0; i < shortest; i++) {
    const current = stringified[0][i]

    if (stringified.every((c) => c[i] == current)) { common.push(current) } else { break }
  }

  return common.length === 0 ? "" : common.join("")
}

console.log(longestCommonPrefix(strs_1))
console.log(longestCommonPrefix(strs_2))
console.log(longestCommonPrefix(strs_3))
