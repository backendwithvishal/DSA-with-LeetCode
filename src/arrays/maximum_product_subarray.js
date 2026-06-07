// 152 question on Leetcode 

function maxProduct(nums) {

  // Start with first element (handles single-element array too)
  let curMax = nums[0];   // best product ending at current index
  let curMin = nums[0];   // worst product ending at current index (tracks negatives!)
  let result = nums[0];   // global maximum product found so far

  // Start from index 1 since index 0 is already our base
  for (let i = 1; i < nums.length; i++) {

    // When nums[i] is negative, curMax and curMin will SWAP after multiply
    // So we must save curMax before overwriting it!
    const tempMax = curMax;

    // Three candidates for new curMax:
    // 1. Start fresh from nums[i]                  (drop previous subarray)
    // 2. Extend curMax subarray with nums[i]        (positive × positive stays big)
    // 3. Extend curMin subarray with nums[i]        (negative × negative = positive!)
    curMax = Math.max(nums[i], curMax * nums[i], curMin * nums[i]);

    // Three candidates for new curMin:
    // We use tempMax here because curMax was just overwritten above
    curMin = Math.min(nums[i], tempMax * nums[i], curMin * nums[i]);

    // Update global result with best max seen so far
    result = Math.max(result, curMax);
  }

  return result;
}