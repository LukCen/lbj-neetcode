/**
    * @param {number[]} stones
    * @return {number}
    */

const stones_1 = [2, 3, 6, 2, 4]

function lastStoneWeight(stones) {
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
