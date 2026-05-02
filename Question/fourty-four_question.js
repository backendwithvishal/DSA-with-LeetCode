// 23 question on leetcode

var mergeKLists = function(lists) {
  // Edge case: empty input
  if (!lists || lists.length === 0) return null;

  // Keep merging pairs until only one list remains
  while (lists.length > 1) {
    const mergedPairs = [];

    // Step through lists array two at a time
    for (let i = 0; i < lists.length; i += 2) {
      const l1 = lists[i];
      // If i+1 is out of bounds (odd number of lists), pair with null
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;
      mergedPairs.push(mergeTwoLists(l1, l2));
    }

    // Replace lists with the merged results — half as many lists now
    lists = mergedPairs;
  }

  return lists[0];
};


// Classic merge two sorted linked lists — O(a + b)
function mergeTwoLists(l1, l2) {
  const dummy = { val: 0, next: null };
  let curr = dummy;

  // Pick the smaller head each time and advance that list
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }

  // Attach whichever list still has remaining nodes
  curr.next = l1 !== null ? l1 : l2;

  return dummy.next;
}

/*
1. Input:
lists = [
  [1,4,5],
  [1,3,4],
  [2,6]
]

Output:
[1,1,2,3,4,4,5,6]

Explanation:
Step-by-step explanation

Round 1:
merge [1,4,5] + [1,3,4] → [1,1,3,4,4,5]  
merge [2,6] + null → [2,6]  

lists becomes:
[[1,1,3,4,4,5], [2,6]]

Round 2:
merge both → [1,1,2,3,4,4,5,6]

Final answer = [1,1,2,3,4,4,5,6]


2. Input:
lists = []

Output:
null

Explanation:

lists.length = 0 → return null

This is a valid edge case handled correctly.


❌ wrong input & output

3. Input:
lists = [[], [1]]

Output:
[1]

Explanation:

First list is empty (null), second list = [1]

mergeTwoLists(null, [1]) → [1]

This is NOT a bug — handled correctly,
but can be misunderstood as a failure case.
*/