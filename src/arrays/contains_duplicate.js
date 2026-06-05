// 217 question on Leetcode 

function containsDuplicate(nums) {

  // Set keeps track of every number we've seen so far
  const seen = new Set();

  for (let i = 0; i < nums.length; i++) {

    // If current number is already in the set → duplicate found!
    if (seen.has(nums[i])) {
      return true;
    }

    // Not seen before → add it to the set and keep going
    seen.add(nums[i]);
  }

  // Finished the loop without finding any duplicate
  return false;
}