// 24 question on leetcode

var swapPairs = function(head) {
  // Dummy node lets us always have a 'prev' node before the first pair
  const dummy = { val: 0, next: head };
  let prev = dummy;

  // We need at least 2 nodes ahead to form a pair
  while (prev.next !== null && prev.next.next !== null) {
    const first = prev.next;        // first node of the pair
    const second = prev.next.next;  // second node of the pair

    // Step 1: first skips over second (points to whatever came after second)
    first.next = second.next;

    // Step 2: second points back to first (core of the swap)
    second.next = first;

    // Step 3: prev connects to second (second is now the new front of this pair)
    prev.next = second;

    // Move prev to first (first is now the tail of swapped pair)
    // Next iteration will process the pair starting at first.next
    prev = first;
  }

  return dummy.next; // head may have changed — always return dummy.next
};

/*
1. Input:  [1 → 2 → 3 → 4]

   Output: [2 → 1 → 4 → 3]

   Explanation: Pair (1,2) swapped → (2,1). Pair (3,4) swapped → (4,3).

2. Input:  [1 → 2 → 3]

   Output: [2 → 1 → 3]

   Explanation: Pair (1,2) swapped. Node 3 has no pair — stays in place.

3. Input:  [1]

   Output: [1]

   Explanation: Only one node, no pair to swap.

❌ Wrong input & output

4. Input:  [1 → 2 → 3 → 4 → 5 → 6]

   Wrong output: [2 → 1 → 3 → 4 → 5 → 6]   // ❌ only first pair swapped
   Correct output: [2 → 1 → 4 → 3 → 6 → 5]  // ✅ all pairs swapped
*/