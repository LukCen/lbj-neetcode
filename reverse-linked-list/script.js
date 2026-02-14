// Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

// Example 1:
// Input: head = [0,1,2,3]
// Output: [3,2,1,0]

// Example 2:
// Input: head = []
// Output: []

// Constraints:

// 0 <= The length of the list <= 1000.
// -1000 <= Node.val <= 1000


/**
 * Definition for singly-linked list.

 */
export class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}
const head = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))))
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
console.log(head)
export function reverseList(head) {
  let nextNode = null
  let previous = null
  let current = head
  while (current !== null) {

    //save where we're going next
    nextNode = current.next

    //update the next node
    current.next = previous

    // reverse 
    previous = current

    //move
    current = nextNode
  }
  return previous
}

console.log(reverseList(head))

