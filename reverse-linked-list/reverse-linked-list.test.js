import { expect, test } from 'vitest'
import { reverseList, ListNode } from './script'

test('handles valid list', () => {
  const head = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3))))
  expect(reverseList(head)).toStrictEqual(new ListNode(3, new ListNode(2, new ListNode(1, new ListNode(0)))))
})

test('handles empty list', () => {
  const head = new ListNode()
  expect(reverseList(head)).toStrictEqual(new ListNode())
})
