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