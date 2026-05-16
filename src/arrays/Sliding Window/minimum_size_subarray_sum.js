// 209 question on leetcode 

function minSubArrayLen(target, nums) {
    let minLen = Infinity; // start with impossibly large value

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;

        for (let j = i; j < nums.length; j++) {
            sum += nums[j]; // grow the window sum

            if (sum >= target) {
                // valid window found → record length and stop expanding
                minLen = Math.min(minLen, j - i + 1);
                break; // smaller window from same i won't exist
            }
        }
    }

    // if minLen never updated → no valid subarray found
    return minLen === Infinity ? 0 : minLen;
}