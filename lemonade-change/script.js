// At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

// Note that you do not have any change in hand at first.

// You are given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

// Example 1:
// Input: bills = [5,10,5,5,20]
// Output: true

// Explanation:
// From first customer, we collect one $5 bill.
// From second customer, we collect $10 bill and give back $5 bill.
// From third and fourth customers, we collect two $5 bills.
// From fifth customer, we collect $20 bill and give back one $10 bill and $5 bill.

// Example 2:
// Input: bills = [5,20,10,5]
// Output: false

// Constraints:

// 1 <= bills.length <= 100,000
// bills[i] is either 5, 10, or 20.

/**
  * @param {number[]} bills
  * @return {boolean}
*/
function lemonadeChange(bills) {
  const valid = [5, 10, 20]
  const income = []

  // early return if first bill is other than 5 - we have no change to give back, this transaction cannot complete
  if (income.length === 0 && bills[0] === 10 || income.length === 0 && bills[0] === 20) return false
  for (let i = 0; i < bills.length - 1; i++) {
    income.sort((a, b) => b - a)
    if (bills[i] === 5) {
      income.push(bills[i])
    } else {
      let currentBill = bills[i]
      const remnant = bills[i] - 5
      let toGiveBack = []
      while (remnant > 0) {
        let j = 0
        if (income[j] <= currentBill) {
          toGiveBack.push(income.splice(income[j], 1))
          remnant = remnant - income[j]
        }
      }

    }
  }
  return true
}
