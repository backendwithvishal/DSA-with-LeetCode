// question no :- 148 on leetcode

// Definition for singly-linked list
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var sortList = function(head) {
    // Base case: empty or single node
    if (!head || !head.next) return head;

    // Step 1: Find middle
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Split list into two halves
    prev.next = null; // cut the list

    // Step 3: Sort both halves
    let left = sortList(head);
    let right = sortList(slow);

    // Step 4: Merge sorted halves
    return merge(left, right);
};

// Helper function to merge two sorted lists
function merge(L1, L2) {
    let dummy = new ListNode(0);
    let tail = dummy;

    while (L1 && L2) {
        if (L1.val < L2.val) {
            tail.next = L1;
            L1 = L1.next;
        } else {
            tail.next = L2;
            L2 = L2.next;
        }
        tail = tail.next;
    }

    // Attach remaining notes
    tail.next = L1 || L2;

    return dummy.next;
}

/*
1. Input:  4 → 2 → 1 → 3
   Output: 1 → 2 → 3 → 4

   Explanation: Merge sort splits into [4,2] and [1,3], sorts each → [2,4] and [1,3], then merges → [1,2,3,4].

2. Input:  [-1 → 5 → 3 → 4 → 0]

   Output: [-1 → 0 → 3 → 4 → 5]

   Explanation: Merge sort splits, sorts, and merges halves recursively.

3. Input:  [1]

   Output: [1]

   Explanation: Single node — base case returns immediately.

❌ Wrong input & output

4. Input:  [3 → 1 → 2]

   Wrong output: [3 → 1 → 2]   // ❌ unsorted — sort was not applied
   Correct output: [1 → 2 → 3]  // ✅ ascending order
*/