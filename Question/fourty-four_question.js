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