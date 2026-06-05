// 1 question on Leetcode 

function twoSum(nums, target) {

  // Map stores { number → index } for fast complement lookup
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {

    const complement = target - nums[i];  // what number do we need?

    // If complement was seen before → we found our pair!
    if (seen.has(complement)) {
      return [seen.get(complement), i];   // return [earlier index, current index]
    }

    // Complement not found yet → store current number and its index
    seen.set(nums[i], i);
  }
}