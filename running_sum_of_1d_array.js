/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let ans = [];
    let currNum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (i) {
            currNum += nums[i];
            ans[i] = currNum;
        } else {
            ans[i] = nums[i];
        }
    }
    return ans;
};
