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

/*
1. Input:  [1 → 1 → 2]

   Output: [1 → 2]

   Explanation: The second 1 is a duplicate and gets skipped.

2. Input:  [1 → 1 → 2 → 3 → 3]

   Output: [1 → 2 → 3]

   Explanation: Both pairs of duplicates (1,1) and (3,3) are reduced to one each.

3. Input:  [1 → 1 → 1]

   Output: [1]

   Explanation: All three are duplicates — only one node remains.

❌ Wrong input & output

4. Input:  [1 → 2 → 3]

   Wrong output: [1 → 3]   // ❌ incorrectly removed 2 (not a duplicate)
   Correct output: [1 → 2 → 3]  // ✅ no duplicates, list stays unchanged
*/