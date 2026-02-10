// You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time.
// Return the number of distinct ways to climb to the top of the staircase.

function climbingStairs(i, n) {

  if (i > n) return 0;
  if (i === n) return 1
  return climbingStairs(i + 1, n) + climbingStairs(i + 2, n)
}

function climbStairs(n) {
  if (n == 0 || n == 1) return n

  let first = 1
  let second = 2

  for (let i = 3; i <= n; i++) {
    const next = first + second
    first = second
    second = next
  }
  return second
}


console.log(climbStairs(3))
