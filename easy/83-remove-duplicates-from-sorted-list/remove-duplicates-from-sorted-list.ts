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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let current = head; // Начинаем с головы списка

  while (current !== null && current.next !== null) {
    if (current.val === current.next.val) {
      current.next = current.next.next; // Удаляем дубликат
    } else {
      current = current.next; // Двигаемся дальше
    }
  }

  return head;
}