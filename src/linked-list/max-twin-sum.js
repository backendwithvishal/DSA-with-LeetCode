// 2130 question on leetcode
var pairSum = function(head) {
    // Step 1: Find the middle of the linked list using slow & fast pointers
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;        // move slow pointer by 1
        fast = fast.next.next;   // move fast pointer by 2
    }

    // Step 2: Reverse the second half of the list starting from 'slow'
    let prev = null;
    let curr = slow;

    while (curr) {
        let next = curr.next; // store next node
        curr.next = prev;     // reverse current node's pointer
        prev = curr;          // move prev forward
        curr = next;          // move curr forward
    }

    // Step 3: Calculate twin sums and track the maximum
    let first = head;   // start from beginning
    let second = prev;  // start from reversed second half
    let maxSum = 0;

    while (second) {
        // compute sum of twin nodes and update maxSum
        maxSum = Math.max(maxSum, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    // return the maximum twin sum found
    return maxSum;
};
/*
input :- 1 → 2 → 3 → 4
find middle :- slow → 3
reverse second half :- 4 → 3
compare :- 1 + 4 = 5
           2 + 3 = 5
output :- 5
*/