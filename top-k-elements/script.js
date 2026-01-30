/**
 Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.
 */

nums = [1, 2, 2, 3, 3, 3]


function topKFrequent(nums, k) {
  const results = []
  const final = []
  const output = nums.reduce((acc, item) => {
    if (acc[item]) {
      ++acc[item]
    } else {
      acc[item] = 1
    }
    return acc
  }, {})

  Object.entries(output).forEach((e) => {
    results.push([parseInt(e[0]), e[1]])
  })

  results.sort((a, b) => b[1] - a[1])

  for (let i = 0; i < k; i++) {
    final.push(results[i][0])
  }

  return final
}

