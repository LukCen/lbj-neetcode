// You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

// The input string s is valid if and only if:

// Every open bracket is closed by the same type of close bracket.
// Open brackets are closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
// Return true if s is a valid string, and false otherwise.

const string_1 = "[[[]"

/**
 * 
 * @param {string} string 
 */

export function isValid(string) {
  const stack = []
  const intoStrings = string.split("")
  const openingBrackets = ["(", "[", "{"]
  const closingBrackets = [")", "]", "}"]

  // if the entry string is empty/invalid or contains an odd amount of characters, matching is impossible, as there will be at least one bracket left without a pair - early return
  if (!string || string.length % 2 === 1) return false

  // if the string contains only opening or closing brackets, matching is impossible - early return
  if (intoStrings.every((i) => openingBrackets.includes(i)) || intoStrings.every((i) => closingBrackets.includes(i))) return false

  for (let i = 0; i <= intoStrings.length - 1; i++) {
    const currentCharacter = intoStrings[i]
    // if current character is an opening bracket, add it to stack
    if (openingBrackets.includes(currentCharacter)) {
      stack.push(currentCharacter)
      // if it's a closing bracket, compare it to the LAST element in stack, see if a match
    } else if (closingBrackets.includes(currentCharacter)) {
      // look up the indices of currently handled elements in their respective arrays - for a valid pair, they must be equal
      const isMatch = closingBrackets.indexOf(currentCharacter) === openingBrackets.indexOf(stack[stack.length - 1])
      if (isMatch) {
        // remove the last element from the stack if it matches
        stack.pop()
      } else {
        // even one mismatch is a failure according to the task requirements - early return to cover for that
        return false
      }
    }
  }
  // probably a bit unnecessary here, but it works so I'll leave it
  return true ? stack.length === 0 : false
}

console.log(isValid(string_1))


