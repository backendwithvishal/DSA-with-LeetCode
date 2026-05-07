// 21 question on leetcode

var mergeTwoLists = function(list1, list2) {
  // Dummy node — gives us a stable starting point without special head logic
  const dummy = { val: 0, next: null };
  let curr = dummy; // curr builds the merged list step by step

  // Compare both list heads and pick the smaller one each time
  while (list1 !== null && list2 !== null) {

    if (list1.val <= list2.val) {
      curr.next = list1;   // attach list1 node
      list1 = list1.next;  // advance list1
    } else {
      curr.next = list2;   // attach list2 node
      list2 = list2.next;  // advance list2
    }

    curr = curr.next; // move curr forward in merged list
  }

  // One list is exhausted — attach the rest of the other (already sorted)
  curr.next = list1 !== null ? list1 : list2;

  // dummy.next is the real head of the merged list
  return dummy.next;
};

/*
1. Input:  list1 = [1 → 2 → 4]
           list2 = [1 → 3 → 4]

   Output: [1 → 1 → 2 → 3 → 4 → 4]

   Explanation: Compare heads each time and pick the smaller one.
   1 vs 1 → pick 1 (list1) → 2 vs 1 → pick 1 (list2) → 2 vs 3 → pick 2 → 4 vs 3 → pick 3 → 4 vs 4 → pick 4 (list1) → attach 4 (list2)

2. Input:  list1 = [1 → 3 → 5]
           list2 = [2 → 4 → 6]

   Output: [1 → 2 → 3 → 4 → 5 → 6]

   Explanation: Alternating picks — 1, 2, 3, 4, 5, 6

3. Input:  list1 = []
           list2 = [1 → 2]

   Output: [1 → 2]

   Explanation: list1 is null, while loop never runs, curr.next = list2 directly

❌ Wrong input & output

4. Input:  list1 = [2 → 4]
           list2 = [1 → 3]

   Wrong output: [2 → 1 → 4 → 3]   // ❌ not sorted — just alternating
   Correct output: [1 → 2 → 3 → 4]  // ✅ always pick the smaller head
*/