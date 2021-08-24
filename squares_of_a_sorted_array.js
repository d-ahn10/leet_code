/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squaredNums = [];
    for (let i = 0; i < nums.length; i++) {
        squaredNums[i] = Math.abs(nums[i]*nums[i]);
    }
    return squaredNums.sort((a,b) => a - b);
};
