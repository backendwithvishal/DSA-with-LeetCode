// 141 question on leetcode 

function hasCycle(head) {

    // Edge case: empty list or single node with no next
    if (head === null || head.next === null) return false;

    let slow = head;       //  moves 1 step at a time
    let fast = head;       //  moves 2 steps at a time

    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // move slow by 1 step
        fast = fast.next.next;   // move fast by 2 steps

        // If they meet, there's a cycle
        if (slow === fast) return true;
    }

    // fast reached null → no cycle
    return false;
}