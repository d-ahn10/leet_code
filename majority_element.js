// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 
// Follow-up: Could you solve the problem in linear time and in O(1) space?

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    // create a table with keys as nums array values and the value as occurrences.
    const occurrences = new Map();

    // loop thru the nums array to fill up the occurrences table.
    for (let i = 0; i < nums.length; i++) {
        if (occurrences.has(nums[i])) {
            occurrences.set(nums[i], occurrences.get(nums[i]) + 1);
        } else {
            occurrences.set(nums[i], 1);
        }
    }

    // loop thru the occurrences table and check with "n/2"
    for (const [key, val] of occurrences) {
        // if passes, then return that value (occurence table key).
        if (val > (nums.length / 2)) {
            return key;
        }
    }

    return "could not find majority element";
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2])); // 2