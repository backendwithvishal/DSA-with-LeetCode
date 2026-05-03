function threeSum(nums) {

    const result = [];

    // Step 1: Sort array
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {

        // Skip duplicate numbers
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {

            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {

                // Found valid triplet
                result.push([nums[i], nums[left], nums[right]]);

                left++;
                right--;

                // Skip duplicates
                while (left < right && nums[left] === nums[left - 1]) left++;
                while (left < right && nums[right] === nums[right + 1]) right--;

            }
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }

    return result;
}

/*
input:- nums = [-1, 0, 1, 2, -1, -4]
*/

/*
output :- [
  [-1, -1, 2],
  [-1, 0, 1]
 */