/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const table = {};
    for (let i = 0; i <= nums.length; i++) {
        if (table[nums[i]]) {
            return true;
        } else {
            table[nums[i]] = 1;
        }
    }
    return false;
};
