// 876 question on leetcode

function middleNode(head) {

    let slow = head;   // 🐢 moves 1 step at a time
    let fast = head;   // 🐇 moves 2 steps at a time

    // Keep going until fast reaches end of list
    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // slow moves 1 step
        fast = fast.next.next;  // fast moves 2 steps
    }

    // When fast is done, slow is exactly at the middle
    return slow;
}