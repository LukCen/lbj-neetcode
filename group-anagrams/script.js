const strs = ["act", "pots", "tops", "cat", "stop", "hat"]

/**
 * @param {Array<string>} strs 
 */
// function groupAnagrams(strs) {
//   const output = []
//   function uniques(el) {
//     let seen = {}
//     return el.filter((item) => {
//       return seen.hasOwnProperty(item) ? false : (seen[item] = true)
//     })
//   }
//   strs.map((elem) => {
//     const stringified = elem.split("").sort()
//     output.push(strs.filter((el) =>
//       el.split("").sort().every((e) => stringified.includes(e))
//     ))

//   })

//   const final = uniques(output)
//   return final
// }

// console.log(groupAnagrams(strs))

/**
 * 
 * 1) take element from given array, split into characters
 * 2) 
 * 
 * 
 */

export function groupAnagrams(strs) {
  const output = []
  function uniques(el) {
    let seen = {}
    return el.filter((item) => {
      const key = JSON.stringify(item);
      return seen.hasOwnProperty(key) ? false : (seen[key] = true)
    })
  }
  strs.map((elem) => {
    const stringified = elem.split("").sort().join("")
    output.push(strs.filter((el) => {
      const sortedEl = el.split("").sort().join("");
      return sortedEl === stringified && el.length === elem.length;
    }))

  })

  const final = uniques(output)
  return final
}
console.log(groupAnagrams(strs))
