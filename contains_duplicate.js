/**
 * @param {number[]} nums
 * @return {boolean}
 */
// for...of loop
var containsDuplicate = function(nums) {
    const numMap = {};
    for (let num of nums) {
        if (numMap[num]) {
            return true;
        } else {
            numMap[num] = 1;
        }
    }
    return false;
};

// regular for loop
// var containsDuplicate = function(nums) {
//     const table = {};
//     for (let i = 0; i <= nums.length; i++) {
//         if (table[nums[i]]) {
//             return true;
//         } else {
//             table[nums[i]] = 1;
//         }
//     }
//     return false;
// };
