// 83 question on leetcode 

var deleteDuplicates = function(head) {
  // Empty list or single node — nothing to remove
  if (!head || !head.next) return head;

  let curr = head; // start at the beginning

  while (curr !== null && curr.next !== null) {

    if (curr.val === curr.next.val) {
      // Duplicate found! Skip curr.next by jumping over it
      curr.next = curr.next.next;
      // Don't move curr — next node might ALSO be a duplicate
    } else {
      // No duplicate — safe to move forward
      curr = curr.next;
    }
  }

  return head; // head never changes in this problem
};