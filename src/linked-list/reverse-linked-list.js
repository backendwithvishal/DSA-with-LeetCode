// 206 question on leetcode 

var reverseList = function(head) {
  let prev = null; // will become the new tail (null) at start
  let curr = head; // start processing from the head

  while (curr !== null) {
    const nextNode = curr.next; // save next BEFORE we overwrite it

    curr.next = prev; // flip the pointer — curr now points backwards

    prev = curr;      // prev moves one step forward
    curr = nextNode;  // curr moves one step forward (using saved reference)
  }

  // curr is null (past the end), prev is the new head
  return prev;
};

/*
1. Input:  [1 → 2 → 3 → 4 → 5]

   Output: [5 → 4 → 3 → 2 → 1]

   Explanation: Each node's pointer is flipped to point to the previous node.

2. Input:  [1 → 2]

   Output: [2 → 1]

   Explanation: Two-node list — just swap the direction.

3. Input:  []

   Output: []

   Explanation: Empty list — head is null, loop never runs, returns null.

❌ Wrong input & output

4. Input:  [1 → 2 → 3]

   Wrong output: [1 → 3 → 2]   // ❌ only last two nodes swapped
   Correct output: [3 → 2 → 1]  // ✅ all pointers reversed
*/