/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let current = dummy
    let carry = 0

    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry

        if (l1 !== null) {
            sum += l1.val
            l1 = l1.next
        }

        if (l2 !== null) {
            sum += l2.val
            l2 = l2.next
        }

        carry = Math.floor(sum/10) // наш перенос будет 0 или 1
        current.next = new ListNode(sum%10)
        current = current.next
    }

    return dummy.next
    
};