// 238 question on leetcode 

function productExceptSelf(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  // ── Pass 1: Fill answer[] with prefix products ──────────────────────────
  // answer[i] = product of all elements to the LEFT of index i
  // Start with 1 (no elements to the left of index 0)

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;       // store product of everything left of i
    leftProduct *= nums[i];        // update for next index
  }

  // After pass 1:
  // answer = [1, 1, 2, 6]  for nums = [1, 2, 3, 4]

  // ── Pass 2: Multiply answer[] with suffix products ───────────────────────
  // Traverse from RIGHT to LEFT
  // rightProduct holds product of all elements to the RIGHT of index i

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;     // combine prefix (already stored) × suffix
    rightProduct *= nums[i];       // update for next index (going left)
  }

  // After pass 2:
  // answer = [24, 12, 8, 6]  ✅

  return answer;
}