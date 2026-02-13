/**
You are given an array of integers stones where stones[i] represents the weight of the ith stone.

We want to run a simulation on the stones as follows:

At each step we choose the two heaviest stones, with weight x and y and smash them togethers
If x == y, both stones are destroyed
If x < y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
Continue the simulation until there is no more than one stone remaining.

Return the weight of the last remaining stone or return 0 if none remain.
 
 */
/**
    * @param {number[]} stones
    * @return {number}
    */

const stones_1 = [2, 3, 6, 2, 4]

export function lastStoneWeight(stones) {
  /**
   * @param {number[]} sorted 
   */
  let sorted = stones.sort((a, b) => b - a)
  while (sorted.length > 1) {
    console.log(sorted)
    let [x, y] = sorted.splice(0, 2)
    // console.log(x, y)
    if (x === y) continue
    if (x < y) {
      y = y - x
      sorted.unshift(y)
    }
    if (x > y) {
      x = x - y
      sorted.unshift(x)
    }

    sorted = sorted.sort((a, b) => b - a)

  }
  return sorted[0] || 0
}

console.log(lastStoneWeight(stones_1))
