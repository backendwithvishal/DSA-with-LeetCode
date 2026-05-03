// 143 question on leetcode

var reorderList = function (head) {
    if (!head || !head.next) return; // 0 or 1 node — nothing to reorder

    // ---- PHASE 1: Find the middle using slow & fast pointers ----
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;       // moves 1 step
        fast = fast.next.next;  // moves 2 steps
    }
    // slow is now at the middle node

    // ---- PHASE 2: Reverse the second half of the list ----
    let prev = null;
    let curr = slow.next;  // start of second half
    slow.next = null;      // cut the list into two halves

    while (curr !== null) {
        const nextNode = curr.next; // save next before overwriting
        curr.next = prev;           // reverse the pointer
        prev = curr;                // move prev forward
        curr = nextNode;            // move curr forward
    }
    // prev is now the head of the reversed second half

    // ---- PHASE 3: Interleave the two halves ----
    let first = head;  // head of first half
    let second = prev; // head of reversed second half

    while (second !== null) {
        const nextFirst = first.next;   // save next of first half
        const nextSecond = second.next; // save next of second half

        first.next = second;            // first points to second half node
        second.next = nextFirst;        // second points to next of first half

        first = nextFirst;              // advance first pointer
        second = nextSecond;            // advance second pointer
    }
    // list is now reordered in-place ✅
};