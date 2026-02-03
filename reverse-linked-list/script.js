/**
 * Definition for singly-linked list.

 */
class ListNode {
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
function reverseList(head) {
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

