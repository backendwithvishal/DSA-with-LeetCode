// 239 question on leetcode

function maxSlidingWindow(nums, k) {
    const result = [];
    const deque  = []; // stores INDICES in decreasing order of their VALUES

    for (let right = 0; right < nums.length; right++) {

        //  1: remove expired index from front
        // if front index is outside current window [right - k+1 ... right]
        if (deque.length > 0 && deque[0] < right - k + 1) {
            deque.shift(); // front element has left the window
        }

        // 2: remove useless indices from back
        // if back element's value <= current value → it will never be max → remove it
        while (deque.length > 0 && nums[deque[deque.length - 1]] <= nums[right]) {
            deque.pop(); // remove smaller/equal old elements from back
        }

        // 3: add current index to back of deque
        deque.push(right);

        // 4: record max once first full window is formed
        if (right >= k - 1) {
            result.push(nums[deque[0]]); // front of deque = index of max in window
        }
    }

    return result;
}