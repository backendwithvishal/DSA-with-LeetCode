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

/*
1. Input:
head = [1,2,3,4]

Output:
[1,4,2,3]

Explanation:
Step-by-step explanation

Original:
1 → 2 → 3 → 4

Phase 1 (find middle):
slow at 2

Phase 2 (reverse second half):
second half = 3 → 4 → becomes → 4 → 3

Split:
first = 1 → 2
second = 4 → 3

Phase 3 (merge):
1 → 4 → 2 → 3

Final answer = [1,4,2,3]


2. Input:
head = [1,2,3,4,5]

Output:
[1,5,2,4,3]

Explanation:
Step-by-step explanation

Original:
1 → 2 → 3 → 4 → 5

Phase 1:
slow at 3

Phase 2:
second half = 4 → 5 → becomes → 5 → 4

Split:
first = 1 → 2 → 3
second = 5 → 4

Phase 3:
1 → 5 → 2 → 4 → 3

Final answer = [1,5,2,4,3]


❌ wrong input & output

3. Input:
head = null

Output:
null

Explanation:

Condition:
if (!head || !head.next) return;

So function exits immediately

This is NOT a bug — it is a valid edge case handled correctly.
*/